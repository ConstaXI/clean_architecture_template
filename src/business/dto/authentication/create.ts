import { Err } from "../../../shared/Err"
import { Either } from "../../../shared/either"

export type InputAuthenticateUseCase = {
  payload: { [index: string]: string | number | boolean }
}

export type OutputAuthenticateUseCase = Either<
  Err,
  {
    token: string
  }
>
