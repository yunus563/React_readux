
import {CREATE_COMMENT, COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_DATA} from './types'

const initialState = {
  comments: []
}

const commentReducer = (state=initialState, action) => {
  console.log("commentReducer", action)
  
  switch(action.type){
    case CREATE_COMMENT:
      return{
        ...state, 
        comments: [...state.comments, action.data]
      }
    case COMMENTS_DATA:
      const newText = action.data.map(res => {
        return {
          text: res.name,
          id: res.id
        }
      })
      return {
        ...state,
        comments: newText
      }

    case COMMENT_UPDATE:
      const {data} = action
      const {comments} = state
      const commentIndex = comments.findIndex(res => res.id === data.id)

      const nextComments = [
        ...comments.slice(0, commentIndex),
        data,
        ...comments.slice(commentIndex + 1)
      ]
      return{
        ...state,
        comments: nextComments,
      }

      case COMMENT_DELETE:
        return (() => {
          const {id} = action
          const {comments} = state
          const commentIndex = comments.findIndex(res => res.id === id)

          const nextComments = [
            ...comments.slice(0, commentIndex),
            ...comments.slice(commentIndex + 1)
          ]
          return{
            ...state,
            comments: nextComments,
          }
        })()
      

    default:
      return state
  }
}

export default commentReducer