import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

export default function Backstage() {
  const [QRcoderesult, setQRcoderesult] = useState('')
  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner('reader', {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    })
    html5QrcodeScanner.render(success, error)
    function success(result) {
      html5QrcodeScanner.clear()
      setQRcoderesult(result)
    }
    function error(err) {
      console.log(err)
    }
  }, [])

  return (
    <>
      <div>掃QRcode</div>
      <div id="reader"></div>
      {QRcoderesult ? <div>{QRcoderesult}</div> : ''}
    </>
  )
}
