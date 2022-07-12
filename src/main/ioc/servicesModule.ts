import { ContainerModule } from "inversify"
import { IHashServiceToken } from "../../business/services/hasher/iHasher"
import { HashService } from "../../infra/hasher/hasherService"

export const servicesModule = new ContainerModule((bind) => {
  bind(IHashServiceToken).to(HashService)
})
