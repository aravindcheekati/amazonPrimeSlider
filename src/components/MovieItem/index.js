import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = ({movie}) => {
  const {thumbnailUrl, videoUrl} = movie
  return (
    <li>
      <Popup
        modal
        trigger={
          <button type="button" className="movie-btn">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <div className="close-btn-container">
              <button
                type="button"
                onClick={close}
                className="close-btn"
                data-testid="closeButton"
              >
                <IoMdClose className="icon" />
              </button>
            </div>
            <div className="modal">
              <ReactPlayer url={videoUrl} width="100%" height="480px" />
            </div>
          </>
        )}
      </Popup>
    </li>
  )
}

export default MovieItem
