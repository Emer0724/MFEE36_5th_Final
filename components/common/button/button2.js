import style from '@/components/common/button/button2.module.css'
import { useRouter } from 'next/router'


export default function Button2() {

    const router = useRouter('')
    const Track = () => {
        router.push('/blog/tag')
    }
    return ( 
    <>
        <button onClick={Track} className={style.chenbutton2}>查看更多</button>
    </>
  )
}
