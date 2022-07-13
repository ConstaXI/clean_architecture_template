import { Err } from "../../shared/Err"

export default class UserErrors extends Err {
  type: "USER_ERRORS"

  static entityCreationError(details: unknown) {
    return new UserErrors({
      statusCode: 400,
      body: {
        code: "USER_CREATION_ERROR",
        message: "User creation error",
        details,
      },
    })
  }
}
