import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import css from '@/components/Leo/carousel.module.css'

export default function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const handleActiveIndexChange = (index) => {
    // console.log(index)
    setActiveSlideIndex(index.realIndex)
  }
  return (
    <>
      <div
        className="d-flex justify-content-center  align-items-center "
        style={{
          backgroundColor: '#ffffff',
          height: '400px',
        }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          onActiveIndexChange={handleActiveIndexChange}
        >
          <SwiperSlide>
            <div
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '15px',
                backgroundImage: `url('/Leo-image/carousel-1.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className={activeSlideIndex === 0 ? css.active : css.no_active}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '15px',
                backgroundImage: `url('/Leo-image/carousel-2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className={activeSlideIndex === 1 ? css.active : css.no_active}
            >
              1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '15px',
                backgroundImage: `url('/Leo-image/carousel-3.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className={activeSlideIndex === 2 ? css.active : css.no_active}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '15px',
                backgroundImage: `url('/Leo-image/carousel-4.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className={activeSlideIndex === 3 ? css.active : css.no_active}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '15px',
                backgroundImage: `url('/Leo-image/carousel-5.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className={activeSlideIndex === 4 ? css.active : css.no_active}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '15px',
                backgroundImage: `url('/Leo-image/carousel-6.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className={activeSlideIndex === 5 ? css.active : css.no_active}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              style={{
                width: '100%',
                height: '300px',
                borderRadius: '15px',
                backgroundImage: `url('/Leo-image/carousel-7.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className={activeSlideIndex === 6 ? css.active : css.no_active}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
