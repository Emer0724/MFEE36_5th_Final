import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function Carousel() {
  return (
    <>
      <style jsx>{`
        .swiper-slide-prev {
          transition-duration: 0ms;
          transform: translate3d(-100px, 0px, -100px) rotateX(0deg)
            rotateY(0deg) scale(1) !important;
          z-index: 0;
        }
        .swiper-slide-next {
          transition-duration: 0ms;
          transform: translate3d(100px, 0px, -100px) rotateX(0deg) rotateY(0deg)
            scale(1) !important;
          z-index: 0;
        }
        .swiper-slide {
          display: none;
        }
      `}</style>
      <div style={{ width: '100%', height: '500px' }}>
        <Swiper
          style={{
            '--swiper-navigation-color': '#666666',
            '--swiper-pagination-color': '#666666',
          }}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={170}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              style={{ width: '100%', height: '500px' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              style={{ width: '100%', height: '500px' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              style={{ width: '100%', height: '500px' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              style={{ width: '100%', height: '500px' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              style={{ width: '100%', height: '500px' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              style={{ width: '100%', height: '500px' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              style={{ width: '100%', height: '500px' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              style={{ width: '100%', height: '500px' }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-9.jpg"
              style={{ width: '100%', height: '500px' }}
            />
          </SwiperSlide>
        </Swiper>

        {/* <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper> */}
      </div>
      <div className="d-flex justify-content-center ">
        <div
          id="carouselExampleRide"
          className="carousel slide  w-50"
          style={{ width: '500px', height: '500px' }}
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                className="d-block w-100"
                alt="..."
                style={{ width: '500px', height: '500px' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://swiperjs.com/demos/images/nature-7.jpg"
                className="d-block w-100"
                alt="..."
                style={{ width: '500px', height: '500px' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://swiperjs.com/demos/images/nature-9.jpg"
                className="d-block w-100"
                alt="..."
                style={{ width: '500px', height: '500px' }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div
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
        >
          <SwiperSlide>
            <div
              style={{
                width: '100%',
                height: '300px',
                background: '#FFF',
                borderRadius: '15px',
              }}
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
                background: '#FFF',
                borderRadius: '15px',
              }}
            >
              2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              style={{
                width: '100%',
                height: '300px',
                background: '#FFF',
                borderRadius: '15px',
              }}
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
                background: '#FFF',
                borderRadius: '15px',
              }}
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
                background: '#FFF',
                borderRadius: '15px',
              }}
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
                background: '#FFF',
                borderRadius: '15px',
              }}
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
                background: '#FFF',
                borderRadius: '15px',
              }}
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
                background: '#FFF',
                borderRadius: '15px',
              }}
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
                background: '#FFF',
                borderRadius: '15px',
              }}
            >
              9
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
