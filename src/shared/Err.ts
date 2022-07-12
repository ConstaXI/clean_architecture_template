type ErrorBody = {
  code: string
  message: string
  details?: unknown
}

export class Err {
  statusCode: number
  body: ErrorBody

  constructor({ statusCode, body }: { statusCode: number; body: ErrorBody }) {
    this.statusCode = statusCode
    this.body = body
  }
}
