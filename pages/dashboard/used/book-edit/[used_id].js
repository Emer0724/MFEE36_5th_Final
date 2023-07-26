import React, { useEffect, useState } from 'react'
import MemberNav from '@/components/common/member-nav/member-nav'
import UsedInfoExchange from '@/components/used/usedid/used-info-exchange'
import Link from 'next/link'
import MemberBreadcrumbs_2 from '@/components/Leo/member/member_breadcrumbs-2'
import Member_info from '@/components/Leo/member/member_info'
import { useRouter } from 'next/router'
import Popup_window from '@/components/used/popup_window'

const book_info = {
  used_id: 18,
  ISBN: 9789861371955,
  book_name: '被討厭的勇氣：自我啟發之父「阿德勒」的教導',
  status: '',
  state: '2',
  price: '456',
  img: 'getImage.webp',
  updated: '20230708',
  node: '',
}

//暫定 1.待兌換 2.代收書 3.退回 4.已兌換
// const newdata = { ...book_info }
// if (newdata.state === '1') {
//   newdata.state = '待兌換'
// } else if (newdata.state === '2') {
//   newdata.state = '待收書'
// } else if (newdata.state === '3') {
//   newdata.state = '退回'
// } else if (newdata.state === '4') {
//   newdata.state = '已兌換'
// }
// console.log(newdata)
export default function Usedid() {
  const router = useRouter()
  const [bookInfo, setbookInfo] = useState({})
  const [postData, setPostData] = useState(false)
  const [checkCancel, setCheckCancel] = useState(false)
  const [cancel_result, setCancel_result] = useState(false)
  const [postData_exchange, setPostData_exchange] = useState(false)
  const [checkCancel_exchange, setCheckCancel_exchange] = useState(false)
  const [cancel_result_exchange, setCancel_result_exchange] = useState(false)
  const [exchange_confirm, setexchange_confirm] = useState(false)
  const [excehange_success, setexcehange_success] = useState(false)
  // console.log((router.query.used_id).toString())

  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      router.push('/member/login')
    } else {
      if (router.query.used_id) {
        getBookInfo()
      }
    }
  }, [router.query])

  const getBookInfo = async () => {
    const authToken = JSON.parse(localStorage.getItem('auth')).token
    const getbookInfo1 = await fetch(
      `${
        process.env.API_SERVER
      }/used/book_edit/${router.query.used_id.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
    const getbookInfo2 = await getbookInfo1.json()
    // console.log(getbookInfo2)
    if (getbookInfo2.error) {
      router.push('/dashboard/used/changebook-message')
    }
    const newdata = { ...getbookInfo2 }
    if (newdata.used_state === '1') {
      newdata.used_state = '待兌換'
    } else if (newdata.used_state === '2') {
      newdata.used_state = '待收書'
    } else if (newdata.used_state === '3') {
      newdata.used_state = '退回'
    } else if (newdata.used_state === '4') {
      newdata.used_state = '已兌換'
    } else if (newdata.used_state === '5') {
      newdata.used_state = '取消兌換'
    }
    if (newdata.return_book === '1') {
      newdata.return_book = '處理中'
    } else if (newdata.return_book === '2') {
      newdata.return_book = '運送中'
    } else if (newdata.return_book === '3') {
      newdata.return_book = '已退回'
    }

    setbookInfo(newdata)
    // console.log(newdata)
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
      `${process.env.API_SERVER}/used/display/delete_item/${router.query.used_id}`,
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
        router.push('/dashboard/used/changebook-message')
      }, 2000)
    }
  }
  const cancel_btn_noexchange = () => {
    setCheckCancel_exchange(true)
  }
  //2度彈跳視窗取消
  const cancel_thing_noexchange = () => {
    setCheckCancel_exchange(false)
  }
  //2度彈跳視窗 確認後跳成功畫面
  const cancel_data_noexchange = async () => {
    setCheckCancel_exchange(false)
    setPostData_exchange(false)
    const cancel_data1 = await fetch(
      `${process.env.API_SERVER}/used/display/give_up_exchange/${router.query.used_id}`,
      {
        method: 'PATCH',
      }
    )
    const cancel_data2 = await cancel_data1.json()
    // console.log(cancel_data2.changedRows)
    if (cancel_data2.changedRows === 1) {
      setCancel_result_exchange(true)
      setTimeout(() => {
        setCancel_result_exchange(false) // 在指定的等待时间后，更新 message 状态
        router.push('/dashboard/used/changebook-message')
      }, 2000)
    }
  }
  const exchange = () => {
    setexchange_confirm(true)
  }
  const cancel_exchange = () => {
    setexchange_confirm(false)
  }
  const goExchange = async () => {
    const authToken = JSON.parse(localStorage.getItem('auth')).token
    const goExchange1 = await fetch(
      `${process.env.API_SERVER}/used/used_book/exchange/${router.query.used_id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
    const goExchange2 = await goExchange1.json()
    if (goExchange2[0].changedRows === 1 && goExchange2[1].changedRows === 1) {
      setexcehange_success(true)
      setTimeout(() => {
        setexcehange_success(false) // 在指定的等待时间后，更新 message 状态
        router.push('/dashboard/used/changebook-message')
      }, 2000)
    }
  }

  return (
    <>
      <Member_info />
      <MemberNav />
      <MemberBreadcrumbs_2 />

      <div className="container-fliuid ">
        <div className="row">
          <div className="col-12   col-md-6   d-flex flex-column  align-items-center  ">
            <h3 className="textp-24px my-5 text-center used-search-text-20">
              {bookInfo.book_name}
            </h3>
            <div
              className="color-bg-6 my-5 "
              style={{
                width: 200,
                height: 200,
                background: `url('/all_img/book_pic/${bookInfo.pic}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className="col-12  col-md-6  border-start border-black d-flex  flex-column  align-items-center justify-content-center used-usededit-member-1  ">
            <div className="d-flex flex-column used-usededit-member-2    ">
              <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                ISBN:{bookInfo.ISBN}
              </div>
              {bookInfo.status_name ? (
                <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                  書況評級:{bookInfo.status_name}
                </div>
              ) : (
                ''
              )}
              <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                狀態:{bookInfo.used_state}
              </div>
              {bookInfo.price ? (
                <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                  可換代幣:{bookInfo.price}
                </div>
              ) : (
                ''
              )}
              {bookInfo.book_note ? (
                <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                  書況備註:{bookInfo.book_note}
                </div>
              ) : (
                ''
              )}
              {bookInfo.return_book ? (
                <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                  退回狀態:{bookInfo.return_book}
                </div>
              ) : (
                ''
              )}
              <div className="textp-20px letter-spacing mt-3 used-search-text-16">
                異動時間:{bookInfo.updated}
              </div>
            </div>
            {!bookInfo.status_name ? (
              <div className="d-flex  w-100  justify-content-center my-5 ">
                <button
                  className="btn color-bg-10 color-tx-1 fw-bold border-radius-5px  letter-spacing me-5"
                  onClick={cancel_btn}
                >
                  我要取消
                </button>
              </div>
            ) : bookInfo.used_state === '取消兌換' ||
              bookInfo.used_state === '退回' ? (
              ''
            ) : (
              <>
                <div className="d-flex  w-100  justify-content-center my-5 ">
                  <button
                    className="btn color-bg-10 color-tx-1 fw-bold border-radius-5px  letter-spacing me-5"
                    onClick={exchange}
                  >
                    確定兌換
                  </button>
                  <button
                    className="btn color-bg-10 color-tx-1 fw-bold border-radius-5px  letter-spacing"
                    onClick={cancel_btn_noexchange}
                  >
                    放棄兌換
                  </button>
                </div>
                <div>如對書況評級有問題，請聯絡客服</div>
              </>
            )}
            <div className="d-flex  justify-content-center w-100 ">
              <Link
                href="/dashboard/used/changebook-message"
                className="mt-3 color-tx-8 me-5 "
              >
                回二手書列表
              </Link>
            </div>
          </div>
        </div>

        <div className="used_rwd_botton" style={{ height: '100px' }}></div>
      </div>

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
      {checkCancel_exchange ? (
        <Popup_window
          text={'確定要放棄兌換嗎?'}
          botton_text_left={'確定'}
          botton_text_right={'取消'}
          botton_right={cancel_thing_noexchange}
          botton_left={cancel_data_noexchange}
        />
      ) : (
        ''
      )}
      {cancel_result_exchange ? (
        <Popup_window text={'已成功取消'} no_botton={true} icon={true} />
      ) : (
        ''
      )}
      {exchange_confirm ? (
        <Popup_window
          text={`確定要兌換 ${bookInfo.price} 知音幣 ?`}
          botton_text_left={'確定'}
          botton_text_right={'取消'}
          botton_right={cancel_exchange}
          botton_left={goExchange}
        />
      ) : (
        ''
      )}
      {excehange_success ? (
        <Popup_window text={'成功兌換'} no_botton={true} icon={true} />
      ) : (
        ''
      )}
    </>
  )
}
