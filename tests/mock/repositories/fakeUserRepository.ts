import { injectable } from "inversify"
import { InputCreateUser, IUser } from "../../../src/domain/entities/User"
import { IUserRepository } from "../../../src/business/repositories/interfaces/iUserRepository"
import { fakeUser } from "../../fakes/user"
import { Either, right } from "../../../src/shared/either"
import UserErrors from "../../../src/business/errors/UserErrors"

@injectable()
export class FakeUserRepository implements IUserRepository {
  async create(_i: InputCreateUser): Promise<Either<UserErrors, IUser>> {
    return right(fakeUser)
  }
}

export const fakeUserRepositoryCreate = jest.spyOn(
  FakeUserRepository.prototype,
  "create"
)
