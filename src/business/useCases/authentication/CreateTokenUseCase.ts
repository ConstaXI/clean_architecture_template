import { inject, injectable } from "inversify"
import AbstractUseCase from "../AbstractUseCase"
import {
  InputAuthenticateUseCase,
  OutputAuthenticateUseCase,
} from "../../dto/authentication/create"
import {
  IAuthenticatorService,
  IAuthenticatorServiceToken,
} from "../../services/authenticator/iAuthenticator"
import { right } from "../../../shared/either"

@injectable()
export class CreateTokenUseCase
  implements
    AbstractUseCase<InputAuthenticateUseCase, OutputAuthenticateUseCase>
{
  constructor(
    @inject(IAuthenticatorServiceToken)
    private authenticatorService: IAuthenticatorService
  ) {}

  async execute(
    input: InputAuthenticateUseCase
  ): Promise<OutputAuthenticateUseCase> {
    const token = await this.authenticatorService.sign(input.payload)

    return right({ token })
  }
}
