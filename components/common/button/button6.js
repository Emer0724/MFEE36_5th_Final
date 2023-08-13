import style from '@/components/common/button/button5.module.css';
import React from 'react';

export function Button6({ member2_id, onDelete }) {
  const handleDeleteTrack = async () => {
    try {
      await fetch(`http://localhost:3055/blog/deletetrack/${member2_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${encodeURIComponent(localStorage.getItem('auth'))}`,
        },
      });

      onDelete(member2_id);
    } catch (error) {
      console.error('删除失败：', error);
    }
  }

  return (
    <>
      <button className={`${style.chenbutton3}`} onClick={handleDeleteTrack}>
        取 消 追 踪
      </button>
    </>
  );
}