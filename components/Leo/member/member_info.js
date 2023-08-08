import React, { useEffect, useRef, useState, useContext } from 'react'
import Image from 'next/image'
import x from './member_info.module.css'
import camera from '@/assets/leo-svg/camera-solid.svg'
import people from '@/assets/used-svg/people.svg'
import { useRouter } from 'next/router'
import AuthContext from '@/context/AuthContext'

export default function Member_info() {
  const { auth, setAuth, photo, setphoto } = useContext(AuthContext)
  const router = useRouter()
  const [auth1, setAuth1] = useState([])
  const [img, setnewimg] = useState([])
  useEffect(() => {
    const getauth = () => {
      if (localStorage.getItem('auth')) {
        const auth = JSON.parse(localStorage.getItem('auth'))
        setAuth1(auth)
        setnewimg(auth.mem_avatar)
      }
    }
    getauth()
  }, [])

  // useEffect(() => {
  //   uploadimg()
  // }, [img])
  const inputimgref = useRef()
  const uploadimg = () => {
    inputimgref.current.click()
  }
  const getimg = (event) => {
    event.preventDefault() // 阻止預設的表單提交行為
    console.log(event)

    const formData = new FormData() // 建立新的 FormData 物件
    formData.append('avatar', inputimgref.current.files[0]) // 將選擇的檔案加入到 FormData 中
    const authToken = JSON.parse(localStorage.getItem('auth')).token

    // 使用 fetch 或其他方式將 FormData 送到後端處理
    fetch(`${process.env.API_SERVER}/used/upload`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // console.log(data[0].filename)
        setnewimg(data[0].filename)
        const auth_old = JSON.parse(localStorage.getItem('auth'))
        const auth_old_new = JSON.stringify({
          ...auth_old,
          mem_avatar: data[0].filename,
        })
        localStorage.setItem('auth', auth_old_new)
        setphoto(data[0].filename)
        // router.reload()
      })
      .catch((error) => {
        // 處理錯誤
        console.error('Error:', error)
      })
  }
  return (
    <div className={x.box_member_info}>
      <div className={x.box_member_main}>
        <div className={x.member_info_avatar}>
          {img ? (
            <div className={x.avatar_img_1}>
              <Image
                src={`${process.env.API_SERVER}/avatar/${img}`}
                alt="people"
                className={x.img_img}
                width={190}
                height={190}
              />
            </div>
          ) : (
            <div className={x.avatar_img}>
              <Image src={people} alt="people" className={x.img_img} />
            </div>
          )}

          <Image
            className={x.camera_icon}
            src={camera}
            width={35}
            height={35}
            alt="camera"
            onClick={uploadimg}
          />
          <form
            action={`${process.env.API_SERVER}/used/upload`}
            id="uploadForm"
            method="post"
            encType="multipart/form-data"
          >
            <input
              type="file"
              className="d-none"
              ref={inputimgref}
              onChange={getimg}
              name="avatar"
              id="imageInput"
              accept=".jpg, .jpeg, .png"
            />
          </form>
        </div>
        <div className={x.member_info_detail}>
          <h2 className={x.detail_name}>{auth1.name}</h2>
          <h2 className={x.detail_nickname}>{auth1.nickname}</h2>
        </div>
      </div>
    </div>
  )
}
