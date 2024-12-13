if (globalThis.ResponseError !== ResponseError)
  globalThis.ResponseError = ResponseError

function ResponseError(response, body) {
  if (!(this instanceof ResponseError))
    return new ResponseError(response, body)

  this.response = response
  this.body = body
}

ResponseError.prototype[Symbol.toStringTag] = 'ResponseError'
