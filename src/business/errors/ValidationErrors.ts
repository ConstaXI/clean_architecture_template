import { Err } from "../../shared/Err"

export default class ValidationErrors extends Err {
  type: "VALIDATION_ERRORS"

  static validationError(details: unknown) {
    return new ValidationErrors({
      statusCode: 400,
      body: {
        code: "VALIDATION_ERROR",
        message: "Your input did not pass validation",
        details,
      },
    })
  }
}
