import Button2 from "../common/button/button2"
import Link from "next/link"
import Image from "next/image"
import style from '@/components/blog/follow-columndown.module.css'
import img1 from '@/public/blogimg/1.jpg'
import img2 from '@/public/blogimg/2.jpg'
import img3 from '@/public/blogimg/3.jpg'
import img5 from '@/public/blogimg/5.jpg'
import images from '@/public/blogimg/images.jpg'


export default function FollowColumnDown() {
    return (
        <>
            <div className="d-flex justify-content-between pt-3 pb-3">
                <h5 className="fw-bold">找你想看的</h5>
                <div className="d-flex">
                    <Button2/>
                </div>
            </div>
            <div className="d-flex pb-3">
                <Link href="#" className={`pe-3 text-decoration-none`}>
                    <Image src={img1} className={`${style.chenheadblogimg}`}/>
                </Link>
                <div>
                    <div className="pb-2">
                        <Link href="#" className={`text-decoration-none d-flex align-items-center fw-bold ${style.editbutton} text-black`}>葛洛</Link>
                    </div>
                    <div>
                        <Link href="#" className={`text-decoration-none text-black`}>世界走走｜她的故事與妳同行</Link>
                    </div>
                </div>
            </div>
            <div className="d-flex pb-3">
                <Link href="#" className={`text-decoration-none pe-3`}>
                    <Image src={img2} className={`${style.chenheadblogimg}`}/>
                </Link>
                <div>
                    <div className="pb-2">
                        <Link href="#" className={`text-decoration-none d-flex align-items-center fw-bold ${style.editbutton} text-black`}>李楊</Link>
                    </div>
                    <div>
                        <Link href="#" className={`text-decoration-none text-black`}>甚麼都由好奇而起，甚麼都慢過人，只懂寫字</Link>
                    </div>
                </div>
            </div>
            <div className="d-flex pb-3">
                <Link href="#" className={`text-decoration-none pe-3`}>
                    <Image src={img3} className={`${style.chenheadblogimg}`}/>
                </Link>
                <div>
                    <div className="pb-2">
                        <Link href="#" className={`text-decoration-none d-flex align-items-center fw-bold ${style.editbutton} text-black`}>龍二</Link>
                    </div>
                    <div>
                        <Link href="#" className={`text-decoration-none text-black`}>| 天蠍男 | 媒體人 | 愛閱讀 | 寫生活 | 寫城市 |</Link>
                    </div>
                </div>
            </div>
            <div className="d-flex pb-3">
                <Link href="#" className={`text-decoration-none pe-3`}>
                    <Image src={img5} className={`${style.chenheadblogimg}`}/>
                </Link>
                <div>
                    <div className="pb-2">
                        <Link href="#" className={`text-decoration-none d-flex align-items-center fw-bold ${style.editbutton} text-black`}>阿飛</Link>
                    </div>
                    <div>
                        <Link href="#" className={`text-decoration-none text-black`}>work in progress</Link>
                    </div>
                </div>
            </div>
            <div className="d-flex pb-3">
                <Link href="#" className={`text-decoration-none pe-3`}>
                    <Image src={images} className={`${style.chenheadblogimg}`}/>
                </Link>
                <div>
                    <div className="pb-2">
                        <Link href="#" className={`d-flex align-items-center fw-bold ${style.editbutton} text-decoration-none text-black`}>小戴</Link>
                    </div>
                    <div>
                        <Link href="#" className={`${style.chena} text-decoration-none text-black`}>人在少年夢中不覺醒後要歸去</Link>
                    </div>
                </div>
            </div>
        </>
    )
}