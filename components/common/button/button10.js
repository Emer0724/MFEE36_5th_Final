import style from '@/components/common/button/button5.module.css'
import { useRouter } from 'next/router'

export default function Button10() {

    const router = useRouter('')
    const editBlog = ()=>{
        router.push('/blog/upload/blog-edit')
    }

    return (
        <>
            <button onClick={editBlog} className={`${style.chenbutton3}`}>編 輯</button>
        </>
    )
}