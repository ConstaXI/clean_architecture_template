import { ContainerModule, interfaces } from "inversify"
import UserEntity from "../../infra/models/User"

export const modelsModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(UserEntity).toConstructor(UserEntity)
})
