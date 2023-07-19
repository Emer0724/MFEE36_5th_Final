import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaMapMarkedAlt } from 'react-icons/fa'
import style from '@/components/common/footer/footer.module.css'

export default function Footer() {
  return (
      <div className={`${style.chencolor} container-fulid d-flex`}>
        <div className="d-flex  justify-content-center col-6 mt-2 mb-2">
          <div>
            <div>
              <BsFillTelephoneFill className={`${style.chenicon} pe-2`} />
              (02)-6631-6588
            </div>
            <div>
              <FaMapMarkedAlt className={`${style.chenicon} pe-2`} />
              台北市大安區復興南路一段390號2樓
            </div>
            <div>
              <FaFacebook className={`${style.chenicon} pe-2`} />
              <AiFillTwitterCircle className={`${style.chenicon2} pe-2`} />
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-end">
          <div className="pe-2">Copyright © 2023 mfee36 Inc.</div>
        </div>
      </div>
  )
}
