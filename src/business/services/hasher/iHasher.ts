export const IHashServiceToken = Symbol.for("IHasherServiceToken")

export interface IHashService {
  create(s: string): Promise<string>
  compare(s: string, h: string): Promise<boolean>
}
