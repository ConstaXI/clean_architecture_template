import { InputCreateUser, IUser } from "../../src/domain/entities/User"

export const fakeUser: IUser = {
  id: 1,
  uuid: "fakeUuid",
  email: "fake@email.com",
  firstName: "FakeName",
  surname: "FakeSurname",
  password: "fakePassword",
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: undefined,
}

export const fakeCreateUserInput: InputCreateUser = {
  firstName: "FakeName",
  surname: "FakeSurname",
  password: "fakePassword",
  email: "fake@email.com",
}
