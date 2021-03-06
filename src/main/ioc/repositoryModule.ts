import { ContainerModule } from "inversify"
import {
  IUserRepository,
  IUserRepositoryToken,
} from "../../business/repositories/interfaces/iUserRepository"
import UserRepository from "../../infra/repositories/UserRepository"

export const repositoryModule = new ContainerModule((bind) => {
  bind<IUserRepository>(IUserRepositoryToken).to(UserRepository)
})
