import { Either } from "../../../shared/either"
import { IUser } from "../../../domain/entities/User"
import UserErrors from "../../../business/errors/UserErrors"
import ValidationErrors from "../../../business/errors/ValidationErrors"
import DatabaseErrors from "../../../business/errors/DatabaseErrors"

export type OutputCreateUserController = Either<
  UserErrors | ValidationErrors | DatabaseErrors,
  IUser
>
