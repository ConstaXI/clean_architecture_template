import { InputCreateUser, IUser } from "../../../domain/entities/User"
import { Either } from "../../../shared/either"
import UserErrors from "../../errors/UserErrors"

export const IUserRepositoryToken = Symbol.for("IUserRepositoryToken")

export interface IUserRepository {
  create(user: InputCreateUser): Promise<Either<UserErrors, IUser>>
}
