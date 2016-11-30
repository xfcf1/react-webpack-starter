import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import homeReducer from './home'
import testReducer from './test'

const rootReducer = combineReducers({
  routing,
  homeReducer,
  testReducer
})

export default rootReducer
