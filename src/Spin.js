import Loading from 'react-loader-spinner'
import { useSelector } from 'react-redux'


const Spin = () => {

  const loading = useSelector(state => state.loadingReducer.loading)
  return (
    <div className="loader-styles">
      <Loading
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        visible={loading}
      />
    </div>
  )
}

export default Spin