import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { AbstractSerializer } from "../../AbstractSerializer"
import { InputCreateUser } from "../../../../domain/entities/User"

export type IInputCreateUserSerializer = InputCreateUser

export default class InputCreateUserSerializer
  extends AbstractSerializer<IInputCreateUserSerializer>
  implements IInputCreateUserSerializer
{
  @IsEmail()
  email: string

  @IsNotEmpty()
  firstName: string

  @IsNotEmpty()
  surname: string

  @IsNotEmpty()
  @MinLength(8)
  password: string
}
