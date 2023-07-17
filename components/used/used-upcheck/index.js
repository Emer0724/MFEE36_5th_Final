import React from 'react'
import css from '@/components/used/used-upcheck/used-upcheck.module.css'

export default function UsedUpCheck() {
  return (
    <div className={`w-50 px-5 py-5 ${css.border_card} `}>
      <div
        className={`textp-32px letter-spacing fw-bold ${css.text_line} text-center `}
      >
        上架資訊
      </div>
      <div
        className={`textp-20px mt-3 pb-1 letter-spacing ${css.text_line_sm}`}
      >
        上架流水號:
      </div>
      <div
        className={`textp-20px mt-3 pb-1 letter-spacing ${css.text_line_sm}`}
      >
        ISBN:
      </div>
      <div
        className={`textp-20px mt-3 pb-1 letter-spacing ${css.text_line_sm}`}
      >
        書名:
      </div>
      <div
        className={`textp-20px mt-3 pb-1 letter-spacing ${css.text_line_sm}`}
      >
        會員名稱:
      </div>
      <div
        className={`textp-20px mt-3 pb-1 letter-spacing ${css.text_line_sm}`}
      >
        Email:
      </div>
      <div
        className={`textp-20px mt-3 pb-1 letter-spacing ${css.text_line_sm}`}
      >
        地址:
      </div>
      <div className={`textp-20px mt-3 pb-1 letter-spacing`}>
        **請列印上表資訊並與該二手書一同寄回 106台北市大安區復興南路一段390號2樓
      </div>
      <div className='d-flex justify-content-around mt-5  '>
      <button className='textp-20px btn btn-secondary  border-radius-5px  '>確認並列印</button>
      <button className='textp-20px btn btn-secondary  border-radius-5px '>我要取消</button>
      </div>
    </div>
  )
}
