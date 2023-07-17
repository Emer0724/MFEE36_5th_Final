// import Market_aside from '@/components/Leo/market_aside'
// import MarketCard from '@/components/Leo/market_card'
// import MemberBreadcrumbs from '@/components/Leo/member/member_breadcrumbs'
// import Member_info from '@/components/Leo/member/member_info'
// import Playground from '@/components/Leo/market_playground'
import React from 'react'
// import Nocoupon from '@/components/Leo/member/Nocoupon'
import CouponForm from '@/components/Leo/member/CouponForm'
import Notify_wrong from '@/components/Leo/member/notify_wrong'
import Notify_correct from '@/components/Leo/member/notify_correct'

export default function test() {
  return (
    <div>
      <Notify_correct />
      <Notify_wrong />
      <CouponForm />
      {/* <Nocoupon />
      <Member_info />
      <MemberBreadcrumbs />
      <Market_aside />
      <MarketCard />
      <Playground /> */}
    </div>
  )
}
