import React, { useEffect } from 'react'
import Member_info from '@/components/Leo/member/member_info'
import MemberNav from '@/components/common/member-nav/member-nav'
import MemberBreadcrumbs_3 from '@/components/Leo/member/member_breadcrumbs-3'
import Coupon_display from '@/components/Leo/member/Coupon_display0'
import c from './coupon.module.css'

export default function CouponPage() {
  return (
    <>
      <div>
        <Member_info />
      </div>
      <div className={c.d2}>
        <MemberNav />
      </div>
      <div className={c.d3}>
        <MemberBreadcrumbs_3 />
      </div>
      <div className={c.d4}>
        <Coupon_display />
      </div>
    </>
  )
}
