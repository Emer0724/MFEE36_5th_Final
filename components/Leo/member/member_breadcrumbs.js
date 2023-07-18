import React from 'react'
import c from './member_breadcrumbs.module.css'

export default function MemberBreadcrumbs() {
  return (
    <div className={c.crumbs_box}>
      <div className={`${c.crumbs_none} ${c.unselected}`}>
        <h3>可使用</h3>
      </div>
      <div className={`${c.crumbs_border} ${c.selected}`}>
        <h3>已過期</h3>
      </div>
      <div className={`${c.crumbs_border} ${c.unselected}`}>
        <h3>優惠碼</h3>
      </div>
      {/* <img src="images/企鵝.jpg" alt="penguin" /> */}
    </div>
  )
}
