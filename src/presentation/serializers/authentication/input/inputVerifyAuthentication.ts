import { IsNotEmpty, IsString } from "class-validator"
import { AbstractSerializer } from "../../AbstractSerializer"

export class InputVerifyAuthentication extends AbstractSerializer<{
  token: string
}> {
  @IsString()
  @IsNotEmpty()
  token: string
}
