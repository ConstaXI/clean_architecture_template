import { injectable } from "inversify"
import { IHashService } from "../../../src/business/services/hasher/iHasher"

@injectable()
export class FakeHashService implements IHashService {
  async compare(_s: string, _h: string): Promise<boolean> {
    return true
  }

  async create(s: string): Promise<string> {
    return s
  }
}

export const fakeHashServiceCompare = jest.spyOn(
  FakeHashService.prototype,
  "compare"
)

export const fakeHashServiceCreate = jest.spyOn(
  FakeHashService.prototype,
  "create"
)
