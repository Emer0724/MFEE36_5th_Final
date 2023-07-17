import React from 'react'
import f from '@/components/Leo/member/CouponForm.module.css'
export default function CouponForm() {
  return (
    <>
      <form action="post" className={f.c_form}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <h2 className={f.c_h2}>請輸入6-12位優惠券密碼</h2>
        </div>
        <div>
          <div>
            <label htmlFor="couponInput" className={f.c_label}>
              優惠券號碼
            </label>
          </div>

          <input type="text" id="couponInput" />

          <button className={f.c_btn}>取得優惠券</button>
        </div>
      </form>
    </>
  )
}
