import { injectable } from "inversify"
import bcrypt, { genSalt } from "bcryptjs"
import { IHashService } from "../../../business/services/hasher/iHasher"

@injectable()
export class HashService implements IHashService {
  async create(s: string): Promise<string> {
    const salt = await genSalt(6)

    return bcrypt.hash(s, salt)
  }

  async compare(value: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(value, hashed)
  }
}
