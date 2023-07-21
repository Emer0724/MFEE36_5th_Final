import style from '@/components/common/button/button5.module.css'
import { useRouter } from 'next/router'

export default function BackButton() {
  const router = useRouter('')

  const BackBlog = () => {
    router.push('/blog/personal-page/work')
  }

  return (
    <>
      <button
        type="button"
        onClick={BackBlog}
        className={`${style.chenbutton3}`}
      >
        返 回
      </button>
    </>
  )
}
