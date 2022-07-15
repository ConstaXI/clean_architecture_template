import "../../ioc/inversify.config"
import { IHandlerInput, IHandlerResult } from "../../utility/types"
import { container } from "../../../shared/ioc/container"
import { InputCreateAuthentication } from "../../../presentation/serializers/authentication/input/inputCreateAuthetication"
import { httpResponse } from "../../utility/httpResponse"
import { middyfy } from "../../utility/lamba"
import { CreateAuthenticationController } from "../../../presentation/controllers/authentication/CreateAuthentication"

const create = async (event: IHandlerInput): Promise<IHandlerResult> => {
  const operator = container.get(CreateAuthenticationController)

  const input = new InputCreateAuthentication(event.body)

  const authenticationResult = await operator.handle(input)

  if (authenticationResult.isLeft()) {
    throw authenticationResult.value
  }

  return httpResponse("ok", authenticationResult.value)
}

export const handler = middyfy(create)
