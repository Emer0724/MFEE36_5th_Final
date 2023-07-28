import Link from "next/link"
import Image from "next/image"
import stlye from '@/components/book-review/blogavatar3.module.css'
import img1 from '@/public/blog-img/images.jpg'


export default function Avatar3() {
    return (
        <>
            <div>
                <Link href="#" className="pe-2"><Image src={img1} class={`${stlye.chenheadimg} text-decoration-none`}/></Link>
                <Link href="#" className={`align-items-center fw-bold ${stlye.editbutton2} text-black text-decoration-none`}>馬卡巴卡</Link>
            </div>
        </>
    )
}

