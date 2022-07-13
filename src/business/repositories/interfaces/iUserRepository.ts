import { InputCreateUser, IUser } from "../../../domain/entities/User"
import { Either } from "../../../shared/either"
import UserErrors from "../../errors/UserErrors"
import { Where } from "../where"
import DatabaseErrors from "../../errors/DatabaseErrors"

export const IUserRepositoryToken = Symbol.for("IUserRepositoryToken")

export type DefaultOutput = Either<DatabaseErrors | UserErrors, IUser>

export interface IUserRepository {
  create(user: InputCreateUser): Promise<DefaultOutput>
  findBy(where: Where<IUser>): Promise<DefaultOutput>
}
