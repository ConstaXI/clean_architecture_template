import { injectable } from "inversify"
import { IUniqueIdentifierService } from "../../../src/business/services/uniqueIdentifier/iUniqueIdentifier"

@injectable()
export class FakeUniqueIdentifierService implements IUniqueIdentifierService {
  create(): string {
    return "uuid-1234-rfc-4122"
  }
}

export const fakeUniqueIdentifierServiceCreate = jest.spyOn(
  FakeUniqueIdentifierService.prototype,
  "create"
)
