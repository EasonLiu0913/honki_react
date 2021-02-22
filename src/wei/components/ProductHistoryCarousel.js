import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaHeart, FaStar } from 'react-icons/fa'
import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { withRouter } from 'react-router-dom'

function ProductHistoryCarousel(props) {
  const { productHistory } = props
  // const { productHistory, getProductDetail } = props

  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <Slider {...settings}>
        {productHistory.map((v, i) => (
          <div
            className="wei-card position-relative wei-slick"
            key={i}
            onClick={() => {
              props.history.push('/products/' + v.sid)
            }}
          >
            <div
              className={
                `wei-card-icon ` +
                (v.tag ? 'd-block ' : 'd-none ') +
                (v.tag === 'SALE' ? 'theme-color' : '')
              }
            >
              {v.tag}
            </div>
            <div className="wei-card-pic position-relative">
              <div className="wei-book-pic">
                <img
                  className="w-100"
                  src={`http://localhost:3000/images/books/` + v.book_pics}
                  alt=""
                />
              </div>
              <div className="wei-heart-bg">
                <FaHeart className="wei-heart" />
              </div>
            </div>
            <div className="wei-book-text">
              <p className="wei-book-title">{v.title}</p>
              <p className="wei-book-author">{v.author}</p>
              <div className="d-flex justify-content-between">
                <span className="wei-stars wei-product-stars">
                  <FaStar
                    className={`mr-1 wei-star ` + (v.stars > 0 ? 'yellow' : '')}
                  />
                  <FaStar
                    className={`mr-1 wei-star ` + (v.stars > 1 ? 'yellow' : '')}
                  />
                  <FaStar
                    className={`mr-1 wei-star ` + (v.stars > 2 ? 'yellow' : '')}
                  />
                  <FaStar
                    className={`mr-1 wei-star ` + (v.stars > 3 ? 'yellow' : '')}
                  />
                  <FaStar
                    className={`mr-1 wei-star ` + (v.stars > 4 ? 'yellow' : '')}
                  />
                </span>
                <del>NT ${v.price}</del>
              </div>
              <div className="wei-book-price">NT$ {v.final_price}</div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default withRouter(ProductHistoryCarousel)
