import { inject } from "inversify"
import AbstractUseCase from "../AbstractUseCase"
import {
  InputFindUserByUseCase,
  OutputFindUserByUseCase,
} from "../../dto/user/findBy"
import {
  IUserRepository,
  IUserRepositoryToken,
} from "../../repositories/interfaces/iUserRepository"

export default class FindUserByUseCase extends AbstractUseCase<
  InputFindUserByUseCase,
  OutputFindUserByUseCase
> {
  constructor(
    @inject(IUserRepositoryToken) private userRepository: IUserRepository
  ) {
    super()
  }

  async execute(
    input: InputFindUserByUseCase
  ): Promise<OutputFindUserByUseCase> {
    return this.userRepository.findBy(input)
  }
}
