import { Err } from "../../shared/Err"

export default class DatabaseErrors extends Err {
  static queryError(details: unknown) {
    return new DatabaseErrors({
      statusCode: 500,
      body: {
        code: "QUERY_ERROR",
        message: "Database failed querying entity due to unexpected error",
        details,
      },
    })
  }

  static entityCreationError(details: unknown) {
    return new DatabaseErrors({
      statusCode: 500,
      body: {
        code: "ENTITY_CREATION_ERROR",
        message: "Database failed creating entity due to unexpected error",
        details,
      },
    })
  }
}
