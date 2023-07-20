import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import p1 from '@/public/Leo-image/carousel-1.jpg'
import p2 from '@/public/Leo-image/carousel-2.jpg'
import p3 from '@/public/Leo-image/carousel-3.jpg'

export default function CarouselComponent() {
  const pic = {
    diplay: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
  }
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <div style={pic}>
            <Image src={p1} alt="pic1" width={`100%`} height={400} />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div style={pic}>
            <Image src={p2} alt="pic2" width={`100%`} height={400} />
          </div>
          <Carousel.Caption>
            <p>城市閱讀夜</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={pic}>
            <Image src={p3} alt="pic3" width={`100%`} height={400} />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
