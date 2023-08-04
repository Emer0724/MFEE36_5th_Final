import React, { useState,useEffect } from 'react';
import style from '@/components/common/button/button4.module.css';

export default function Button7({ blog_sid }) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('')
  const [memberData, setMemberData] = useState([])

  useEffect(() => {
    // 從本地儲存空間獲取會員資料
    const storedMemberData = localStorage.getItem('auth');

    if (storedMemberData) {
      const parsedMemberData = JSON.parse(storedMemberData);
      setMemberData(parsedMemberData);
    }
  }, [])

  const member_id = memberData.member_id;

  const handleButtonClick = () => {
    setInputVisible(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSendClick = () => {
    const backendUrl = 'http://localhost:3055/blog/reply/upload';

    const data = {
      member_id,
      blog_sid,
      inputValue,
    }

    fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('来自后端的响应数据：', responseData)

        window.location.reload();

        setInputValue('')
        setInputVisible(false)
      })
      .catch((error) => {
        console.error('发送数据到后端时发生错误：', error)
      })
  }

  return (
    <>
      {isInputVisible ? (
        <>
          <div className="d-flex mb-3">
            <textarea
              className={`${style.chenbut} form-control`}
              id="exampleFormControlTextarea1"
              onChange={handleInputChange}
              value={inputValue}
              rows="3"
            ></textarea>
          </div>
          <button className={`${style.chenbutton3}`} onClick={handleSendClick}>
            送 出
          </button>
        </>
      ) : (
        <button className={`${style.chenbutton3}`} onClick={handleButtonClick}>
          回 覆
        </button>
      )}
    </>
  );
}