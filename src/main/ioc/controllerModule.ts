import { ContainerModule, interfaces } from "inversify"
import CreateUserController from "../../presentation/controllers/user/CreateUserController"

export const controllerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateUserController).toSelf()
})
