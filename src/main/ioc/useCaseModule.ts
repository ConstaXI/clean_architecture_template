import { ContainerModule } from "inversify"
import CreateUserUseCase from "../../business/useCases/user/CreateUserUseCase"

export const useCaseModule = new ContainerModule((bind) => {
  bind(CreateUserUseCase).toSelf()
})
