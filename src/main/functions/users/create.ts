import InputCreateUserSerializer from "../../../presentation/serializers/user/input/InputCreateUserSerializer"
import { IHandlerInput, IHandlerResult } from "../../utility/types"
import { container } from "../../../shared/ioc/container"
import CreateUserController from "../../../presentation/controllers/user/CreateUserController"
import { httpResponse } from "../../utility/httpResponse"
import { middyfy } from "../../utility/lamba"
import "../../ioc/inversify.config"

const create = async (event: IHandlerInput): Promise<IHandlerResult> => {
  const input = new InputCreateUserSerializer(event.body)

  const controller = container.get(CreateUserController)

  const userResult = await controller.handle(input)

  if (userResult.isLeft()) {
    return httpResponse("badRequest", userResult.value)
  }

  return httpResponse("created", userResult.value)
}

export const handler = middyfy(create)
