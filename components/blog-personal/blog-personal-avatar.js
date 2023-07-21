import stlye from '@/components/book-review/blogavatar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import img1 from '@/public/blogimg/images.jpg'

export default function BlogPersonalAvatar() {
    return (
        <>
            <div>
                <div className={`${stlye.chenpersonal} d-flex`}>
                    <div>
                        <div>
                            <Image src={img1} className={stlye.chenheadimg}/>
                        </div>
                    </div>
                    <div className={`text-decoration-none`}>
                            <div className="fw-bold mb-0 mt-1 fs-5 text-dark pb-2">阿巴</div>
                        </div>
                    <div className='d-flex'>
                        <div className='pe-2'>
                            <span className='pe-2 text-decoration-none'>500 追蹤者</span>
                        </div>
                        <div>
                            <span className='text-decoration-none'>20 追蹤中</span>
                        </div>
                    </div>
                </div>
            </div>       
        </>
    )
}