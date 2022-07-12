import { ContainerModule } from "inversify"
import UserEntity from "../../infra/models/User"

export const modelsModule = new ContainerModule((bind) => {
  bind(UserEntity).toConstructor(UserEntity)
})
