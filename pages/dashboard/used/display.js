import React from 'react'
import { useState } from 'react'
import MemberNav from '@/components/common/member-nav/member-nav'
import Member_info from '@/components/Leo/member/member_info'
import MemberBreadcrumbs from '@/components/Leo/member/member_breadcrumbs'

// const books = {
//   ISBN: 9789861371955,
//   book_name: '被討厭的勇氣：自我啟發之父「阿德勒」的教導',
//   author: ' 岸見一郎, 古賀史健',
//   publish: '究竟',
//   img: 'getImage.webp',
// }
const members = {
  name: '李曉明',
  moble: '0912345678',
  email: 'abc@gmail.com',
  adress: '新北市文青區斂財路5段12樓',
}

export default function Display() {
  const [book, setbooks] = useState(false)
  const [member, setMember] = useState(members)
  const [inputValue, setInputValue] = useState('')

  const getbook = () => {
    // if(!inputValue){
    // }
  }

  //找書

  return (
    <>
      <Member_info />
      <MemberNav />
      <MemberBreadcrumbs />

      <div className="container-fliuid mt-3  ">
        <div className="row">
          <div className="col-12  col-lg-6 d-flex align-items-center ">
            <div className="d-flex flex-column align-items-center w-100   ">
              {book ? (
                <>
                  <div className="my-3 d-flex ">
                    <span className="color-tx-1 fw-bold textp-20px  letter-spacing ">
                      ISBN :
                    </span>
                    <input
                      type="text"
                      className="border-0  color-bg-6 ps-3 mx-3 textp-20px border-radius-5px"
                      placeholder="請輸入ISBN"
                      value={inputValue}
                      size={12}
                    />
                    <button
                      className="btn color-bg-4 border-radius-5px py-0  textp-20px "
                      onClick={() => getbook()}
                    >
                      搜尋
                    </button>
                  </div>

                  <div
                    className="color-bg-6 my-4 "
                    style={{
                      width: 190,
                      height: 190,
                      background: `url('/used-img/${book.img}')`,
                      backgroundSize: 'contain',
                    }}
                  ></div>

                  <div className="d-flex flex-column align-items-center ">
                    <h6 className="textp-20px mt-3 fw-bold letter-spacing text-center">
                      {book.book_name}
                    </h6>
                    <h6 className="textp-20px mt-3 fw-bold letter-spacing text-center">
                      作者: {book.author}
                    </h6>
                    <h6 className="textp-20px mt-3 fw-bold letter-spacing text-center">
                      出版社: {book.publish}
                    </h6>
                  </div>
                </>
              ) : (
                <div className="my-3 d-flex ">
                  <span className="color-tx-1 fw-bold textp-20px  letter-spacing ">
                    ISBN :
                  </span>
                  <input
                    type="text"
                    className="border-0  color-bg-6 ps-3 mx-3 textp-20px border-radius-5px"
                    placeholder="請輸入ISBN"
                    size={12}
                  />
                  <button className="btn color-bg-4 border-radius-5px py-0  textp-20px ">
                    搜尋
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6 border-start border-black used-display-member ">
            <div className="d-flex justify-content-center   ">
              <div>
                {/* //member-info */}
                <div className="d-flex flex-column w-100   ">
                  <div className="textp-20px fw-bold letter-spacing mb-5 mt-3  ">
                    基本資料
                  </div>
                  <div className="textp-20px fw-bold letter-spacing mt-5 ">
                    姓名:{member.name}
                  </div>
                  <div className="textp-20px fw-bold letter-spacing mt-3 ">
                    連絡電話:{member.moble}
                  </div>
                  <div className="textp-20px fw-bold letter-spacing mt-3 ">
                    Email:{member.email}
                  </div>
                  <div className="textp-20px fw-bold letter-spacing mt-3 ">
                    退回地址:{member.adress}
                  </div>
                  <div className="textp-16px  letter-spacing mt-3 color-tx-6 ">
                    基本資料有問題嗎? 前往{' '}
                    <a href="#" className="color-tx-8 ">
                      修改基本資料
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center my-4 ">
        <div className="d-flex flex-column  align-items-center">
          <div className="fw-bold letter-spacing my-4">
            請確認上述資料是否正確
          </div>
          <button className="btn color-bg-2 color-tx-7 fw-bold border-radius-5px  letter-spacing">
            我要上架
          </button>
          <div className="used_rwd_botton"></div>
        </div>
      </div>
    </>
  )
}

// /* book-serch
// <div className="my-3 d-flex ">
//   <span className="color-tx-1 fw-bold textp-20px  letter-spacing ">
//     ISBN :
//   </span>
//   <input
//     type="text"
//     className="border-0  color-bg-6 ps-3 mx-3 textp-20px border-radius-5px"
//     placeholder="請輸入ISBN"
//     size={12}
//   />
//   <button className="btn color-bg-4 border-radius-5px py-0  textp-20px ">
//     搜尋
//   </button>
// </div>
// /* book-serch
// <div
//   className="color-bg-6 my-4 "
//   style={{
//     width: 190,
//     height: 190,
//     background: `url('/used-img/${book.img}')`,
//     backgroundSize: 'contain',
//   }}
// ></div>

// <div className="d-flex flex-column align-items-center ">
//   <h6 className="textp-20px mt-3 fw-bold letter-spacing text-center">
//     {book.book_name}
//   </h6>
//   <h6 className="textp-20px mt-3 fw-bold letter-spacing text-center">
//     作者: {book.author}
//   </h6>
//   <h6 className="textp-20px mt-3 fw-bold letter-spacing text-center">
//     出版社: {book.publish}
//   </h6>
// </div>
// /*---book-serch  end
