import React, { useState, useEffect } from 'react';
import style from '@/components/common/button/button3.module.css';

export default function Button3({ member_id }) {
  const [isFollowed, setIsFollowed] = useState(false);
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    // 從本地儲存空間獲取會員資料
    const storedMemberData = localStorage.getItem('auth');

    if (storedMemberData) {
      const parsedMemberData = JSON.parse(storedMemberData);
      setMemberData(parsedMemberData);
    }
  }, []);

  const user = memberData.member_id;

  useEffect(() => {
    // 頁面載入後，設置追蹤狀態
    const storedFollowStatus = localStorage.getItem(`follow_${member_id}`);
    if (storedFollowStatus) {
      setIsFollowed(JSON.parse(storedFollowStatus));
    }

    // 查詢資料庫檢查追蹤狀態
    fetch(`http://localhost:3055/blog/checktrack/${member_id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('auth')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.isFollowed) {
          setIsFollowed(true);
          localStorage.setItem(`follow_${member_id}`, JSON.stringify(true));
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [member_id]);

  const handleButtonClick = () => {
    const requestData = { member_id: member_id, user: user };

    if (isFollowed) {
      fetch(`http://localhost:3055/blog/deletetrack/${member_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsFollowed(false);
          // 刪除追蹤後，同時也刪除本地儲存中的狀態
          localStorage.removeItem(`follow_${member_id}`);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      fetch(`http://localhost:3055/blog/track/${member_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsFollowed(true);
          // 追蹤後，同時保存狀態到本地儲存
          localStorage.setItem(`follow_${member_id}`, JSON.stringify(true));
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <>
      <button className={`${style.chenbutton3}`} onClick={handleButtonClick}>
        {isFollowed ? '取 消 追 踪' : '追 蹤'}
      </button>
    </>
  );
}