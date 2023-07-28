import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import css from '@/pages/used-book/carousel.module.css'
import UsedPrint from '@/components/used/used_print'

export default function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const handleActiveIndexChange = (index) => {
    console.log(index.realIndex)
    // console.log(index)
    setActiveSlideIndex(index.realIndex)
  }
  return (
    <>
      {/* <div
        className="d-flex justify-content-center color-bg-6 align-items-center "
        style={{ height: '400px' }}
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
              }}
              className={activeSlideIndex === 0 ? css.active : css.no_active}
            >
              1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: '100%',
                height: '300px',

                borderRadius: '15px',
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
              }}
              className={activeSlideIndex === 2 ? css.active : css.no_active}
            >
              3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              style={{
                width: '100%',
                height: '300px',

                borderRadius: '15px',
              }}
              className={activeSlideIndex === 3 ? css.active : css.no_active}
            >
              4
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              style={{
                width: '100%',
                height: '300px',

                borderRadius: '15px',
              }}
              className={activeSlideIndex === 4 ? css.active : css.no_active}
            >
              5
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              style={{
                width: '100%',
                height: '300px',

                borderRadius: '15px',
              }}
              className={activeSlideIndex === 5 ? css.active : css.no_active}
            >
              6
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              style={{
                width: '100%',
                height: '300px',

                borderRadius: '15px',
              }}
              className={activeSlideIndex === 6 ? css.active : css.no_active}
            >
              7
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              style={{
                width: '100%',
                height: '300px',

                borderRadius: '15px',
              }}
              className={activeSlideIndex === 7 ? css.active : css.no_active}
            >
              8
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              style={{
                width: '100%',
                height: '300px',

                borderRadius: '15px',
              }}
              className={activeSlideIndex === 8 ? css.active : css.no_active}
            >
              9
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
      <UsedPrint />
    </>
  )
}
