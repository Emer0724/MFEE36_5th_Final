import React, { useEffect } from 'react'
import { useState } from 'react'
import MemberNav from '@/components/common/member-nav/member-nav'
import Member_info from '@/components/Leo/member/member_info'
// import MemberBreadcrumbs from '@/components/Leo/member/member_breadcrumbs'
import MemberBreadcrumbs_2 from '@/components/Leo/member/member_breadcrumbs-2'
import Link from 'next/link'
import { useNavigate } from 'react-router-dom'

// const books = {
//   ISBN: 9789861371955,
//   book_name: '被討厭的勇氣：自我啟發之父「阿德勒」的教導',
//   author: ' 岸見一郎, 古賀史健',
//   publish: '究竟',
//   img: 'getImage.webp',
// }
// const members = {
//   name: '李曉明',
//   moble: '0912345678',
//   email: 'abc@gmail.com',
//   adress: '新北市文青區斂財路5段12樓',
// }

export default function Display() {
  const [book, setbooks] = useState('')
  const [member, setMember] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [search_error, setSearch_error] = useState('')
  // const history = useNavigate()

  useEffect(() => {
    getmember()
  }, [])

  //個人資料
  const getmember = async () => {
    //如果非會員轉首頁

    const authMember = JSON.parse(localStorage.getItem('auth')).member_id
    const getmember1 = await fetch(
      'http://localhost:3055/used/display/member/' + authMember
    )
    const getmember2 = await getmember1.json()

    setMember(getmember2[0])
    // console.log([...getmember2])
  }

  //找書
  const getbook = () => {
    // console.log(inputValue)
    if (!inputValue) {
      setSearch_error('ISBN不可為空')
    } else {
      const rule = new RegExp(/^\d{13}$/)
      if (rule.test(inputValue)) {
        setSearch_error('')
        getbook_detal()
      } else {
        return setSearch_error('ISBN為13位數字')
      }
    }
  }

  //fetch 書的資料
  const getbook_detal = async () => {
    setSearch_error('')
    const getbook_detal1 = await fetch(
      `http://localhost:3055/used/display/book_info?ISBN=${inputValue}`
    )
    const getbook_detal2 = await getbook_detal1.json()

    setbooks(getbook_detal2[0])
    console.log(getbook_detal2.length)
    if (getbook_detal2.length === 0) {
      setSearch_error('查無此本書')
    }
  }

  return (
    <>
      {/* <Member_info /> */}
      <MemberNav />
      <MemberBreadcrumbs_2 />

      <div className="container-fliuid mt-5  ">
        <div className="row">
          <div className="col-12  col-lg-6 d-flex align-items-center ">
            <div className="d-flex flex-column align-items-center w-100   ">
              {book ? (
                <>
                  <div className="my-3 d-flex ">
                    <span className="color-tx-1 fw-bold textp-20px  letter-spacing  used-search-text">
                      ISBN :
                    </span>
                    <input
                      type="text"
                      className="border-0  color-bg-6 ps-3 mx-3 textp-20px border-radius-5px used-search-text"
                      placeholder="請輸入ISBN"
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value)
                      }}
                      size={12}
                    />
                    <button
                      className="btn color-bg-4 border-radius-5px py-0  textp-20px  used-search-text "
                      // onClick={getbook}
                      onClick={getbook}
                    >
                      搜尋
                    </button>
                  </div>
                  <div className="text-danger letter-spacing">
                    {search_error}
                  </div>

                  <div
                    className="color-bg-6 my-4 "
                    style={{
                      width: 190,
                      height: 190,
                      background: `url('/used-img/${book.pic}')`,
                      backgroundSize: 'contain',
                    }}
                  ></div>

                  <div className="d-flex flex-column align-items-center ">
                    <h6 className="textp-20px mt-3 fw-bold letter-spacing text-center used-search-text-14">
                      {book.book_name}
                    </h6>
                    <h6 className="textp-20px mt-3 fw-bold letter-spacing text-center used-search-text-14">
                      作者: {book.author}
                    </h6>
                    <h6 className="textp-20px mt-3 fw-bold letter-spacing text-center used-search-text-14">
                      出版社: {book.publish}
                    </h6>
                  </div>
                </>
              ) : (
                <>
                  <div className="my-3 d-flex ">
                    <span className="color-tx-1 fw-bold textp-20px  letter-spacing used-search-text-14 ">
                      ISBN :
                    </span>
                    <input
                      type="text"
                      className="border-0  color-bg-6 ps-3 mx-3 textp-20px border-radius-5px used-search-text"
                      placeholder="請輸入ISBN"
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value)
                      }}
                      size={12}
                    />
                    <button
                      className="btn color-bg-4 border-radius-5px py-0  textp-20px  used-search-text-14"
                      onClick={getbook}
                    >
                      搜尋
                    </button>
                  </div>
                  <div className="text-danger letter-spacing ">
                    {search_error}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6 border-start border-black used-display-member ">
            <div className="d-flex justify-content-center   ">
              <div>
                {/* //member-info */}
                <div className="d-flex flex-column w-100   ">
                  <div className="textp-20px fw-bold letter-spacing mb-5 mt-3 used-search-text-14  ">
                    基本資料
                  </div>
                  <div className="textp-20px fw-bold letter-spacing mt-5 used-search-text-14 ">
                    姓名: {member.name}
                  </div>
                  <div className="textp-20px fw-bold letter-spacing mt-3 used-search-text-14 ">
                    連絡電話: {member.mobile}
                  </div>
                  <div className="textp-20px fw-bold letter-spacing mt-3 used-search-text-14 ">
                    Email: {member.email}
                  </div>
                  <div className="textp-20px fw-bold letter-spacing mt-3 used-search-text-14 ">
                    退回地址: {member.city + member.district + member.address}
                  </div>
                  <div className="textp-16px  letter-spacing mt-3 color-tx-6 used-search-text-14 ">
                    基本資料有問題嗎? 前往{' '}
                    <Link href="/dashboard/profile" className="color-tx-8 ">
                      修改基本資料
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center my-4 ">
        <div className="d-flex flex-column  align-items-center">
          {book ? (
            <>
              <div className="fw-bold letter-spacing my-4">
                請確認上述資料是否正確
              </div>
              <button className="btn color-bg-2 color-tx-7 fw-bold border-radius-5px  letter-spacing">
                我要上架
              </button>
            </>
          ) : (
            ''
          )}

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
