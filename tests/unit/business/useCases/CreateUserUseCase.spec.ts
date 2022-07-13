import { container } from "../../../../src/shared/ioc/container"
import { IUserRepositoryToken } from "../../../../src/business/repositories/interfaces/iUserRepository"
import { FakeUserRepository } from "../../../mock/repositories/fakeUserRepository"
import CreateUserUseCase from "../../../../src/business/useCases/user/CreateUserUseCase"
import { fakeCreateUserInput, fakeUser } from "../../../fakes/user"
import { IHashServiceToken } from "../../../../src/business/services/hasher/iHasher"
import { FakeHashService } from "../../../mock/services/fakeHashService"
import { IUniqueIdentifierServiceToken } from "../../../../src/business/services/uniqueIdentifier/iUniqueIdentifier"
import { FakeUniqueIdentifierService } from "../../../mock/services/fakeUniqueIdentifierService"

describe("CreateUserUseCase", () => {
  beforeAll(() => {
    container.bind(IUserRepositoryToken).to(FakeUserRepository)
    container.bind(IHashServiceToken).to(FakeHashService)
    container
      .bind(IUniqueIdentifierServiceToken)
      .to(FakeUniqueIdentifierService)
    container.bind(CreateUserUseCase).toSelf()
  })

  test("Should call repository with correct values", async () => {
    const useCase = container.get(CreateUserUseCase)
    const either = (await useCase.execute(fakeCreateUserInput)).applyOnRight(
      (rightUser) => {
        expect(rightUser).toStrictEqual(fakeUser)
      }
    )
    expect(either.isRight()).toBeTruthy()
  })
})
