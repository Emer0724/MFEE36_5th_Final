import Link from 'next/link'
import Image from 'next/image'
import stlye from '@/components/book-review/blogavatar2.module.css'
// import img1 from '@/public/blogimg/images.jpg'
// import read_book from '@/assets/used-svg/read_book.svg'
import people from '@/assets/used-svg/people.svg'

export default function Avatar2({ nickname, mem_avatar }) {
  return (
    <>
      <div>
        <Link href="" className="pe-3">
          <Image
            src={mem_avatar ? mem_avatar : people}
            className={`${stlye.headblogimg} text-decoration-none`}
            alt="member_avatar"
          />
        </Link>
        <Link
          href=""
          className={`align-items-center fw-bold ${stlye.editbutton} text-black text-decoration-none`}
        >
          {nickname}
        </Link>
      </div>
    </>
  )
}
