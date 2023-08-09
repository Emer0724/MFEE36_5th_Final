import React, { useEffect, useState } from 'react'
import Member_info from '@/components/Leo/member/member_info'
import MemberNav from '@/components/common/member-nav/member-nav'
import MemberBreadcrumbs_3 from '@/components/Leo/member/member_breadcrumbs-3'
import f from './coupon_form.module.css'

export default function Coupon_form() {
  const [info, setInfo] = useState({})
  const [datas, setDatas] = useState({})
  useEffect(() => {
    const user_info = JSON.parse(localStorage.getItem('auth'))
    console.log(user_info)
    setInfo(user_info)
  }, [])
  //onclick事件
  const getCoupon = (e) => {
    event.preventDefault(e)
    const code = document.getElementById('couponInput').value
    const { member_id } = info

    console.log('鳥貴族')
    console.log(member_id)

    fetch(`${process.env.API_SERVER}/market/getCoupon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: code, member_id: member_id }),
    })
      .then((res) => res.json())
      .then((datas) => {
        console.log('後端回傳結果:', datas)
        setDatas(datas)
      })
  }
  const { success, error } = datas
  return (
    <>
      <div>
        <Member_info />
      </div>
      <div className={f.d2}>
        <MemberNav />
      </div>
      <div className={f.success}>取得優惠券！</div>
      {success !== undefined && (
        <div>
          {success ? (
            <div className={f.success}>取得優惠券！</div>
          ) : (
            <div className={f.fail}>
              取得優惠券失敗，請確認輸入的優惠券號碼。
            </div>
          )}
        </div>
      )}
      {error && (
        <div className={f.fail}>取得優惠券失敗，請確認輸入的優惠券號碼。</div>
      )}
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
                <button className={f.c_btn} onClick={getCoupon}>
                  取得優惠券
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
