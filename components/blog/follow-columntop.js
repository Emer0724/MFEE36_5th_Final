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
                    <Link href="#" className={`${style.chenwd} text-black text-decoration-none`}><span>#生活</span></Link>
                </div>
                <div className="pb-3">
                    <Link href="#" className={`${style.chenwd} text-black text-decoration-none`}><span>#休閒</span></Link>
                </div>
                <div className="pb-3">
                    <Link href="#" className={`${style.chenwd} text-black text-decoration-none`}><span>#娛樂</span></Link>
                </div>
                <div className="pb-3">
                    <Link href="#" className={`${style.chenwd} text-black text-decoration-none`}><span>#健身</span></Link>
                </div>
                <div className="pb-3">
                    <Link href="#" className={`${style.chenwd} text-black text-decoration-none`}><span>#工作</span></Link>
                </div>
            </div>
        </>
    )
 }