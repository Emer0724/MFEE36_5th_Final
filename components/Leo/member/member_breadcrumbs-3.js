import React from 'react'
import c from './member_breadcrumbs.module.css'

export default function MemberBreadcrumbs_3() {
  return (
    <div className={c.crumbs_box}>
      <div className={`${c.crumbs_none} ${c.unselected}`}>
        <p>可使用</p>
      </div>
      <div className={`${c.crumbs_border} ${c.selected}`}>
        <p>已過期</p>
      </div>
      <div className={`${c.crumbs_border} ${c.unselected}`}>
        <p>優惠碼</p>
      </div>
      {/* <img src="images/企鵝.jpg" alt="penguin" /> */}
    </div>
  )
}
