 import Button2 from '../common/button/button2'
 import Link from "next/link"
 
 export default function FollowColumnTop() {
    return (
        <>
            <div className="d-flex justify-content-between">
                <h5 className="fw-bold">值得關注</h5>
                <div className="d-flex">
                      <Button2/>   
                </div>
            </div>
            <div className="pt-2">
                <div className="pb-3">
                    <Link href="#" className={`text-black text-decoration-none`}><span>#生活</span></Link>
                </div>
                <div className="pb-3">
                    <Link href="#" className={`text-black text-decoration-none`}><span>#休閒</span></Link>
                </div>
                <div className="pb-3">
                    <Link href="#" className={`text-black text-decoration-none`}><span>#娛樂</span></Link>
                </div>
                <div className="pb-3">
                    <Link href="#" className={`text-black text-decoration-none`}><span>#健身</span></Link>
                </div>
                <div className="pb-3">
                    <Link href="#" className={`text-black text-decoration-none`}><span>#工作</span></Link>
                </div>
            </div>
        </>
    )
 }