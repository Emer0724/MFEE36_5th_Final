import style from '@/components/common/button/button5.module.css'
import { useRouter } from 'next/router'

export default function Button9() {
    const router = useRouter('')


    const Back = ()=>{
        router.push('/blog/blog-home-page')    
    }


    return ( 
    <>
        <button type='button' onClick={Back} className={`${style.chenbutton3}`}>返 回</button>
    </>
    )
}