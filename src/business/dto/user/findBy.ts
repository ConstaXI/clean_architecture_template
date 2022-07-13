import { IUser } from "../../../domain/entities/User"
import { Either } from "../../../shared/either"
import UserErrors from "../../errors/UserErrors"
import { Where } from "../../repositories/where"
import DatabaseErrors from "../../errors/DatabaseErrors"

export type InputFindUserByUseCase = Where<IUser>

export type OutputFindUserByUseCase = Either<UserErrors | DatabaseErrors, IUser>
