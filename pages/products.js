import React from 'react'
import 'bootstrap/dist/css/bootstrap.leo.css'
import Image from 'next/image'
import pic1 from '@/public/Leo-image/bookstore.jpg'
import pic2 from '@/public/Leo-image/天安門.webp'
import pic3 from '@/public/Leo-image/武俠.jpg'
import carou from '@/styles/leo-style/product.module.css'
import Playground from '@/components/Leo/market_playground'
import Aside from '@/components/Leo/market_aside'
import Wish from '@/components/Leo/market_wish'

export default function product() {
  const p_container = {
    display: 'flex',
    justifyContent: 'center',
  }
  return (
    <>
      <div style={p_container}>
        <div>
          <div style={{ width: '1920px', margin: '0px' }}>
            <div
              style={{ width: '1920px' }}
              id="carouselExampleCaptions"
              className={`carousel slide1  d-flex justify-content-center align-items-center ${carou.box} ${carou.top}`}
            >
              {/*按鈕區*/}
              <div className="carousel-indicators w-100">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
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
              {/*卡片區*/}
              <div className="carousel-inner w-100">
                <div className={`carousel-inner `}>
                  <div className={`carousel-item active shadow`}>
                    <div className={`carousel-caption d-none d-md-block`}>
                      <h5 className={carou.title}>今天，我想來點...</h5>
                      <p className={carou.para}>古典文學</p>
                    </div>
                    <Image
                      src={pic1}
                      className={`d-block w-100 rounded-4`}
                      alt="..."
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className={`carousel-item shadow`}>
                    <div className={`carousel-caption d-none d-md-block`}>
                      <h5 className={carou.title}>今天，我想來點...</h5>
                      <p className={carou.para}>毛主席</p>
                    </div>
                    <Image
                      src={pic2}
                      className={`d-block w-100 rounded-4`}
                      alt="..."
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className={`carousel-item shadow`}>
                    <div className={`carousel-caption d-none d-md-block`}>
                      <h5 className={carou.title}>武俠小說季</h5>
                      <p className={carou.para}>
                        除了金庸，其他的武俠小說都是....垃圾
                      </p>
                    </div>
                    <Image
                      src={pic3}
                      className={`d-block w-100 rounded-4 `}
                      alt="..."
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
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
                data-bs-target="#carouselExampleCaptions"
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
          <Wish />
          <div style={{ display: 'flex', marginTop: '0px', width: '1920px' }}>
            <Aside />
            <Playground />
          </div>
        </div>
      </div>
    </>
  )
}
