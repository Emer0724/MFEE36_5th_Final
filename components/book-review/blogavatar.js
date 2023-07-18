import stlye from '@/components/book-review/blogavatar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from '@/public/blogimg/images.jpg'

export default function Avatar() {
    return (
        <>
            <div>
                <div className={`${stlye.chenpersonal} d-flex`}>
                    <div>
                        <Link href="#">
                            <Image src={img1} className={stlye.chenheadimg}/>
                        </Link>
                    </div>
                    <Link href="#" className={`text-decoration-none`}>
                            <div className="fw-bold mb-0 mt-1 fs-5 text-dark">阿巴</div>
                        </Link>
                    <div className={`${stlye.editbutton} mt-1 text-body-tertiary`}>
                        <Link href="#" className={`text-decoration-none text-body-tertiary`}>登出</Link>
                    </div>
                </div>
            </div>       
        </>
    )
}