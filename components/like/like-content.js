import Avatar2 from '../book-review/blogavatar2'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/components/blog/blog_content.module.css'
import shadowverse from '@/public/blogimg/shadowverse.jpg'

export default function LikeContent() {
    return (
        <>
            <div className="pt-4 pb-4">
                <Link href="#" className="text-black text-decoration-none"><h4>吐槽日常語言裡的歸納法思想</h4></Link>
            </div>
            <div className='d-flex'>
                <Avatar2/>
            </div>
            <div className="pt-3">
                <div><Image src={shadowverse} className={`${style.blogimg}`}/></div>
            </div>
            <div className="pt-3">
                <Link href="#" className="text-black text-decoration-none"><p>疫情好轉，各國開關，有些馬特市民外出遊走，也有的在自己的市內散步，不論你在哪裡，都有美麗的風景、交雜的心情，以及想要分享的事物。最近 Matty 發現很多市民不約而同的分享了他／她們散步的故事</p></Link>
            </div>
            <div className='pb-3 d-flex align-items-center justify-content-between border-bottom'>
                <div className={ `d-flex ${style.chendate}`}>
                    <span>2023 年 6 月 9 號</span>
                </div>
                <div>
                    <span style={{cursor:"pointer"}} className={`${style.chendate} fs-5`}>取消最愛</span>
                </div>
            </div>
        </>
    )
}