import { ContainerModule } from "inversify"
import CreateUserController from "../../presentation/controllers/user/CreateUserController"
import { CreateAuthenticationController } from "../../presentation/controllers/authentication/CreateAuthentication"

export const controllerModule = new ContainerModule((bind) => {
  bind(CreateUserController).toSelf()
  bind(CreateAuthenticationController).toSelf()
})
