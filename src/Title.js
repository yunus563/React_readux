import { useDispatch, useSelector } from 'react-redux'
import {inputText} from './Redux/actions'

function Title (props) {
  // console.log("title props ->", props);

  const text = useSelector(state => {
    // console.log("state-text>>>>>>>>", state)
    const { inputReducer } = state
    return inputReducer.text
  })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(inputText(e.target.value))
  }

  return(
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" placeholder="comments" onChange={handleChange}/>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Title