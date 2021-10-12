import './App.css';

import {useSelector} from 'react-redux'
import Likes from './Likes'
import Title from './Title'
import Comments from './Comments'
import Spin from './Spin'


function App() {
  const error = useSelector(state => state.loadingReducer.error)
  return (
    <div className="App">
      <div className="wrap">
      <Spin/>
      {error && (<div className="error-message">{error}</div>)}
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title/>
            <Likes/>
          </div>
          <Comments/>
        </div>
      </div>
    </div>
  );
}




export default App;
