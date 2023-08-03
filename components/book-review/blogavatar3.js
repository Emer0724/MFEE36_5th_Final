import Link from 'next/link'
import Image from 'next/image'
import stlye from '@/components/book-review/blogavatar3.module.css'
import people from '@/assets/used-svg/people.svg'

export default function Avatar3({ nickname, mem_avatar }) {
  return (
    <>
      <div>
        <Link href="#" key={nickname} className="pe-2">
          <Image
            key={nickname}
            src={mem_avatar ? mem_avatar : people}
            className={`${stlye.chenheadimg} text-decoration-none`}
          />
        </Link>
        <Link
          href="#"
          className={`align-items-center fw-bold ${stlye.editbutton2} text-black text-decoration-none`}
        >
          {nickname}
        </Link>
      </div>
    </>
  )
}
