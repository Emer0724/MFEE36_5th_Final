import React from 'react'
import UsedList from '@/components/used/used-list/index'
import { useState } from 'react'
import UsedUpCheck from '@/components/used/used-upcheck'


export default function Text() {
    const datas = [
        { book_state: '近全新', price: '198', inventory: '10' },
        { book_state: '良好', price: '198', inventory: '10' },
        { book_state: '不良', price: '198', inventory: '10' },
      ]
    // const datas=['noUsedBook']
    const ISBN='9876445237'
     
  return (
   <>
   <div className='w-50'>
   <UsedList datas={datas} ISBN={ISBN}  ></UsedList>
   </div>
   <UsedUpCheck/>
   </>
  )
}
