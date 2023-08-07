import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import Image from 'next/image'
import { Select, Space } from 'antd'
import UsedEdit from '@/components/used/used_edit'

export default function Backstage() {
  const [qrcode, setQrcode] = useState(false)
  const [QRcoderesult, setQRcoderesult] = useState('')
  const [input, setinput] = useState('')
  const [data, setdata] = useState([])

  const getitem = async (input) => {
    console.log(input)
    let inputvalue = []
    inputvalue.push(input)
    // console.log(inputvalue)
    const data = {
      ISBN: inputvalue,
    }
    console.log(JSON.stringify(data))
    const getitem1 = await fetch(`${process.env.WEB}/used/backstage_info`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const getitem12 = await getitem1.json()
    console.log(getitem12)
    setdata(getitem12)
  }

  const getitem2 = async (input) => {
    console.log(input + '123')

    const data = {
      ISBN: input,
    }
    console.log(JSON.stringify(data))
    const getitem1 = await fetch(` ${process.env.WEB}/used/backstage_info`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const getitem12 = await getitem1.json()
    console.log(getitem12)
    setdata(getitem12)
  }

  const goQrcode = () => {
    setQrcode(!qrcode)
  }

  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner('reader', {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    })
    if (qrcode) {
      html5QrcodeScanner.render(success, error)
      function success(result) {
        html5QrcodeScanner.clear()
        setQRcoderesult(result)
      }
      function error(err) {
        console.log(err)
      }
    }
  }, [qrcode])

  useEffect(() => {
    if (QRcoderesult) {
      getitem2(QRcoderesult)
      console.log(QRcoderesult)
    }
  }, [QRcoderesult])

  // const handleEdit=()=>{
  //   setedit(true)
  // }

  return (
    <>
      <div className="d-flex justify-content-center flex-column align-self-center mt-5">
        <div className="text-center">
          <label htmlFor="">上架流水號:</label>
          <input
            type="text"
            size={10}
            onChange={(event) => setinput(event.target.value)}
          />
          <button className="btn" onClick={() => getitem(input)}>
            送出
          </button>
        </div>

        <button className="btn" onClick={() => goQrcode()}>
          掃QRcode
        </button>
        <div id="reader" className={qrcode ? '' : 'd-none'}></div>
      </div>
      {data.length > 0 ? (
        <>
          <div
            className="accordion accordion-flush "
            id="accordionFlushExample"
          >
            {data.map((v, i) => {
              return (
                <UsedEdit
                  key={v.used_id}
                  used_id={v.used_id}
                  book_name={v.book_name}
                  pic={v.pic}
                  ISBN={v.ISBN}
                  status_id={v.status_id}
                  original_price={v.original_price}
                  price={v.price}
                  used_state={v.used_state}
                />
              )
            })}
          </div>
        </>
      ) : (
        ''
      )}

      <div style={{ width: '100%', height: '300px' }}></div>
    </>
  )
}
