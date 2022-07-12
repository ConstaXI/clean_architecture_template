import { inject, injectable } from "inversify"
import AbstractController from "../AbstractController"
import CreateUserUseCase from "../../../business/useCases/user/CreateUserUseCase"
import InputCreateUserSerializer from "../../serializers/user/input/InputCreateUserSerializer"
import { left } from "../../../shared/either"
import { OutputCreateUserController } from "../../dto/user/create"

@injectable()
export default class CreateUserController extends AbstractController<
  InputCreateUserSerializer,
  OutputCreateUserController
> {
  constructor(
    @inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase
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

    return this.createUserUseCase.execute(input)
  }
}
