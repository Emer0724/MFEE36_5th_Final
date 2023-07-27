import React, { useEffect, useState } from 'react'
import Member_info from '@/components/Leo/member/member_info'
import MemberNav from '@/components/common/member-nav/member-nav'
import Card from '@/components/Leo/member/wishlist_card'
import ca from '@/components/Leo/market_playground.module.css'

export default function WishList() {
  const [wishlistItems, setWishlistItems] = useState([])
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
      <div style={d3}></div>

      <div style={d4}>
        <div className={`container ${ca.box}`}>
          <div className={`row ${ca.c_row} d-flex`}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className={`row ${ca.c_row} d-flex`}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className={`row ${ca.c_row} d-flex`}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className={`row ${ca.c_row} d-flex`}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}
