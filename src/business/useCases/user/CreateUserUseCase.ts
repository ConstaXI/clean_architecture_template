import { inject, injectable } from "inversify"
import AbstractUseCase from "../AbstractUseCase"
import {
  InputCreateUserUseCase,
  OutputCreateUserUseCase,
} from "../../dto/user/create"
import {
  IUserRepository,
  IUserRepositoryToken,
} from "../../repositories/interfaces/iUserRepository"
import { IHashService, IHashServiceToken } from "../../services/hasher/iHasher"
import { User } from "../../../domain/entities/User"

@injectable()
export default class CreateUserUseCase extends AbstractUseCase<
  InputCreateUserUseCase,
  OutputCreateUserUseCase
> {
  constructor(
    @inject(IUserRepositoryToken) private userRepository: IUserRepository,
    @inject(IHashServiceToken) private hashService: IHashService
  ) {
    super()
  }

  async execute(
    input: InputCreateUserUseCase
  ): Promise<OutputCreateUserUseCase> {
    const hashPassword = await this.hashService.create(input.password)

    const user = User.create({
      ...input,
      password: hashPassword,
    })

    return this.userRepository.create(user.value.export())
  }
}
