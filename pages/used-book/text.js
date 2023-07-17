import React from 'react'
import UsedList from '@/components/used/used-list/index'
import { useState } from 'react'
import UsedUpCheck from '@/components/used/used-upcheck'
import PopUp from '@/components/common/popup/popup'

export default function Text() {
  const datas = [
    { book_state: '近全新', price: '198', inventory: '10' },
    { book_state: '良好', price: '198', inventory: '10' },
    { book_state: '不良', price: '198', inventory: '10' },
  ]
  // const datas=['noUsedBook']
  const ISBN = '9876445237'
  const getsome = () => {
    return 'getsome'
  }

  return (
    <>
      <div className="w-50">
        <UsedList datas={datas} ISBN={ISBN}></UsedList>
      </div>
      <UsedUpCheck />
      {/* <PopUp content1={12346} content2={'5454646'} onclick1={getsome} /> */}
    </>
  )
}
