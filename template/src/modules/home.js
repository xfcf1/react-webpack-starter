import { createAction, createReducer } from 'redux-act'

export const toggleClassName = createAction('toggle class name')

const initialState = {
  className: true
}

export default createReducer({
  [toggleClassName]: (state, data) => ({ ...state, className: data })
}, initialState)
