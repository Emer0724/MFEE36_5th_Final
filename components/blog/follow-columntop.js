 import Button2 from '../common/button/button2'
 import style from '@/components/blog/follow-column.module.css'
 import Link from "next/link"
 
 export default function FollowColumnTop() {
    return (
        <>
            <div className={`${style.chenpa} d-flex justify-content-between`}>
                <h5 className="fw-bold d-flex align-items-center">值得關注</h5>
                <div className="d-flex">
                      <Button2/>   
                </div>
            </div>
            <div className={`${style.chenmt} pt-2`}>
                <div className="pb-3">
                    <Link href="http://localhost:3000/blog/tag/love" className={`${style.chenwd} text-black text-decoration-none`}><span>#愛情</span></Link>
                </div>
                <div className="pb-3">
                    <Link href="http://localhost:3000/blog/tag/travel" className={`${style.chenwd} text-black text-decoration-none`}><span>#旅遊</span></Link>
                </div>
                <div className="pb-3">
                    <Link href="http://localhost:3000/blog/tag/life" className={`${style.chenwd} text-black text-decoration-none`}><span>#生活</span></Link>
                </div>
                <div className="pb-3">
                    <Link href="http://localhost:3000/blog/tag/work" className={`${style.chenwd} text-black text-decoration-none`}><span>#工作</span></Link>
                </div>
                <div className="pb-3">
                    <Link href="http://localhost:3000/blog/tag/educate" className={`${style.chenwd} text-black text-decoration-none`}><span>#教育</span></Link>
                </div>
            </div>
        </>
    )
 }