import { Either } from "../../../shared/either"
import { User } from "../../../domain/entities/User"
import { IInputCreateUserSerializer } from "../../serializers/user/input/InputCreateUserSerializer"
import UserErrors from "../../../business/errors/UserErrors"
import ValidationErrors from "../../../business/errors/ValidationErrors"

export type OutputCreateUserController = Either<
  UserErrors | ValidationErrors,
  User
>

export type InputCreateUserUseCase = IInputCreateUserSerializer
