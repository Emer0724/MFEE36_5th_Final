import stlye from '@/components/book-review/blogavatar.module.css'
import Image from 'next/image'
import people from '@/assets/used-svg/people.svg'

export default function BlogPersonalAvatar({ nickname, mem_avatar }) {
    return (
        <>
            <div>
                <div className={`${stlye.chenpersonal} d-flex`}>
                    <div>
                        <div>
                            <Image src={mem_avatar ? mem_avatar : people} className={stlye.chenheadimg}/>
                        </div>
                    </div>
                    <div className={`text-decoration-none`}>
                            <div className={`${stlye.chenwd} fw-bold mb-0 mt-1 text-dark pb-2`}>阿巴</div>
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