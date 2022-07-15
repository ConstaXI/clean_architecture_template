const types = {
  ok: {
    statusCode: 200,
  },
  created: {
    statusCode: 201,
  },
  noContent: {
    statusCode: 204,
  },
  badRequest: {
    statusCode: 400,
  },
  unauthorized: {
    statusCode: 401,
  },
  forbidden: {
    statusCode: 403,
  },
  notFound: {
    statusCode: 404,
  },
  internalError: {
    statusCode: 500,
  },
}

type HttpResponse = {
  statusCode: number
  body: unknown
  isBase64Encoded: boolean
  headers: { [key: string]: string | boolean }
}

export const httpResponse = (
  responseType: keyof typeof types,
  body: unknown,
  headers?: { [K: string]: unknown },
  isBase64Encoded = false
): HttpResponse => ({
  statusCode: types[responseType].statusCode,
  body: isBase64Encoded ? body : JSON.stringify(body),
  isBase64Encoded,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    Accept: "*/*",
    "Access-Control-Allow-Credentials": true,
    ...headers,
  },
})
