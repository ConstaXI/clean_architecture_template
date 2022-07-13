import { Either } from "../../../shared/either"
import { IUser } from "../../../domain/entities/User"
import UserErrors from "../../../business/errors/UserErrors"
import DatabaseErrors from "../../../business/errors/DatabaseErrors"
import AuthenticationErrors from "../../../business/errors/AuthenticationErrors"

export type OutputCreateAuthentication = Either<
  AuthenticationErrors | UserErrors | DatabaseErrors,
  {
    user: IUser
    token: string
  }
>
