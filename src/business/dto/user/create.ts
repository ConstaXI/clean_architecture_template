import { InputCreateUser, IUser } from "../../../domain/entities/User"
import { Either } from "../../../shared/either"
import UserErrors from "../../errors/UserErrors"
import DatabaseErrors from "../../errors/DatabaseErrors"

export type InputCreateUserUseCase = InputCreateUser

export type OutputCreateUserUseCase = Either<DatabaseErrors | UserErrors, IUser>
