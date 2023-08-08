import Link from 'next/link'
import Image from 'next/image'
import stlye from '@/components/book-review/blogavatar2.module.css'
import people from '@/assets/used-svg/people.svg'

export default function Avatar2({ nickname, mem_avatar }) {
  return (
    <>
      <div>
        <Link href="" className="pe-3">
          <Image
            src={
              mem_avatar
                ? `${process.env.API_SERVER}/avatar/${mem_avatar}`
                : people
            }
            width={60}
            height={60}
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
