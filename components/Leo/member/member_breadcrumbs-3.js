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
      <div className={`${c.crumbs_border} ${c.unselected}`}>f
        <p>優惠碼</p>
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
