import { injectable } from "inversify"
import JWT from "jsonwebtoken"
import {
  IAuthenticatorService,
  TokenVerifyFormat,
} from "../../../business/services/authenticator/iAuthenticator"
import env from "../../../main/config/env"
import { Either, left, right } from "../../../shared/either"
import AuthenticationErrors from "../../../business/errors/AuthenticationErrors"

const secret = env.JwtSecret

if (!secret) {
  throw new Error("No secret provided in .env")
}

@injectable()
export class AuthenticatorService implements IAuthenticatorService {
  async sign(payload: { [k: string]: string | number }): Promise<string> {
    return JWT.sign(payload, secret, {
      expiresIn: "1d",
      algorithm: "HS256",
    })
  }

  async verify(
    token: string
  ): Promise<Either<AuthenticationErrors, TokenVerifyFormat>> {
    try {
      return right(JWT.verify(token, secret) as TokenVerifyFormat)
    } catch (error) {
      if (error instanceof JWT.TokenExpiredError) {
        return left(AuthenticationErrors.tokenExpired())
      }

      return left(AuthenticationErrors.tokenError())
    }
  }
}
