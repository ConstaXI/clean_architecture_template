import { InputCreateUser, IUser } from "../../src/domain/entities/User"

export const fakeCreateUserInput: InputCreateUser = {
  firstName: "FakeName",
  surname: "FakeSurname",
  password: "fakePassword",
  email: "fake@email.com",
}

export const fakeUser: IUser = {
  id: 1,
  uuid: "fakeUuid",
  ...fakeCreateUserInput,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: undefined,
}
