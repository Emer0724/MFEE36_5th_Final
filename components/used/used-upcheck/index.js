import React from 'react'
import css from '@/components/used/used-upcheck/used-upcheck.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function UsedUpCheck({ postData, cancel_btn, print_btn,printref }) {
  return (
    <div className={`w-50 px-5 py-5 ${css.border_card} used_display_chkbox `}>
      {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <AiOutlineCloseCircle style={{ width: '30px', height: '30px' }} />
      </div> */}
      <div ref={printref} className={css.used_print}>
      <div
        className={`textp-32px letter-spacing fw-bold ${css.text_line} text-center    `}
      >
        二手書資訊
      </div>
      <div
        className={`textp-20px mt-3 pb-1 letter-spacing ${css.text_line_sm}  `}
      >
        二手書流水號: {postData.used_id}
      </div>
      <div
        className={`textp-20px mt-3 pb-1 letter-spacing ${css.text_line_sm}  `}
      >
        ISBN: {postData.ISBN}
      </div>
      <div
        className={`textp-20px mt-3 pb-1 letter-spacing ${css.text_line_sm}  `}
      >
        書名: {postData.book_name}
      </div>
      <div
        className={`textp-20px mt-3 pb-1 letter-spacing ${css.text_line_sm}  `}
      >
        會員名稱: {postData.name}
      </div>
      <div
        className={`textp-20px mt-3 pb-1 letter-spacing ${css.text_line_sm}  `}
      >
        Email: {postData.email}
      </div>
      <div
        className={`textp-20px mt-3 pb-1 letter-spacing ${css.text_line_sm}  `}
      >
        地址: {postData.city + postData.district + postData.address}
      </div>
      <div className={`textp-20px mt-3 pb-1 letter-spacing  `}>
        **請列印上表資訊並與該二手書一同寄回 106台北市大安區復興南路一段390號2樓
      </div>
      </div>

     
      <div className="d-flex justify-content-around mt-5  ">
        <button
          className="textp-20px btn btn-secondary  border-radius-5px  "
          onClick={print_btn}
        >
          確認並列印
        </button>
        <button
          className="textp-20px btn btn-secondary  border-radius-5px "
          onClick={cancel_btn}
        >
          我要取消
        </button>
      </div>
    </div>
  )
}
