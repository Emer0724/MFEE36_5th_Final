import Avatar2 from './blogavatar2'
import style from '@/components/book-review/book-home.module.css'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Image from 'next/image'
import Button2 from '../common/button/button2'

export default function BookHome({book_review_sid,
  nickname,
  add_date,
  score,
  pic,
  book_review,
  mem_avatar}
) {
  
  
 
  return (
    <div
      className={`${style.bookborder} ps-3 pe-3`}
      style={{ width: '100%', backgroundColor: '#FFF' }}
    >
      <div className="pb-2 pt-4 ">
        <div className={`d-flex ${style.card_gap}`}>
          <div className="d-flex justify-content-center align-items-center">
            <Image src={`/all_img/book_pic/${encodeURIComponent(pic) }`} 
            className={`${style.chenbooksize}`}
            width={150}
            height={150} />
          </div>
          <div>
            <div className="d-flex ms-3 pt-2">
              <Avatar2 />
              <span className={`${style.chendate} pt-2 pb-2 ms-3`}>
                {add_date}
              </span>
            </div>
            <div className="d-flex ms-3 ">
              <div className={` ${style.chenstar}`}>
                <AiFillStar />
              </div>
              <div className={`  ${parseInt(score)>=2 ? style.chenstar : style.chenstar_no}`}>
                <AiFillStar />
              </div>
              <div className={` ${parseInt(score)>=3 ? style.chenstar : style.chenstar_no}`}>
                <AiFillStar />
              </div>
              <div className={` ${parseInt(score)>=4 ? style.chenstar : style.chenstar_no}`}>
                <AiFillStar />
              </div>
              <div className={` ${parseInt(score)===5 ? style.chenstar : style.chenstar_no}`}>
                <AiFillStar />
              </div>
            </div>
            <div className="ms-3 pt-2">
              <div className={`textp-16px line-hight text-hidden pe-5 ${style.book_limit}`}>
               {book_review}
              </div>
            </div>
            <div  className='d-flex justify-content-center'>
            <div className="ms-3 pt-4 d-flex justify-content-start gap-5  pb-3">
              <Button2 />
              <AiOutlineShoppingCart />
            </div>
            </div>
          </div>
          {/* <div className="d-flex flex-column justify-content-between">
            <span className={`${style.chendate} pt-2 pb-2`}>2023.2.21</span>
            <div className="d-flex justify-content-center fs-3">
              <AiOutlineShoppingCart />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
