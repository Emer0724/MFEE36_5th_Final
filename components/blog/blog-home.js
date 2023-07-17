import Avatar2 from '../book-review/blogavatar2'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/components/blog/blog-home.module.css'
import shadowverse from '@/public/blogimg/shadowverse.jpg'

export default function BlogHome() {
    return (
        <div className={`${style.blogborder} ps-5 pe-5`}>
            <div className={`pt-4 pb-4`}>
                <Link href="#" className="text-black text-decoration-none"><h4>吐槽日常語言裡的歸納法思想</h4></Link>
            </div>
            <div className='d-flex'>
                <Avatar2/>
            </div>
            <div className="pt-3">
                <div><Image src={shadowverse} className={`${style.blogimg}`}/></div>
            </div>
            <div className="pt-3">
                <Link href="#" className={`${style.chenover} text-black text-decoration-none`}><p>疫情好轉，各國開關，有些馬特市民外出遊走，也有的在自己的市內散步，不論你在哪裡，都有美麗的風景、交雜的心情，以及想要分享的事物。最近 Matty 發現很多市民不約而同的分享了他／她們散步的故事</p></Link>
            </div>
            <div className='pb-3 pt-3'>
                <div className={`${style.chendate}`}><span>2023 年 6 月 9 號</span></div>
            </div>
        </div>
    )
}