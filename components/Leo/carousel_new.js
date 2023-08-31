import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import styles from './carousel_new.module.css'
import pic1 from '@/public/used-img/banner1.jpg'
import pic2 from '@/public/used-img/banner2.jpg'
import pic3 from '@/public/used-img/banner3.jpg'
import pic4 from '@/public/used-img/banner4.jpg'
import pic5 from '@/public/used-img/banner5.jpg'
import pic6 from '@/public/used-img/banner6.jpg'

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

//swiper Effect coverflow
export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.slide}>
          <Image
            src={pic1}
            className={` rounded-4 ${styles.center}`}
            alt="..."
            width={'850px'}
            height={'400px'}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src={pic2}
            className={`rounded-4 ${styles.center}`}
            alt="..."
            width={'850px'}
            height={'400px'}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src={pic3}
            className={`rounded-4 ${styles.center}`}
            alt="..."
            width={'850px'}
            height={'400px'}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src={pic4}
            className={`rounded-4 ${styles.center}`}
            alt="..."
            width={'850px'}
            height={'400px'}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src={pic5}
            className={`rounded-4 ${styles.center}`}
            alt="..."
            width={'850px'}
            height={'400px'}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image
            src={pic6}
            className={` rounded-4 ${styles.center}`}
            alt="..."
            width={'850px'}
            height={'400px'}
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
