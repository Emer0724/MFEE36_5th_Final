import style from '@/components/common/button/button5.module.css'
import { useRouter } from 'next/router'

export default function Button9() {
    const router = useRouter('')


    const Back = ()=>{
        router.push('http://localhost:3000/blog/personal-page/work')    
    }


    return ( 
    <>
        <button type='button' onClick={Back} className={`${style.chenbutton3}`}>返 回</button>
    </>
    )
}