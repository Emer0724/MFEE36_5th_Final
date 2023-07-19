import React from 'react'
import MemberNav from '@/components/common/member-nav/member-nav'
import Member_info from '@/components/Leo/member/member_info'
import Orderlist from '@/components/Cart_component/orderhistory/orderlist'

export default function OrderHistory() {
  return (
    <>
        <Member_info />
        <MemberNav />
        <Orderlist />
    </>
  )
}
