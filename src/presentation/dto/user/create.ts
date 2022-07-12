import { Either } from "../../../shared/either"
import { IUser } from "../../../domain/entities/User"
import UserErrors from "../../../business/errors/UserErrors"
import ValidationErrors from "../../../business/errors/ValidationErrors"

export type OutputCreateUserController = Either<
  UserErrors | ValidationErrors,
  IUser
>
