import { Err } from "../../shared/Err"

export default class UserErrors extends Err {
  type: "USER_ERRORS"

  static notFound() {
    return new UserErrors({
      statusCode: 404,
      body: {
        code: "USER_NOT_FOUND_ERROR",
        message: "A user with the given conditions was not found",
      },
    })
  }
}
