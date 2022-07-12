import { Repository } from "typeorm"
import { injectable } from "inversify"
import { IUserRepository } from "../../business/repositories/interfaces/iUserRepository"
import { InputCreateUser, IUser } from "../../domain/entities/User"
import { Either, left, right } from "../../shared/either"
import UserErrors from "../../business/errors/UserErrors"
import UserEntity from "../models/User"
import datasource from "../db/datasource"

@injectable()
export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<UserEntity>

  constructor() {
    this.ormRepository = datasource.getRepository(UserEntity)
  }

  async create(input: InputCreateUser): Promise<Either<UserErrors, IUser>> {
    try {
      const user = this.ormRepository.create(input)

      return right(await this.ormRepository.save(user))
    } catch (error) {
      return left(UserErrors.entityCreationError(error))
    }
  }
}
