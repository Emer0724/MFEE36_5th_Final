import Avatar2 from './blogavatar2'
import style from '@/components/book-review/book-home.module.css'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Image from 'next/image'
import imgbook1 from '@/public/blogimg/book1.jpg'
import Button2 from '../common/button/button2'


export default function BookHome() {
    return (
        <div className={`${style.bookborder} ps-5 pe-5`}>
            <div className='pb-2 pt-4'>
                <div className='d-flex'>
                    <div>
                        <Image src={imgbook1} className={`${style.chenbooksize}`}/>
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
                        <div className='ps-3 pt-4'>
                            <Button2/>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-between'>
                        <span className={`${style.chendate} pt-3 pb-3`}>2023.2.21</span>
                        <div className='d-flex justify-content-center fs-3'>
                            <AiOutlineShoppingCart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}