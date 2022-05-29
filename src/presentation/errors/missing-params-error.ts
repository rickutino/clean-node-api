export class MissingParamError extends Error {
  constructor (paramsName: string) {
    super(`Missing param: ${paramsName}`)
    this.name = ''
  }
}
