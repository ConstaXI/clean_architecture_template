import { Repository } from "typeorm"
import { injectable } from "inversify"
import {
  DefaultOutput,
  IUserRepository,
} from "../../business/repositories/interfaces/iUserRepository"
import { InputCreateUser, IUser } from "../../domain/entities/User"
import { left, right } from "../../shared/either"
import UserErrors from "../../business/errors/UserErrors"
import UserEntity from "../models/User"
import datasource from "../db/datasource"
import { Where } from "../../business/repositories/where"
import DatabaseErrors from "../../business/errors/DatabaseErrors"

@injectable()
export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<UserEntity>

  constructor() {
    this.ormRepository = datasource.getRepository(UserEntity)
  }

  async create(input: InputCreateUser): Promise<DefaultOutput> {
    try {
      const user = this.ormRepository.create(input)

      return right(await this.ormRepository.save(user))
    } catch (error) {
      return left(DatabaseErrors.entityCreationError(error))
    }
  }

  async findBy(where: Where<IUser>): Promise<DefaultOutput> {
    try {
      const user = await this.ormRepository.findOneBy({ ...where })

      if (!user) {
        return left(UserErrors.notFound())
      }

      return right(user)
    } catch (error) {
      return left(DatabaseErrors.queryError(error))
    }
  }
}
