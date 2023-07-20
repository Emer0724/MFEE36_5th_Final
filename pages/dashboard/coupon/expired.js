import React from 'react'
import Member_info from '@/components/Leo/member/member_info'
import MemberNav from '@/components/common/member-nav/member-nav'
import MemberBreadcrumbs_3 from '@/components/Leo/member/member_breadcrumbs-3'
import Coupon_display from '@/components/Leo/member/Coupon_display'

export default function expired() {
  const d1 = { paddingLeft: '150px' }
  const d2 = {
    marginTop: '0px',
  }
  const d3 = {
    position: 'relative',
  }
  const d4 = {
    marginTop: '40px',
    marginBottom: '30px',
  }
  return (
    <>
      <div style={d1}>
        <Member_info />
      </div>
      <div style={d2}>
        <MemberNav />
      </div>
      <div style={d3}>
        <MemberBreadcrumbs_3 />
      </div>
      <div style={d4}>
        <Coupon_display />
      </div>
    </>
  )
}
