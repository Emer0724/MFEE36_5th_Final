import style from '@/components/blog/bread-crumbs.module.css'
import Link from 'next/link'



export default function BreadCrumbs() {
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
                    <Link href="#" className={`${style.chenp} fs-5 text-black text-decoration-none`}>最新</Link>
                </div>
                <div>
                    <Link href="#" className={`fs-5 text-black text-decoration-none`}>最舊</Link>
                </div>
            </div>
        </>
    )
}