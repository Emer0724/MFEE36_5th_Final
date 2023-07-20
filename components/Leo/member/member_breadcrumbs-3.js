import React from 'react'
import c from './member_breadcrumbs.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function MemberBreadcrumbs_3() {
  const router = useRouter()
  console.log(router.asPath)
  console.log(router.asPath === '/dashboard/used/display')

  return (
    <div className={`${c.crumbs_box} justify-content-start`}>
      <div className={`${c.crumbs_none} `}>
        <Link
          href="/dashboard/coupon"
          className={` ${c.under_line} ${
            router.asPath === '/dashboard/coupon' ? c.selected : c.unselected
          } `}
        >
          <p>可使用</p>
        </Link>
      </div>
      <div className={`${c.crumbs_border} `}>
        <Link
          href="/dashboard/coupon/expired"
          className={` ${c.under_line} ${
            router.asPath.includes('/dashboard/coupon/expired')
              ? c.selected
              : c.unselected
          } `}
        >
          <p>已過期</p>
        </Link>
      </div>
      <div className={`${c.crumbs_border} `}>
        <Link
          href="/dashboard/coupon/coupon_form"
          className={` ${c.under_line} ${
            router.asPath.includes('/dashboard/coupon/coupon_form')
              ? c.selected
              : c.unselected
          } `}
        >
          <p>優惠碼</p>
        </Link>
      </div>
    </div>
  )
}

/**

                                                     __----~~~~~~~~~~~------___
                                    .  .   ~~//====......          __--~ ~~
                    -.            \_|//     |||\\  ~~~~~~::::... /~
                 ___-==_       _-~o~  \/    |||  \\            _/~~-
         __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
     _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
   .~       .~       |   \\ -_    /  /-   /   ||      \   /
  /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
  |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
           '         ~-|      /|    |-~\~~       __--~~
                       |-~~-_/ |    |   ~\_   _-~            /\
                            /  \     \__   \/~                \__
                        _--~ _/ | .-~~____--~-/                  ~~==.
                       ((->/~   '.|||' -_|    ~~-/ ,              . _||
                                  -_     ~\      ~~---l__i__i__i--~~_/
                                  _-~-__   ~)  \--______________--~~
                                //.-~~~-~_--~- |-------~~~~~~~~
                                       //.-~~~--\
                                神獸保佑，程式碼沒Bug!
    
*/
