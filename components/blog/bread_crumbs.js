import style from '@/components/blog/bread-crumbs.module.css'
import Link from 'next/link'
import { useState , useEffect } from 'react'

export default function BreadCrumbs() {

    const [date, setDate] = useState([]);

    useEffect(() => {
        fetchLatestBlogs();
      }, []);

      const fetchLatestBlogs = async () => {
        try {
          const response = await fetch('http://localhost:3055/blog/blogsort/ASC')
          const data = await response.json();
          setDate(data)
        } catch (error) {
          console.error('錯誤', error);
        }
      };

      const fetchOldestBlogs = async () => {
        try {
          const response = await fetch('http://localhost:3055/blog/blogsort/DESC')
          const data = await response.json();
          setDate(data)
        } catch (error) {
          console.error('錯誤：', error);
        }
      };

    return (
        <>
            <div className={`${style.chenjc} d-flex pb-3`}>
                <div className='pe-4'>
                    <Link href="" onClick={fetchLatestBlogs} className={`${style.chenp} fs-5 text-black text-decoration-none`}>最新</Link>
                </div>
                <div>
                    <Link href="" onClick={fetchOldestBlogs} className={`fs-5 text-black text-decoration-none`}>最舊</Link>
                </div>
            </div>
        </>
    )
}