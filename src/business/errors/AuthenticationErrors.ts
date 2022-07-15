import { Err } from "../../shared/Err"

export default class AuthenticationErrors extends Err {
  type = "AUTHENTICATION_ERRORS"

  static invalidCredentials() {
    return new AuthenticationErrors({
      statusCode: 401,
      body: {
        code: "INVALID_CREDENTIALS",
        message: "Password is incorrect",
      },
    })
  }

  static tokenError() {
    return new AuthenticationErrors({
      statusCode: 401,
      body: {
        code: "INVALID_TOKEN",
        message: "Invalid token",
      },
    })
  }

  static tokenExpired() {
    return new AuthenticationErrors({
      statusCode: 401,
      body: {
        code: "TOKEN_EXPIRED",
        message: "Token expired",
      },
    })
  }
}
