import { ERROR_ON, ERROR_OFF, COMMENTS_LOADER_ON, COMMENTS_LOADER_0FF, INCREMENT, DICREMENT, INPUT_TEXT, CREATE_COMMENT, COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_DATA } from './types'

export function IncrementLikes() {
  return {
    type: INCREMENT
  }
}
export function DecrementLikes() {
  return {
    type: DICREMENT
  }
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text
  }
}

export function createInput(text, id) {
  return {
    type: CREATE_COMMENT,
    data: { text, id }
  }
}

export function updateComment(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id }
  }
}

export function deleteComment(id) {
  return {
    type: COMMENT_DELETE,
    id
  }
}

export function loadingOn () {
  return {
    type:COMMENTS_LOADER_ON
  }
}

export function loadingOff () {
  return {
    type: COMMENTS_LOADER_0FF
  }
}

export function errorOn (text) {
  return{
    type: ERROR_ON,
    text
  }
}

export function erroeOff () {
  return {
    type: ERROR_OFF
  }
}


export function commentsApi() {
  return async (dispatch) => {
    try {
      dispatch(loadingOn())
      const response = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
      const jsonData = await response.json()
  
      setTimeout(() => {
        dispatch({
          type: COMMENTS_DATA,
          data: jsonData
        })
        dispatch(loadingOff())
      }, 1000)
    } catch (error) {
      dispatch(errorOn("Ошибка Апи"))
    }
  }
}