export const IAuthenticatorServiceToken = Symbol.for(
  "IAuthenticatorServiceToken"
)

export type TokenVerifyFormat = {
  [k: string]: string | number
}

export interface IAuthenticatorService {
  sign(payload: { [k: string]: string | number | boolean }): Promise<string>
  verify(token: string): Promise<TokenVerifyFormat>
}
