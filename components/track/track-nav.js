import React, { useState, useEffect } from 'react';

export default function LikeNav() {
  const [favoriteCount, setFavoriteCount] = useState(0);
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
    if (memberData && memberData.member_id && user) {
      // 從伺服器獲取最愛的創作者人數
      fetch(`http://localhost:3055/blog/nav/track/${user}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setFavoriteCount(data); // 注意這裡將 data 直接設置為 favoriteCount
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [memberData, user]);

  return (
    <>
      <div className='d-flex justify-content-between border-bottom border-dark pb-2'>
        <div className='fs-5 fw-bold'><span>追蹤的創作者</span></div>
        <div className='text-body-tertiary pt-1'><span>已追蹤 {favoriteCount} 位</span></div>
      </div>
    </>
  );
}