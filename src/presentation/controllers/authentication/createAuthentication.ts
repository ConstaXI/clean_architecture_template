import { inject, injectable } from "inversify"
import FindUserByUseCase from "../../../business/useCases/user/FindUserByUseCase"
import { CreateTokenUseCase } from "../../../business/useCases/authentication/CreateTokenUseCase"
import {
  IHashService,
  IHashServiceToken,
} from "../../../business/services/hasher/iHasher"
import { InputCreateAuthentication } from "../../serializers/authentication/input/inputCreateAuthetication"
import AbstractController from "../AbstractController"
import { OutputCreateAuthentication } from "../../dto/authentication/create"
import { left, right } from "../../../shared/either"
import AuthenticationErrors from "../../../business/errors/AuthenticationErrors"
import { ITokenPayload } from "../../../main/utility/types"

@injectable()
export class CreateAuthenticationOperator extends AbstractController<
  InputCreateAuthentication,
  OutputCreateAuthentication
> {
  constructor(
    @inject(FindUserByUseCase) private findUserByUseCase: FindUserByUseCase,
    @inject(CreateTokenUseCase)
    private createTokenUseCase: CreateTokenUseCase,
    @inject(IHashServiceToken) private hashService: IHashService
  ) {
    super()
  }

  async handle(
    input: InputCreateAuthentication
  ): Promise<OutputCreateAuthentication> {
    this.validate(input)

    const user = await this.findUserByUseCase.execute({
      email: input.email,
    })

    if (user.isLeft()) {
      return left(user.value)
    }

    const isPasswordCorrect = await this.hashService.compare(
      input.password,
      user.value.password
    )

    if (!isPasswordCorrect) {
      return left(AuthenticationErrors.invalidCredentials())
    }

    const tokenPayload: ITokenPayload = {
      userUuid: user.value.uuid as string,
    }

    const tokenResult = await this.createTokenUseCase.execute({
      payload: tokenPayload,
    })

    if (tokenResult.isLeft()) {
      return left(tokenResult.value)
    }

    return right({
      user: user.value,
      token: tokenResult.value.token,
    })
  }
}
