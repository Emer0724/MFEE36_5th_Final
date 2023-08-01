import style from '@/components/blog/bread-crumbs.module.css'
import Link from 'next/link'
import { useState , useEffect } from 'react'

export default function BreadCrumbs() {

    const [date , setDate] = useState([])
    const [sort, setSort] = useState('newest')

    useEffect(() => {
        fetchBlogs(sort);
      }, [sort]);

    const fetchBlogs = async (sort) => {
        try {
          const response = await fetch(`http://localhost:3055/blog/blogsort?sort=${sort}`);
          const data = await response.json();
          setDate(data);
        } catch (error) {
          console.error('獲取資料時出錯：', error);
        }
      }
      const handleLinkClick = (event, sortOption) => {
        event.preventDefault();
        setSort(sortOption);
      }

    return (
        <>
            <div className={`${style.bread}`}>
                <div className={`${style.chenbreadhole} text-body-tertiary pb-5`}>
                    <Link href="#" className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}>首頁</Link>&#062;
                    <Link href="#" className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}>部落格</Link>&#062;	
                    <Link href="#" className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}>熱門</Link>
                </div>
            </div>
            <div className={`${style.chenjc} d-flex pb-3`}>
                <div className='pe-4'>
                    <Link href="#"  onClick={(event) => handleLinkClick(event, 'newest')} className={`${style.chenp} fs-5 text-black text-decoration-none`}>最新</Link>
                </div>
                <div>
                    <Link href="#"  onClick={(event) => handleLinkClick(event, 'oldest')} className={`fs-5 text-black text-decoration-none`}>最舊</Link>
                </div>
            </div>
        </>
    )
}