import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'
import x from './member_info.module.css'
import camera from '@/assets/leo-svg/camera-solid.svg'

export default function Member_info() {
  return (
    <div className={x.box_member_info}>
      <div className={x.box_member_main}>
        <div className={x.member_info_avatar}>
          <div className={x.avatar_img}></div>
          <Image
            className={x.camera_icon}
            src={camera}
            width={48}
            height={48}
            alt="camera"
          />
        </div>
        <div className={x.member_info_detail}>
          <h2 className={x.detail_name}>胡力中</h2>
          <h2 className={x.detail_nickname}>斂財文青</h2>
        </div>
      </div>
    </div>
  )
}
