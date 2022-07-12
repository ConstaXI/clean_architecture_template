import { ContainerModule } from "inversify"
import CreateUserController from "../../presentation/controllers/user/CreateUserController"

export const controllerModule = new ContainerModule((bind) => {
  bind(CreateUserController).toSelf()
})
