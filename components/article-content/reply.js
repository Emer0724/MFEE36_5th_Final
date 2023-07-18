import Avatar3 from "../book-review/blogavatar3"
import style from '@/components/article-content/reply.module.css'
import {BiLike} from 'react-icons/bi'

export default function Reply() {
    return (
        <>
        <div className="border-bottom border-dark-subtle pt-3 pb-2">
            <div>
                <Avatar3/>
                <div className={`${style.chenp} pt-5 pb-3`}><p>那句話真的好經典</p></div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <div className="pt-3">
                    <span className={`${style.chensize}`}>2023 年 4 月 22 日</span>
                </div>
                <div className="pt-2">
                <BiLike className="fs-3" style={{cursor:"pointer"}}/>
                </div>
            </div>
         </div>
        </>
    )
}