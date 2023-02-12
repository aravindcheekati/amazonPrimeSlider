import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = ({movies}) => {
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <ul className="movies-ul">
      <div className="slider-container">
        <Slider {...settings}>
          {movies.map(movie => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </Slider>
      </div>
    </ul>
  )
}

export default MoviesSlider
