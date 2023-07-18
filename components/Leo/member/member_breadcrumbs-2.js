import React from 'react'
import c from './member_breadcrumbs.module.css'

export default function MemberBreadcrumbs_2() {
  return (
    <div className={c.crumbs_box}>
      <div className={`${c.crumbs_none} ${c.unselected}`}>
        <p>第一頁</p>
      </div>
      <div className={`${c.crumbs_border} ${c.selected}`}>
        <p>第二頁</p>
      </div>
    </div>
  )
}
