import middy from "@middy/core"
import { Context } from "aws-lambda"
import { methods } from "../utility/middleware"
import { IHandlerInput, IHandlerResult } from "../utility/types"

/**
 * This middleware must be used with @middy/http-error-handler
 */
export const RequestEventMiddyMiddleware = (): middy.MiddlewareObj<
  IHandlerInput,
  IHandlerResult,
  unknown,
  Context
> => ({
  before: async ({ event }) => {
    const eventMethods = methods(event)

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(eventMethods)) {
      Object.defineProperty(event, key, {
        value,
        enumerable: true,
      })
    }
  },
})
