import { connect } from 'react-redux';
import { IncrementLikes, DecrementLikes } from './Redux/actions'

function Likes (props){
  // console.log("rednder->", props)
  return (
    <div className="button-controls">
      <button onClick={props.onIcrementClick}>❤ {props.likes}</button>
      <button onClick={props.onDicrementClick}>Dislike</button>
    </div>
  )
}

function MapStateToProps(state){
  // console.log("MapStateToProps->", state)

  const {likesReducer} = state
  return {
    likes: likesReducer.likes
  }
}

function MapDispatchToProps (dispatch) {
  return {
    onIcrementClick: () => dispatch(IncrementLikes()),
    onDicrementClick: () => dispatch(DecrementLikes())
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Likes)