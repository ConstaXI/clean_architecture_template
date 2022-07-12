import { IPolicy } from "./types"

type Context = { [k: string]: unknown }

export const generatePolicy = (
  principalId: string,
  effect: "Allow" | "Deny",
  context: Context = {},
  resourceArn = ""
): IPolicy => ({
  principalId,
  policyDocument: {
    Version: "2012-10-17",
    Statement: [
      {
        Action: "execute-api:Invoke",
        Effect: effect,
        Resource: resourceArn,
      },
    ],
  },
  context,
})

export const policyGenerator = (): {
  deny: (resourceArn: string) => IPolicy
  allow: (principalId: string, context: Context, resourceArn: string) => IPolicy
} => ({
  deny: (resourceArn: string) =>
    generatePolicy("denied_policy", "Deny", {}, resourceArn),
  allow: (principalId: string, context: Context, resourceArn: string) =>
    generatePolicy(principalId, "Allow", context, resourceArn),
})
