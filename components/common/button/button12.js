import style from '@/components/common/button/button2.module.css'
import { useRouter } from 'next/router'

export default function Button12() {
    const router = useRouter('')
    const Like = () => {
        
    }
    return ( 
    <>
        <button className={style.chenbutton2}>查看更多</button>
    </>
    )
}