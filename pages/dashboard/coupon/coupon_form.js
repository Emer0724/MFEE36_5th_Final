import React from 'react'
import Member_info from '@/components/Leo/member/member_info'
import MemberNav from '@/components/common/member-nav/member-nav'
import MemberBreadcrumbs_3 from '@/components/Leo/member/member_breadcrumbs-3'
import f from './coupon_form.module.css'
export default function coupon_form() {
  return (
    <>
      <div>
        <Member_info />
      </div>
      <div className={f.d2}>
        <MemberNav />
      </div>
      <div className={f.d3}>
        <MemberBreadcrumbs_3 />
      </div>
      <div className={f.d4}>
        <div className={f.formContainer}>
          <form action="post" className={f.c_form}>
            <div className={f.centered}>
              <h2 className={f.c_h2}>請輸入6-12位優惠券密碼</h2>
            </div>
            <label htmlFor="couponInput" className={f.c_label}>
              優惠券號碼
            </label>
            <div className={f.inputWrapper}>
              <div className={f.inputGroup}>
                <input type="text" id="couponInput" className={f.c_input} />
                <button className={f.c_btn}>取得優惠券</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
