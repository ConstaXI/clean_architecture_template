import { ContainerModule } from "inversify"
import { IHashServiceToken } from "../../business/services/hasher/iHasher"
import { HashService } from "../../infra/services/hasher/hasherService"
import { UniqueIdentifierService } from "../../infra/services/uniqueIdentifier/uniqueIdentifierService"
import { IUniqueIdentifierServiceToken } from "../../business/services/uniqueIdentifier/iUniqueIdentifier"
import { IAuthenticatorServiceToken } from "../../business/services/authenticator/iAuthenticator"
import { AuthenticatorService } from "../../infra/services/authenticator/AuthenticatorService"

export const servicesModule = new ContainerModule((bind) => {
  bind(IHashServiceToken).to(HashService)
  bind(IUniqueIdentifierServiceToken).to(UniqueIdentifierService)
  bind(IAuthenticatorServiceToken).to(AuthenticatorService)
})
