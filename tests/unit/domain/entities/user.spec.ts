import { User } from "../../../../src/domain/entities/User"
import { fakeCreateUserInput } from "../../../fakes/user"

describe("User", () => {
  describe("create", () => {
    test("Should create a user entity", () => {
      const user = User.create(fakeCreateUserInput).applyOnRight(
        (rightUser) => {
          expect(rightUser.export()).toStrictEqual({
            ...fakeCreateUserInput,
            id: undefined,
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
            deletedAt: undefined,
          })
        }
      )

      expect(user.isRight()).toBeTruthy()
    })
  })
})
