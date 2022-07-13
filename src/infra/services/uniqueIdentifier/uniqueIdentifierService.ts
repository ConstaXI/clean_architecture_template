import { injectable } from "inversify"
import crypto from "crypto"
import { IUniqueIdentifierService } from "../../../business/services/uniqueIdentifier/iUniqueIdentifier"

@injectable()
export class UniqueIdentifierService implements IUniqueIdentifierService {
  create(): string {
    return crypto.randomUUID()
  }
}
