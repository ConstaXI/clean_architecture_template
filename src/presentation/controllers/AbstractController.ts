import { injectable } from "inversify"
import { plainToInstance } from "class-transformer"
import { Either, left, right } from "../../shared/either"
import ValidationErrors from "../../business/errors/ValidationErrors"
import { AbstractSerializer } from "../serializers/AbstractSerializer"
import { Err } from "../../shared/Err"

type ClassConstructor<T> = {
  new (...args: unknown[]): T
}

@injectable()
export default abstract class AbstractController<
  I,
  O extends Either<Err, unknown>
> {
  abstract handle(input: I, ...args: unknown[]): Promise<O>

  protected validate(
    input: AbstractSerializer<I>
  ): Either<ValidationErrors, void> {
    const errors = input.validate()

    if (errors.length) {
      const details = errors.map((err) => ({
        property: err.property,
        value: `value <${err.value}> did not pass validation`,
        errors: err.constraints
          ? Object.entries(err.constraints).map(([, value]) => value)
          : undefined,
      }))

      return left(ValidationErrors.validationError(details))
    }

    return right(undefined)
  }

  protected format<T>(cls: ClassConstructor<T>, obj: T): T
  protected format<T>(cls: ClassConstructor<T>, obj: T[]): T[]
  protected format<T>(cls: ClassConstructor<T>, obj: T | T[]): T | T[] {
    return plainToInstance(cls, obj)
  }
}
