interface ResponseError {
  response: Response
  body: object

  [Symbol.toStringTag]: 'ResponseError'
}

interface ResponseErrorConstructor {
  new(response: Response, body: object): ResponseError
  (response: Response, body: object): ResponseError

  prototype: ResponseError
}

declare var ResponseError: ResponseErrorConstructor
