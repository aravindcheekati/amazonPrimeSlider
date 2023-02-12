import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = ({moviesList}) => {
  const comedyMovies = moviesList.filter(
    movieItem => movieItem.categoryId === 'COMEDY',
  )

  const actionMovies = moviesList.filter(
    movieItem => movieItem.categoryId === 'ACTION',
  )

  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="banner-img"
      />
      <div className="wrapper">
        <h1>Action Movies</h1>
        <MoviesSlider movies={actionMovies} />
        <h1>Comedy Movies</h1>
        <MoviesSlider movies={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
