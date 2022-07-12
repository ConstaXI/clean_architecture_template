import middy, { MiddlewareObj } from "@middy/core"
import httpCors from "@middy/http-cors"
import httpErrorHandler from "@middy/http-error-handler"
import jsonBodyParser from "@middy/http-json-body-parser"
import { Context } from "aws-lambda"
import { RequestEventMiddyMiddleware } from "../middlewares/eventRequestMethods"
import { IHandlerInput } from "./types"
import datasource from "../../infra/db/datasource"

export const middyfy = (
  handler: (e: IHandlerInput, context?: Context) => Promise<unknown>
): middy.MiddyfiedHandler<IHandlerInput, unknown, unknown, Context> =>
  middy(async (e: IHandlerInput, c: Context) => {
    await datasource.initialize()

    // eslint-disable-next-line no-param-reassign
    c.callbackWaitsForEmptyEventLoop = false

    return handler(e, c)
  })
    .use(jsonBodyParser())
    .use(httpErrorHandler())
    .use(httpCors())
    .use(
      RequestEventMiddyMiddleware() as MiddlewareObj<
        unknown,
        unknown,
        Error,
        Context
      >
    )
