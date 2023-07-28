import Avatar2 from '../book-review/blogavatar2'
import style from '@/components/book-review/book-review-element.module.css'
import { AiFillStar } from 'react-icons/ai'
import Image from 'next/image'
import imgbook1 from '@/public/blog-img/book1.jpg'
import Button15 from '../common/button/button15'
import Button14 from '../common/button/button14'

export default function BookPersonalContent() {
    return (
        <>
            <div className='border-bottom pb-2 pt-4'>
                <div className='d-flex'>
                    <div>
                        <Image src={imgbook1} className={`${style.chenbooksize}`}/>
                        <div className={`${style.chends}`}>
                            <span className={`${style.chendate} d-flex justify-content-center pt-3 pb-3`}>2023.2.21</span>
                        </div>
                        <div className={`d-flex justify-content-center pt-3 pb-3`}>
                            <Button14/>
                        </div>           
                    </div>
                    <div>
                        <div className='d-flex ps-3 pt-2'>
                            <Avatar2/>                                     
                        </div>
                        <div className='d-flex ps-3 pt-3 fw-bold'>
                            <span>名言佳句</span>            
                        </div>
                        <div className='d-flex ps-3 pt-3'>
                            <div className={`pe-2 ${style.chenstar}`}><AiFillStar/></div>
                            <div className={`pe-2 ${style.chenstar}`}><AiFillStar/></div>
                            <div className={`pe-2 ${style.chenstar}`}><AiFillStar/></div>
                            <div className={`pe-2 ${style.chenstar}`}><AiFillStar/></div>
                            <div className={`pe-2 ${style.chenstar}`}><AiFillStar/></div>
                        </div>
                        <div className='ps-3 pt-3'>
                            <span>這本書是一個關於人際關係和溝通技巧的指南，通過各種實例和故事，教導讀者如何與他人建立良好的關係、解決衝突並提升領導力。</span>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-between'>
                        <div className={`${style.chensd}`}>
                            <span className={`${style.chendate} d-flex justify-content-center pt-3 pb-3`}>2023.2.21</span>
                        </div>
                        <div className={`d-flex justify-content-center`}>
                            <Button15/>
                        </div>
                    </div>                       
                </div>
            </div>
    </>
  )
}
