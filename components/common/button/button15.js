import style from '@/components/common/button/button5.module.css'
import { useRouter } from 'next/router'

export default function Button15({book_review_sid}) {

console.log(book_review_sid)
    const router = useRouter('')
    const editBook = () => {
        router.push({
          pathname: '/blog/upload/book-edit',
          query: { book_review_sid: book_review_sid }
        });
      };
    return (
        <>
            <button onClick={editBook} className={`${style.chenbutton3} ${style.chendis}`}>編 輯</button>
        </>
    )
}