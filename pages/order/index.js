import CartTitle from '@/components/Cart_component/Cart_title'
import OrderState from '@/components/Cart_component/order/order_state'
import OrderTotalPrice from '@/components/Cart_component/order/totalprice'
import React, { useState, useEffect } from 'react'
import styles from '@/pages/order/Orderindex.module.css'
import loc from '@/data/address.json'
import { useRouter } from 'next/router'

export default function checkForm() {
  const [windowWidth, setWindowWidth] = useState(null)
  const [shippingMethod, setShippingMethod] = useState('宅配到家+100')
  const [paymentMethod, setPaymentMethod] = useState('linepay')
  const [recipientName, setRecipientName] = useState('')
  const [recipientPhone, setRecipientPhone] = useState('')
  const [recipientAddress, setRecipientAddress] = useState('')
  const [recipientstore, setRecipientstore] = useState('')
  const [shippingCost, setShippingCost] = useState(100)
  const [isNameRight, setisNameRight] = useState(true)
  const [iscellphoneRight, setiscellphoneRight] = useState(true)
  const router = useRouter()

  const [selectedCity, setSelectedCity] = useState('')
  const [selectedArea, setSelectedArea] = useState('')
  const [selectedRoad, setSelectedRoad] = useState('')
  const [areaOptions, setAreaOptions] = useState([])
  const [member, setMember] = useState(0)
  const [showcity, setshowcity] = useState(false)

  const addresscity = loc.map((v) => v.CityName)
  const city = addresscity.map((v, i) => {
    return (
      <option value={v} key={i}>
        {v}
      </option>
    )
  })
  const handleCityChange = (event) => {
    const selectedCity = event.target.value
    setSelectedCity(selectedCity)
    // 根據所選的城市，更新區域的選項
    const selectedCityData = loc.find((v) => v.CityName === selectedCity)
    const areaOptions = selectedCityData.AreaList.map((area) => ({
      value: area.AreaName,
      label: area.AreaName,
    }))
    setSelectedArea('') // 清空選擇的區域
    setAreaOptions(areaOptions)
  }
  const handleAreaChange = (event) => {
    const selectedArea = event.target.value
    setSelectedArea(selectedArea)
  }
  const cityroad = (e) => {
    setSelectedRoad(e.target.value)
  }

  const judgename = () => {
    const chineseNameRegExp = /^[\u4e00-\u9fa5]{2,4}$/
    setisNameRight(chineseNameRegExp.test(recipientName))
  }

  const judgecellphone = () => {
    const taiwanPhoneNumberRegExp = /^09\d{8}$/
    setiscellphoneRight(taiwanPhoneNumberRegExp.test(recipientPhone))
  }

  const shippingMethodHandle = (event) => {
    if (shippingMethod === '宅配到家+100') {
      setShippingCost(60)
      setShippingMethod(event.target.value)
    } else {
      setShippingCost(100)
      setShippingMethod(event.target.value)
    }
  }

  const paymentMethodHandle = (event) => {
    setPaymentMethod(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (isNameRight && iscellphoneRight) {
      let fullAddress = '' // 完整地址
      if (shippingMethod === '宅配到家+100') {
        fullAddress = `${selectedCity}${selectedArea}${selectedRoad}`
      } else {
        fullAddress = recipientstore
      }
      const formData = {
        shippingMethod,
        paymentMethod,
        recipientName,
        recipientPhone,
        recipientAddress: fullAddress, // 使用完整地址
        recipientstore,
        shippingCost,
        selectedCity,
        selectedArea,
        selectedRoad,
      }
      const formDataJSON = JSON.stringify(formData)
      localStorage.setItem('formData', formDataJSON)
      router.push('/order/productcheck')
    }
  }
  useEffect(() => {
    const storedData1 = localStorage.getItem('auth')
    const formData1 = JSON.parse(storedData1)
    setMember(formData1.member_id)

    const initialFormData = {
      shippingMethod: '宅配到家+100',
      paymentMethod: 'linepay',
      recipientName: '',
      recipientPhone: '',
      selectedCity: '',
      selectedArea: '',
      selectedRoad: '',
    }
    const storedData = localStorage.getItem('formData')
    if (!storedData) {
      // 如果localStorage中沒有formData，就存入初始資料
      const formDataJSON = JSON.stringify(initialFormData)
      localStorage.setItem('formData', formDataJSON)
    } else {
      // 如果已經有formData，就將其解析並設定為表單狀態
      const formData = JSON.parse(storedData)
      setShippingMethod(formData.shippingMethod)
      setRecipientName(formData.recipientName)
      setRecipientPhone(formData.recipientPhone)
      setSelectedCity(formData.selectedCity)
      setSelectedArea(formData.selectedArea)
      setSelectedRoad(formData.selectedRoad)
      setshowcity(true)
    }
  }, [])

  const handleSameCheckbox = (event) => {
    const isChecked = event.target.checked
    if (isChecked) {
      fetchRecipientInfo()
      setshowcity(true)
    } else {
      // Reset the form fields if needed
      setRecipientName('')
      setRecipientPhone('')
      setSelectedCity('')
      setSelectedArea('')
      setSelectedRoad('')
      setshowcity(false)
    }
  }
  const fetchRecipientInfo = () => {
    fetch(`${process.env.API_SERVER}/cart/cartmember?member=${member}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data) // 確認資料是否正確
        setRecipientName(data[0].name)
        setRecipientPhone(data[0].mobile)
        setSelectedCity(data[0].city)
        setSelectedArea(data[0].district)
        setSelectedRoad(data[0].address)
      })
      .catch((error) => {
        console.error('Error fetching recipient info:', error)
      })
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const Formstyles1 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '25px',
  }
  const blockstyle1 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '100px',
  }
  const labelstyle1 = {
    fontSize: '20px',
  }
  const inputstyle = {
    width: '350px',
    height: '60px',
    borderRadius: '8px',
    border: '1px solid #52796F',
    background: '#EEEEEE',
    padding: '20px',
    fontSize: '20px',
    marginTop: '20px',
  }
  const blockstyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '100px',
  }
  const labelstyle = {
    fontSize: '24px',
  }
  const selectstyle = {
    width: '350px',
    height: '60px',
    borderRadius: '8px',
    border: '1px solid #52796F',
    padding: '10px 20px',
    fontSize: '20px',
    marginTop: '20px',
  }
  const selectstyle1 = {
    width: '150px',
    height: '60px',
    borderRadius: '8px',
    border: '1px solid #52796F',
    padding: '10px 20px',
    fontSize: '20px',
    marginTop: '20px',
  }
  const buttonStyle2 = {
    backgroundColor: '#52796F',
    width: windowWidth && windowWidth > 600 ? 200 : 150,
    height: 50,
    borderRadius: 5,
    color: 'white',
    fontSize: windowWidth && windowWidth > 600 ? '20px' : '16px',
    position: windowWidth && windowWidth > 1400 ? 'absolute' : '',
    left: windowWidth && windowWidth > 1400 ? '900px' : '',
    top: windowWidth && windowWidth > 1400 ? '1780px' : '',
  }
  const pos1 = {
    textAlign: 'center',
    marginBottom: '30px',
  }
  const address = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '25px',
  }
  const alerttext = {
    color: 'red',
  }
  const pad1 = {
    paddingTop: '10px',
  }

  return (
    <>
      <OrderState />
      <CartTitle
        className={styles.title}
        titlecontent={'選擇喜歡的寄送方式和付款方式吧'}
      />
      <div className={styles.checkcontain}>
        <form style={Formstyles1} onSubmit={handleFormSubmit}>
          <div style={blockstyle}>
            <label style={labelstyle}>寄件方式</label>
            <select style={selectstyle} onChange={shippingMethodHandle}>
              <option>宅配到家+100</option>
              <option>全家便利商店+60</option>
            </select>
          </div>
          <div style={blockstyle}>
            <label style={labelstyle}>付款方式</label>
            <select style={selectstyle} onChange={paymentMethodHandle}>
              <option>linepay</option>
              <option>信用卡付款</option>
            </select>
          </div>
          <div>
            <input type="checkbox" name="same" onChange={handleSameCheckbox} />
            <label htmlFor="same">同會員資訊</label>
          </div>
          <div style={blockstyle1}>
            <label style={labelstyle1} name={'custname'}>
              收件人姓名
            </label>
            <input
              type="text"
              style={inputstyle}
              name={'custname'}
              placeholder="請輸入中文姓名"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              onBlur={judgename}
              required
            />
            {isNameRight !== true ? (
              <div style={pad1}>
                <p style={alerttext}>請輸入正確中文姓名</p>
              </div>
            ) : (
              ''
            )}
          </div>

          <div style={blockstyle1}>
            <label style={labelstyle1} name={'cellphone'}>
              收件人手機
            </label>
            <input
              type="text"
              style={inputstyle}
              name={'cellphone'}
              placeholder="請輸入手機(09xxxxxxxx)"
              value={recipientPhone}
              onChange={(e) => setRecipientPhone(e.target.value)}
              onBlur={judgecellphone}
              required
            />
            {iscellphoneRight !== true ? (
              <div style={pad1}>
                <p style={alerttext}>請輸入正確電話號碼</p>
              </div>
            ) : (
              ''
            )}
          </div>
          {shippingMethod === '宅配到家+100' && (
            <div style={blockstyle1}>
              <label style={labelstyle1}>收件人地址</label>
              <div style={address}>
                <select
                  style={selectstyle1}
                  value={selectedCity}
                  onChange={handleCityChange}
                >
                  {showcity ? (
                    <>
                      <option value={selectedCity}>{selectedCity}</option>
                      {city}
                    </>
                  ) : (
                    <>
                      <option value="">請選擇</option>
                      {city}
                    </>
                  )}
                </select>
                <select
                  style={selectstyle1}
                  value={selectedArea}
                  onChange={handleAreaChange}
                >
                  {showcity ? (
                    <>
                      <option value={selectedArea}>{selectedArea}</option>
                      {areaOptions.map((area) => (
                        <option key={area.value} value={area.value}>
                          {area.label}
                        </option>
                      ))}
                    </>
                  ) : (
                    <>
                      <option value="">請選擇</option>
                      {selectedCity === '' ? (
                        <option value=""></option>
                      ) : (
                        <>
                          {areaOptions.map((area) => (
                            <option key={area.value} value={area.value}>
                              {area.label}
                            </option>
                          ))}
                        </>
                      )}
                    </>
                  )}
                </select>
                <input
                  type="text"
                  placeholder="請輸入路名 鄉 鎮 巷 號 樓層"
                  value={selectedRoad}
                  onChange={cityroad}
                  style={inputstyle}
                  required
                />
              </div>
            </div>
          )}
          {shippingMethod === '全家便利商店+60' && (
            <div style={blockstyle1}>
              <label style={labelstyle1}>門市選擇</label>
              <input
                type="text"
                style={inputstyle}
                value={recipientstore}
                placeholder="請輸入縣市與全家門市名稱"
                onChange={(e) => setRecipientstore(e.target.value)}
                required
              />
            </div>
          )}
          <button style={buttonStyle2} type={'submit'}>
            下一步，確認商品
          </button>
        </form>
        {windowWidth > 600 ? (
          <div>
            <OrderTotalPrice
              border1={'1px solid #52796F'}
              shippingCost={shippingCost}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
