import { InputCreateUser, IUser } from "../../../domain/entities/User"
import { Either } from "../../../shared/either"
import { Err } from "../../../shared/Err"

export const IUserRepositoryToken = Symbol.for("IUserRepositoryToken")

export interface IUserRepository {
  create(user: InputCreateUser): Promise<Either<Err, IUser>>
}
