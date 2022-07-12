import { injectable } from "inversify"
import { Either } from "../../shared/either"
import { Err } from "../../shared/Err"

type DefaultEither = Either<Err, unknown>

@injectable()
export default abstract class AbstractUseCase<I, O extends DefaultEither> {
  abstract execute(input: I, ...args: unknown[]): Promise<O>
}
