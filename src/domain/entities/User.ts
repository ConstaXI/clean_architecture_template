import { Timestamps } from "../timestamps"
import { SoftDelete } from "../softDelete"
import { AbstractEntity } from "../AbstractEntity"
import { right, Right } from "../../shared/either"

export interface IUser extends Timestamps, SoftDelete {
  id?: number
  uuid?: string
  email: string
  firstName: string
  surname: string
  password: string
}

export type InputCreateUser = Pick<
  IUser,
  "email" | "firstName" | "surname" | "password" | "uuid"
>

export class User extends AbstractEntity<IUser> {
  static create(props: InputCreateUser): Right<void, User> {
    const currentDate = new Date()

    const user = new User({
      ...props,
      id: undefined,
      createdAt: currentDate,
      updatedAt: currentDate,
      deletedAt: undefined,
    })

    return right(user)
  }
}
