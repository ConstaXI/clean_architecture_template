import { InputCreateUser, IUser } from "../../../domain/entities/User"
import { Either } from "../../../shared/either"
import UserErrors from "../../errors/UserErrors"

export type InputCreateUserUseCase = InputCreateUser

export type OutputCreateUserUseCase = Either<UserErrors, IUser>
