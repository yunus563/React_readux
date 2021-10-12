import {useState,useEffect} from 'react'
import SingleComment from './SingleComment'
import {useDispatch, useSelector} from 'react-redux'
import uniqid from 'uniqid'
import {createInput,commentsApi} from './Redux/actions'

function Comments() {

  const [textComment, setTextComment] = useState('')

  const comments = useSelector(state => {
    const {commentsReducer} = state
     return commentsReducer.comments
  })

  const dispatch = useDispatch()

  const handleChange = e => {
    setTextComment(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const id = uniqid()
    if(!textComment){
      return false
    }
    else{
      dispatch(createInput(textComment, id))
      setTextComment('')
    }
  }

  useEffect(() => {
    dispatch(commentsApi())
  }, [])



  return(
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comment-item-create">
        <input type="text" value={textComment} onChange={handleChange}/>
        <input type="submit" hidden />
      </form>
      {!!comments.length && comments.map(res => {
        return <SingleComment key={res.id} data={res} />
      })}
    </div>
  )
}

export default Comments