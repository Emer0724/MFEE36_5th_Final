import React from 'react'
import Member_info from '@/components/Leo/member/member_info'
import MemberNav from '@/components/common/member-nav/member-nav'
import MemberBreadcrumbs_3 from '@/components/Leo/member/member_breadcrumbs-3'
import CouponForm from '@/components/Leo/member/CouponForm'

export default function coupon_from() {
  return (
    <>
      <Member_info />
      <MemberNav />
      <MemberBreadcrumbs_3 />
      <CouponForm />
    </>
  )
}
