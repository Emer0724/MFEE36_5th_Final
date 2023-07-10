import Market_aside from '@/components/Leo/market_aside'
import Market_aside_button from '@/components/Leo/market_aside_button'
import MarketCard from '@/components/Leo/market_card'
import MemberBreadcrumbs from '@/components/Leo/member_breadcrumbs'
import Member_info from '@/components/Leo/member_info'
import React from 'react'

export default function test() {
  return (
    <div>
      <Member_info />
      <MemberBreadcrumbs />
      <Market_aside_button />
      <Market_aside />
      <MarketCard />
    </div>
  )
}
