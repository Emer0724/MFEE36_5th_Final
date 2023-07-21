import React, { useState } from 'react'
import styles from '../../styles/mem-style/dashboard-profile.module.css'
import MemberNav from '@/components/common/member-nav/member-nav'
import Member_info from '@/components/Leo/member/member_info'
import Form from 'react-bootstrap/Form'
import Image from 'next/image'

const Profile = () => {
  const [name, setName] = useState('xxx')
  const [email, setEmail] = useState('xxx@company.com')
  const [username, setUsername] = useState('username')
  const [password, setPassword] = useState('********')
  const [paymentMethod, setPaymentMethod] = useState('Linepay 或 信用卡')
  const [creditcard, setCreditcard] = useState('XXXX-XXXX-XXXX-XXXX')
  const [shippingAddress, setShippingAddress] = useState(
    '106 台北市大安區復興南路一段390號2樓'
  )
  const [mobile, setMobile] = useState('09xx-xxx-xxx')
  const [token, setToken] = useState('9999點')

  const saveData = () => {
    console.log('Saving data:', {
      name,
      email,
      username,
      password,
      paymentMethod,
      shippingAddress,
    })
  }

  return (
    <div>
      <Member_info />
      <MemberNav />
      <div className={styles['outer-container']}>
        <div className={styles['profile-box']}>
          <div>
            <div className={styles['profile-title']}>帳戶資料</div>

            <div>
              <p className={styles['profile-items']}>姓名: </p>
              <div className={styles['data-line']}>
                <p>{name}</p>
                <button
                  onClick={() => setName('')}
                  className={styles['edit-btn']}
                >
                  編輯
                </button>
              </div>

              <div>
                <p className={styles['profile-items']}>電子郵件: </p>
                <div className={styles['data-line']}>
                  {email}
                  <button
                    onClick={() => setEmail('')}
                    className={styles['edit-btn']}
                  >
                    編輯
                  </button>
                </div>
              </div>

              <div>
                <p className={styles['profile-items']}>使用者名稱: </p>
                <div className={styles['data-line']}>
                  {username}
                  <button
                    onClick={() => setUsername('')}
                    className={styles['edit-btn']}
                  >
                    編輯
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p className={styles['profile-items']}>密碼: </p>
                <div className={styles['data-line']}>
                  {password}
                  <button
                    onClick={() => setPassword('')}
                    className={styles['edit-btn']}
                  >
                    編輯
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h1 className={styles['profile-title']}>付款方式</h1>

          <div>
            <div>
              <p className={styles['profile-items']}>信用卡/其他支付方式:</p>

              <Form>
                <div className={styles['form-radio']}>
                  <Form.Check
                    type="radio"
                    name="group1"
                    id={`default-radio`}
                    label={``}
                  />
                  <Image
                    alt="Linepay"
                    src="/mem-img/linepayw85h25.png"
                    className=""
                    width={85}
                    height={25}
                  />
                </div>
                <div className={styles['data-line']}>
                  <div className="d-flex align-items-baseline">
                    <input type="radio" name="group1" id={`default-radio`} />
                    <p className="px-1">信用卡卡號: {creditcard}</p>
                  </div>

                  <button
                    onClick={() => setShippingAddress('')}
                    className={styles['edit-btn']}
                  >
                    編輯
                  </button>
                </div>
              </Form>

              {/* <button
                  onClick={() => setPaymentMethod('')}
                  className={styles['edit-btn']}
                >
                  編輯
                </button> */}
            </div>
          </div>
          <div>
            <div>
              <p className={styles['profile-items']}>地址: </p>
              <div className={styles['data-line']}>
                {shippingAddress}
                <button
                  onClick={() => setShippingAddress('')}
                  className={styles['edit-btn']}
                >
                  編輯
                </button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p className={styles['profile-items']}>電話: </p>
              <div className={styles['data-line']}>
                {mobile}
                <button
                  onClick={() => setMobile('')}
                  className={styles['edit-btn']}
                >
                  編輯
                </button>
              </div>
            </div>
          </div>

          <div>
            <h1 className={styles['profile-title']}>知音幣</h1>
            <div className={styles['data-line']}>{token}</div>
          </div>
          <div className="d-flex justify-content-center mx-5">
            <button onClick={saveData} className={styles['save-btn']}>
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
