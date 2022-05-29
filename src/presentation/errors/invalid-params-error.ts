export class InvalidParamError extends Error {
  constructor (paramsName: string) {
    super(`Invalid param: ${paramsName}`)
    this.name = 'InvalidParamError'
  }
}
