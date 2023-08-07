import style from '@/components/common/button/button5.module.css'
import { useRouter } from 'next/router'

export default function Button10({blog_sid}) {
    console.log(blog_sid)
    const router = useRouter('')
    const editBlog = ()=>{
        router.push({
            pathname: '/blog/upload/blog-edit',
            query: { blog_sid: blog_sid }
          });
        };
    return (
        <>
            <button onClick={editBlog} className={`${style.chenbutton3}`}>編 輯</button>
        </>
    )
}