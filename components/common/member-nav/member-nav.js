import React, { useState } from 'react'
import NavButton from './nav-button'
const navInfos = [
  { id: 1, info: '個人資訊', url: '/dashboard/profile', router1: 'profile' },
  { id: 2, info: '優惠券', url: '/dashboard/coupon', router1: 'coupon' },
  { id: 3, info: '訂單', url: '/dashboard/order', router1: 'order' },
  { id: 4, info: '二手書', url: '/dashboard/used/display', router1: 'used' },
  { id: 5, info: '收藏', url: '/dashboard/wishlist', router1: 'wishlist' },
]

export default function MemberNav() {
  const [navInfo, setNavInfo] = useState(navInfos)
  return (
    <>
      <div>
        <ul className="d-flex border-bottom border-black px-0 mb-3 text-center">
          {navInfo.map((v, i) => (
            <NavButton
              key={v.id}
              info={v.info}
              id={v.id}
              url={v.url}
              router1={v.router1}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
