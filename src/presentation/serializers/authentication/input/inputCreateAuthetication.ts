import { IsEmail, IsString, MinLength } from "class-validator"
import { AbstractSerializer } from "../../AbstractSerializer"

type InputCreateAuthenticationDto = {
  email: string
  password: string
}

export class InputCreateAuthentication extends AbstractSerializer<InputCreateAuthenticationDto> {
  @IsString()
  @IsEmail()
  email: string

  @IsString()
  @MinLength(8)
  password: string
}
