import { Exclude } from "class-transformer"
import { IUser } from "../../../../domain/entities/User"

export default class PublicUser implements IUser {
  @Exclude() id: number
  uuid: string
  email: string
  firstName: string
  surname: string
  @Exclude() password: string
  updatedAt: Date
  createdAt: Date
  @Exclude() deletedAt: Date
}
