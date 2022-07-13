import { Err } from "../../shared/Err"

export default class AuthenticationErrors extends Err {
  type = "AUTHENTICATION_ERRORS"

  static invalidCredentials() {
    return new AuthenticationErrors({
      statusCode: 403,
      body: {
        code: "INVALID_CREDENTIALS",
        message: "Password is incorrect",
      },
    })
  }
}
