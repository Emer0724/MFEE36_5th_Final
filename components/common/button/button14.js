import style from '@/components/common/button/button5.module.css'
import { useRouter } from 'next/router'

export default function Button14() {

    const router = useRouter('')
    const editBook = ()=>{
        router.push('/blog/upload/book-edit')
    }

    return (
        <>
            <button onClick={editBook} className={`${style.chenbutton3}`}>編 輯</button>
        </>
    )
}