import style from '@/components/common/button/button5.module.css'
import { useRouter } from 'next/router'

export default function BookBackButton() {
  const router = useRouter('')

  const BackBook = () => {
    router.push('/blog/personal-page/review')
  }

  return (
    <>
      <button
        type="button"
        onClick={BackBook}
        className={`${style.chenbutton3}`}
      >
        返 回
      </button>
    </>
  )
}
