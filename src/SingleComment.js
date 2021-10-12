import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {updateComment, deleteComment} from './Redux/actions'
function SingleComments({data}) {

  const [commentText, setCommentText] = useState('')
  const { text, id } = data; 

  const dispatch = useDispatch()

  const handleUpdate = (e) => {
    e.preventDefault();
      dispatch(updateComment(commentText, id))
  }
  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deleteComment(id))
  }


  useEffect(() => {
    if(text) {
      setCommentText(text)
    }
  },[text]);

  const handleInput = (e) => {
    setCommentText(e.target.value)
  }

  return(
      <form onSubmit={handleUpdate} className="comments-item">
        <div onClick={handleDelete} className="comments-item-delete">&times;</div>
          <input type="text" placeholder={id} value={commentText} onChange={handleInput}/>
          <input type="submit" hidden />
      </form>
  )
}

export default SingleComments