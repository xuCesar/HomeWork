import { create }  from 'dva-core'
import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'

let app, store, dispatch;

const createApp = (options) => {

  if (process.env.NODE_ENV === 'development') {
    options.onAction = [createLogger()]
  }

  app = create(options)
  app.use(createLoading({}))

  if (!global.registered) options.models.forEach((model) => app.model(model))
  global.registered = true
  app.start()

  store = app._store
  app.getStore = () => store

  dispatch = store.dispatch

  app.dispatch = dispatch
  return app

}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  }
}