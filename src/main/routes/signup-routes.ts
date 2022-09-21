import { Router } from 'express'
import { adapterRoute } from '../adapter/express-route-adapter'
import { makeSignUpController } from '../factories/signup'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post('/signup', adapterRoute(makeSignUpController()))
}
