import React from 'react'
import ww from '@/components/Leo/market_breadcrumbs.module.css'

export default function Bcs(data) {
  const { category_id, label } = data
  let parent_category = ''
  if (
    category_id === '2' ||
    category_id === '3' ||
    category_id === '4' ||
    category_id === '5' ||
    category_id === '6'
  ) {
    parent_category = '文學小說'
  } else if (
    category_id === '8' ||
    category_id === '9' ||
    category_id === '10' ||
    category_id === '11' ||
    category_id === '12'
  ) {
    parent_category = '自然科普'
  } else if (
    category_id === '14' ||
    category_id === '15' ||
    category_id === '16' ||
    category_id === '17' ||
    category_id === '18'
  ) {
    parent_category = '飲食'
  } else if (
    category_id === '20' ||
    category_id === '21' ||
    category_id === '22' ||
    category_id === '23' ||
    category_id === '24'
  ) {
    parent_category = '生活風格'
  } else if (
    category_id === '26' ||
    category_id === '27' ||
    category_id === '28' ||
    category_id === '29' ||
    category_id === '30'
  ) {
    parent_category = '旅遊'
  } else if (
    category_id === '32' ||
    category_id === '33' ||
    category_id === '34' ||
    category_id === '35' ||
    category_id === '36'
  ) {
    parent_category = '藝術設計'
  } else if (
    category_id === '38' ||
    category_id === '39' ||
    category_id === '40' ||
    category_id === '41' ||
    category_id === '42'
  ) {
    parent_category = '電腦資訊'
  } else if (
    category_id === '44' ||
    category_id === '46' ||
    category_id === '47' ||
    category_id === '48' ||
    category_id === '49' ||
    category_id === '50' ||
    category_id === '52'
  ) {
    parent_category = '商業理財'
  } else if (
    category_id === '54' ||
    category_id === '55' ||
    category_id === '56' ||
    category_id === '57' ||
    category_id === '59' ||
    category_id === '61' ||
    category_id === '62' ||
    category_id === '63' ||
    category_id === '64' ||
    category_id === '65'
  ) {
    parent_category = '心理勵志'
  } else {
    // 如果都不符合上述條件，可以設定一個預設值
    parent_category = ' '
  }
  const backhome = () => {
    window.location.reload()
  }
  // console.log('麵包屑')
  // console.log(label)
  // console.log(category_id)
  // console.log(data)
  // console.log(parent_category)
  // console.log(typeof label)
  return (
    <>
      <div className={`${ww.wish}`}>
        <button className={`${ww.button}`} onClick={backhome}>
          商城主頁
        </button>
        {label !== 'undefined' && label !== undefined && (
          <>
            <p className={`${ww.p}`}>{'>'}</p>
            <p className={`${ww.p}`}>{parent_category}</p>
            <p className={`${ww.p}`}>{'>'}</p>
            <p className={`${ww.p}`}>{label}</p>
          </>
        )}
      </div>
    </>
  )
}
