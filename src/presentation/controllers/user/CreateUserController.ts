import { inject, injectable } from "inversify"
import AbstractController from "../AbstractController"
import CreateUserUseCase from "../../../business/useCases/user/CreateUserUseCase"
import InputCreateUserSerializer from "../../serializers/user/input/InputCreateUserSerializer"
import { left } from "../../../shared/either"
import { OutputCreateUserController } from "../../dto/user/create"
import PublicUser from "../../serializers/user/output/PublicUser"
import FindUserByUseCase from "../../../business/useCases/user/FindUserByUseCase"
import UserErrors from "../../../business/errors/UserErrors"

@injectable()
export default class CreateUserController extends AbstractController<
  InputCreateUserSerializer,
  OutputCreateUserController
> {
  constructor(
    @inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase,
    @inject(FindUserByUseCase) private findUserByUseCase: FindUserByUseCase
  ) {
    super()
  }

  async handle(
    input: InputCreateUserSerializer
  ): Promise<OutputCreateUserController> {
    const either = this.validate(input)

    if (either.isLeft()) {
      return left(either.value)
    }

    const alreadyExists = await this.findUserByUseCase.execute({
      email: input.email,
    })

    if (alreadyExists.isRight()) {
      return left(UserErrors.alreadyExists())
    }

    return (await this.createUserUseCase.execute(input)).applyOnRight((user) =>
      this.format(PublicUser, user)
    )
  }
}
