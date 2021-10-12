import { combineReducers } from 'redux'
import likesReducer from './likesReducer'
import inputReducer from './inputReducer'
import commentsReducer from './commentsReducer'
import loadingReducer from './loaderReducer'

export const RootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentsReducer,
  loadingReducer
})

