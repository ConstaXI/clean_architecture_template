import { injectable } from "inversify"
import { InputCreateUser, IUser } from "../../../src/domain/entities/User"
import {
  DefaultOutput,
  IUserRepository,
} from "../../../src/business/repositories/interfaces/iUserRepository"
import { fakeUser } from "../../fakes/user"
import { Either, right } from "../../../src/shared/either"
import UserErrors from "../../../src/business/errors/UserErrors"
import { Where } from "../../../src/business/repositories/where"

@injectable()
export class FakeUserRepository implements IUserRepository {
  async create(_i: InputCreateUser): Promise<Either<UserErrors, IUser>> {
    return right(fakeUser)
  }

  async findBy(_where: Where<IUser>): Promise<DefaultOutput> {
    return right(fakeUser)
  }
}

export const fakeUserRepositoryCreate = jest.spyOn(
  FakeUserRepository.prototype,
  "create"
)
