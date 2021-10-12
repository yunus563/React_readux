
import {INCREMENT ,DICREMENT} from './types'

const initialState = { 
  likes:10
}

const likesReducer = (state= initialState, action) =>{
  // console.log("LikeReducer->", action)
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1
      }
    case DICREMENT:
      return {
        ...state,
        likes: state.likes - 1
      }
    default:
      return state;
  }
}

export default likesReducer;