import {
  APIGatewayAuthorizerEvent,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda"

export interface ITokenPayload {
  user_uuid: string

  [index: string]: string | number
}

export interface IRequestMethods {
  only: <E>(array: (keyof E)[]) => E
  input: (input: string) => unknown | undefined
  pathParam: <I, D = undefined>(
    input: keyof I,
    defaultValue?: D
  ) => Record<keyof I, string | D>
  pathParams: <E>(array: (keyof E)[]) => E
  qs: <E>(array: (keyof E)[]) => E
}

export interface IHandlerInput<T = ITokenPayload>
  extends Omit<APIGatewayProxyEvent, "body">,
    IRequestMethods {
  body: { [k: string]: string | undefined }
  auth?: T
}

export interface IHandlerResult extends Omit<APIGatewayProxyResult, "body"> {
  body: unknown
}

export type IHandlerCustomAuthorizer = APIGatewayAuthorizerEvent

export type IPolicy = {
  principalId: string
  policyDocument: {
    Version: "2012-10-17"
    Statement: {
      Action: string
      Effect: "Allow" | "Deny"
      Resource: string
    }[]
  }
  context: {
    [k: string]: unknown
  }
}
