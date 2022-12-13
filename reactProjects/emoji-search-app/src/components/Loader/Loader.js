import {useState} from 'react'
import { Styled } from './Loader.styled'
import PropagateLoader from 'react-spinners/PropagateLoader'


const Loader = () => {
  let [loading, setLoading] = useState(true);
  return (
    <Styled>  
      <div className="sweet-loading">

        <PropagateLoader
          color={"#E49ADE"}
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>


    </Styled>
  )
}

export default Loader