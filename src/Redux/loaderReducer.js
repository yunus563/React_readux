import { COMMENTS_LOADER_ON, COMMENTS_LOADER_0FF, ERROR_ON,  ERROR_OFF } from './types'

const initialState = {
  loading: false,
  error: null
}

const loadingReducer = (state=initialState, action) => {
  console.log("LOADER------>", action)
  switch(action.type) {
    case COMMENTS_LOADER_ON:
      return{
        ...state,
        loading: true
      }
    case COMMENTS_LOADER_0FF:
      return {
        ...state,
        loading: false
      }
    case ERROR_ON:
      return {
        ...state,
        error: action.text
      }
    case ERROR_OFF:
      return {
        ...state,
        error: null
      }
    default: 
      return state
  }
}

export default loadingReducer 