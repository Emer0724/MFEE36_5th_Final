import React, { useEffect, useReducer, useRef, useCallback } from 'react'
import { useState } from 'react'
import MemberNav from '@/components/common/member-nav/member-nav'
import Member_info from '@/components/Leo/member/member_info'
// import MemberBreadcrumbs from '@/components/Leo/member/member_breadcrumbs'
import MemberBreadcrumbs_2 from '@/components/Leo/member/member_breadcrumbs-2'
import Link from 'next/link'
import { useRouter } from 'next/router'
import UsedUpCheck from '@/components/used/used-upcheck'
import Popup_window from '@/components/used/popup_window'
import { useReactToPrint } from 'react-to-print'
import Head from 'next/head'
import Image from 'next/image'
import no_book from '@/assets/used-svg/no_book.svg'
import useDebounce from '@/hooks/useDebounce'

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
  const printref = useRef()
  const router = useRouter()
  const [book, setbooks] = useState('')
  const [member, setMember] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [search_error, setSearch_error] = useState('')
  const [postData, setPostData] = useState(false)
  const [checkCancel, setCheckCancel] = useState(false)
  const [cancel_result, setCancel_result] = useState(false)
  const [showQRcode, setshowQRcode] = useState(false)
  const [img, setimg] = useState(true)
  const [backtoprofile, setbacktoprofile] = useState(false)
  const [bookinput, setbookinput] = useState([])

  // const history = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      router.push('/member/login')
    } else {
      getmember()
    }
  }, [])

  //個人資料
  const getmember = async () => {
    //如果非會員轉首頁

    const authToken = JSON.parse(localStorage.getItem('auth')).token
    const getmember1 = await fetch(
      `${process.env.API_SERVER}/used/display/member/`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
    const getmember2 = await getmember1.json()
    if (getmember2.error) {
      router.push('/member/login')
    }

    setMember(getmember2[0])
    // console.log(getmember2[0])
    if (
      !getmember2[0].mobile ||
      !getmember2[0].city ||
      !getmember2[0].full_address
    ) {
      setbacktoprofile(true)
    }
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
      `${process.env.API_SERVER}/used/display/book_info?ISBN=${inputValue}`
    )

    const getbook_detal2 = await getbook_detal1.json()

    setbooks(getbook_detal2[0])
    // console.log(getbook_detal2.length)
    if (getbook_detal2.length === 0) {
      setSearch_error('查無此本書')
    }
  }
  //input搜尋
  const f1 = useCallback(() => {
    getbookinput(inputValue)
    // console.log('Debounce2 發 request ----------------')
  }, [inputValue])

  useDebounce(f1, 500)

  const getbookinput = async (inputValue) => {
    // console.log(inputValue)
    if (inputValue) {
      const getbook_detal1 = await fetch(
        `${process.env.API_SERVER}/used/display/book_info1?ISBN=${inputValue}`
      )

      const getbook_detal2 = await getbook_detal1.json()

      setbookinput(getbook_detal2)
    } else {
      setbookinput([])
    }
  }

  // console.log(getbook_detal2.length)
  // if (getbook_detal2.length === 0) {
  //   setSearch_error('查無此本書')
  // }

  //新增二手書資料
  const post_up = async () => {
    const data = {
      ISBN: inputValue,
      member_id: JSON.parse(localStorage.getItem('auth')).member_id,
    }
    const post_up1 = await fetch(
      `${process.env.API_SERVER}/used/display/up-post`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const post_up2 = await post_up1.json()
    // console.log(post_up2[1][0])
    setPostData(post_up2[1][0])
  }

  //取消上架資訊框
  const closeItem = (e) => {
    const usedUpCheckElement = document.querySelector('.used_display_chkbox')
    if (!usedUpCheckElement.contains(e.target)) {
      setPostData('')
      setbooks('')
      setInputValue('')
    }
  }

  //取消上架botton

  const cancel_btn = () => {
    setCheckCancel(true)
  }
  //2度彈跳視窗取消
  const cancel_thing = () => {
    setCheckCancel(false)
  }
  //2度彈跳視窗 確認後跳成功畫面
  const cancel_data = async () => {
    setCheckCancel(false)
    setPostData(false)
    console.log(postData.used_id)
    const cancel_data1 = await fetch(
      `${process.env.API_SERVER}/used/display/delete_item/${postData.used_id}`,
      {
        method: 'PATCH',
      }
    )
    const cancel_data2 = await cancel_data1.json()
    // console.log(cancel_data2.changedRows)
    if (cancel_data2.changedRows === 1) {
      setCancel_result(true)
      setTimeout(() => {
        setCancel_result(false) // 在指定的等待时间后，更新 message 状态
        setbooks('')
        setInputValue('')
      }, 2000)
    }
  }

  const handleAfterPrint = () => {
    setPostData(false) // Update the state when onAfterPrint is triggered
    setbooks('')
    setInputValue('')
  }

  //確認列印

  const print_item = useReactToPrint({
    content: () => printref.current,
    documentTitle: '上架資訊',
    onAfterPrint: handleAfterPrint,
  })

  return (
    <>
      <Head>
        <title>Book書易</title>
      </Head>
      <Member_info />
      <MemberNav />
      <MemberBreadcrumbs_2 />
      {backtoprofile ? (
        <div
          className="w-100 d-flex justify-content-center pt-5  "
          style={{ height: '320px' }}
        >
          <div className="textp-24px used_pisplay_backtoprofile_text">
            會員資料尚未完全，請前往
            <Link
              href="/dashboard/profile"
              className="color-tx-8 used_pisplay_backtoprofile_text "
            >
              修改基本資料
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="container-fliuid mt-5  ">
            <div className="row">
              <div className="col-12  col-lg-6 d-flex align-items-center ">
                <div className="d-flex flex-column align-items-center w-100   ">
                  {book ? (
                    <>
                      <div className="used-pisplay-list justify-content-center">
                        <div className="my-3 d-flex used-display-search justify-content-center ">
                          <div>
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
                                // getbookinput(e.target.value)
                              }}
                              size={12}
                            />
                          </div>

                          <button
                            className="btn color-bg-4 border-radius-5px py-0  textp-20px  used-search-text "
                            // onClick={getbook}
                            onClick={getbook}
                          >
                            搜尋
                          </button>
                        </div>
                        <div className="text-danger letter-spacing text-center">
                          {search_error}
                        </div>
                        {bookinput.length > 1 &&
                        book.ISBN !== bookinput.ISBN ? (
                          <div className="w-100 used-display-ltem-position d-flex justify-content-center ">
                            <ul className="list-group ">
                              {bookinput.map((v, i) => {
                                return (
                                  <li
                                    className="list-group-item used-display-ltem"
                                    key={v.ISBN}
                                    style={{ width: '400px' }}
                                    role="presentation"
                                    onClick={() => setInputValue(v.ISBN)}
                                  >
                                    {v.book_name}
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>

                      <Image
                        src={
                          img
                            ? `/all_img/book_pic/${encodeURIComponent(
                                book.pic
                              )}`
                            : no_book
                        }
                        width={190}
                        height={190}
                        alt="book"
                        onError={() => {
                          setimg(false)
                        }}
                      />

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
                      <div className="used-pisplay-list justify-content-center">
                        <div className="my-3 d-flex used-display-search justify-content-center ">
                          <div>
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
                                // getbookinput(e.target.value)
                              }}
                              size={12}
                            />
                          </div>

                          <button
                            className="btn color-bg-4 border-radius-5px py-0  textp-20px  used-search-text "
                            // onClick={getbook}
                            onClick={getbook}
                          >
                            搜尋
                          </button>
                        </div>
                        <div className="text-danger letter-spacing text-center">
                          {search_error}
                        </div>
                        {bookinput.length >= 1 &&
                        bookinput.some((v) => v.ISBN !== inputValue) ? (
                          <div className="w-100 used-display-ltem-position d-flex justify-content-center ">
                            <ul className="list-group ">
                              {bookinput.map((v, i) => {
                                return (
                                  <li
                                    className="list-group-item used-display-ltem"
                                    key={v.ISBN}
                                    style={{ width: '400px' }}
                                    role="presentation"
                                    onClick={() => {
                                      setInputValue(v.ISBN)
                                    }}
                                  >
                                    {v.book_name}
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        ) : (
                          ''
                        )}
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
                      <div className="textp-24px fw-bold letter-spacing mb-5 mt-3 used-search-text-14 color-tx-2  ">
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
                        退回地址:{' '}
                        {member.city + member.district + member.address}
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
                  <button
                    className="btn color-bg-2 color-tx-7 fw-bold border-radius-5px  letter-spacing"
                    onClick={post_up}
                  >
                    我要上架
                  </button>
                </>
              ) : (
                <div style={{ height: '100px' }}></div>
              )}

              <div className="used_rwd_botton"></div>
            </div>
          </div>
          {postData ? (
            <div
              className="used_display_UsedUpCheck"
              role="button"
              tabIndex={0}
              onClick={
                closeItem
                // 在這裡處理點擊事件
              }
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  closeItem

                  // 在這裡處理回車鍵或空白鍵事件，模擬點擊效果
                }
              }}
              // 此處可以添加其他滑鼠或觸控事件處理程序
            >
              <UsedUpCheck
                postData={postData}
                cancel_btn={cancel_btn}
                print_btn={print_item}
                printref={printref}
                showQRcode={showQRcode}
              />
            </div>
          ) : (
            ''
          )}
          {checkCancel ? (
            <Popup_window
              text={'確定要取消嗎?'}
              botton_text_left={'確定'}
              botton_text_right={'取消'}
              botton_right={cancel_thing}
              botton_left={cancel_data}
            />
          ) : (
            ''
          )}
          {cancel_result ? (
            <Popup_window text={'已成功取消'} no_botton={true} icon={true} />
          ) : (
            ''
          )}
        </>
      )}
    </>
  )
}
