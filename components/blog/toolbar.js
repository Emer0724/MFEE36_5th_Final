import Button1 from '../common/button/button1'
import {BiSolidBook} from 'react-icons/bi'
import {FaPencilAlt} from 'react-icons/fa'
import {MdFavorite} from 'react-icons/md'
import {BiSolidBell} from 'react-icons/bi'
import {GoPersonFill} from 'react-icons/go'
import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css'
import Avatar from "../book-review/blogavatar"

export default function ToolBar() {
    return (
        <>
        <div className="col-2">
            <Avatar/>     
            <div className="flex-direction-column align-items-center justify-content-center d-flex pt-5">
                <Link href="#" className={`text-decoration-none fw-bold fs-5 pb-2 fa-solid fa-book text-dark`}><BiSolidBook className="pb-1 pe-1 fs-4"/>部落格</Link>
            </div>
            <div className="flex-direction-column align-items-center justify-content-center d-flex pt-5">
                <Link href="#" className={`text-decoration-none fw-bold fs-5 pb-2 fa-solid fa-book text-dark`}><FaPencilAlt className="pb-1 pe-1 fs-5"/>書評</Link>
            </div>
            <div className="flex-direction-column align-items-center justify-content-center d-flex pt-5">
                <Link href="#" className={`text-decoration-none fw-bold fs-5 pb-2 fa-solid fa-book text-dark`}><MdFavorite className="pb-1 pe-1 fs-4"/>最愛</Link>
            </div>
            <div className="flex-direction-column align-items-center justify-content-center d-flex pt-5">
                <Link href="#" className={`text-decoration-none fw-bold fs-5 pb-2 fa-solid fa-book text-dark`}><BiSolidBell className="pb-1 pe-1 fs-4"/>追蹤</Link>   
                </div>
            <div className="flex-direction-column align-items-center justify-content-center d-flex pt-5">
                <Link href="#" className={`text-decoration-none fw-bold fs-5 pb-2 fa-solid fa-book text-dark`}><GoPersonFill className="pb-1 pe-1 fs-4"/>我的</Link>
            </div>
            <div className="flex-direction-column align-items-center justify-content-center d-flex pt-5">
                <Button1/>
            </div>
        </div>
        </>
    )
}