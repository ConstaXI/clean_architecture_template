import { ContainerModule } from "inversify"
import CreateUserUseCase from "../../business/useCases/user/CreateUserUseCase"
import FindUserByUseCase from "../../business/useCases/user/FindUserByUseCase"
import CreateTokenUseCase from "../../business/useCases/authentication/CreateTokenUseCase"

export const useCaseModule = new ContainerModule((bind) => {
  bind(CreateUserUseCase).toSelf()
  bind(FindUserByUseCase).toSelf()
  bind(CreateTokenUseCase).toSelf()
})
