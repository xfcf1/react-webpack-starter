import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../modules'

const logger = () => {
  return createLogger({
    level: 'info',
    collapsed: true
  })
}

const router = routerMiddleware(hashHistory)

const enhancer = applyMiddleware(thunk, router, logger())

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../modules', () =>
      store.replaceReducer(require('../modules'))
    )
  }

  return store
}
