import React from 'react'
import 'bootstrap/dist/css/bootstrap.leo.css'
import Image from 'next/image'
import pic1 from '@/public/Leo-image/carousel-1.jpg'
import pic2 from '@/public/Leo-image/carousel-2.jpg'
import pic3 from '@/public/Leo-image/carousel-3.jpg'
import carou from '@/styles/leo-style/product.module.css'

export default function product() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className={`carousel slide1 ${carou.box} d-flex justify-content-center align-items-center`}
      >
        <div className={`carousel-indicators`}>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className={`active`}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div
          className={`carousel-inner d-flex  bg-black justify-content-center align-items-center border`}
        >
          <div className={`carousel-item active`}>
            <Image
              src={pic1}
              className={`d-flex justify-content-center align-items-center`}
              alt="..."
              width={1344}
              height={400}
            />
            <div className={`carousel-caption d-none d-md-block`}>
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className={`carousel-item`}>
            <Image
              src={pic2}
              className={`d-flex justify-content-center align-items-center`}
              alt="..."
              width={1344}
              height={400}
            />
            <div className={`carousel-caption d-none d-md-block`}>
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className={`carousel-item`}>
            <Image
              src={pic3}
              className={`d-flex justify-content-center align-items-center`}
              alt="..."
              width={1344}
              height={400}
            />
            <div className={`carousel-caption d-none d-md-block`}>
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className={`carousel-control-prev`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className={`carousel-control-prev-icon`}
            aria-hidden="true"
          ></span>
          <span className={`visually-hidden`}>Previous</span>
        </button>
        <button
          className={`carousel-control-next`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className={`carousel-control-next-icon`}
            aria-hidden="true"
          ></span>
          <span className={`visually-hidden`}>Next</span>
        </button>
      </div>
      {/* <div
        id="carouselExampleCaptions"
        className={`carousel slide1 ${carou.box} d-flex justify-content-center align-items-center`}
      >
        <div className={`carousel-indicators`}>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className={`active`}
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div
          className={`carousel-inner d-flex  bg-black justify-content-center align-items-center border`}
        >
          <div className={`carousel-item active`}>
            <Image
              src={pic1}
              className={`d-flex justify-content-center align-items-center`}
              alt="..."
              width={1344}
              height={400}
            />
            <div className={`carousel-caption d-none d-md-block`}>
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className={`carousel-item`}>
            <Image
              src={pic2}
              className={`d-flex justify-content-center align-items-center`}
              alt="..."
              width={1344}
              height={400}
            />
            <div className={`carousel-caption d-none d-md-block`}>
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className={`carousel-item`}>
            <Image
              src={pic3}
              className={`d-flex justify-content-center align-items-center`}
              alt="..."
              width={1344}
              height={400}
            />
            <div className={`carousel-caption d-none d-md-block`}>
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className={`carousel-control-prev`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className={`carousel-control-prev-icon`}
            aria-hidden="true"
          ></span>
          <span className={`visually-hidden`}>Previous</span>
        </button>
        <button
          className={`carousel-control-next`}
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className={`carousel-control-next-icon`}
            aria-hidden="true"
          ></span>
          <span className={`visually-hidden`}>Next</span>
        </button>
      </div> */}
    </>
  )
}
