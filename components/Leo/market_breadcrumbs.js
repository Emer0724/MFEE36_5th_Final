import React, { useEffect, useState } from 'react'
import ww from '@/components/Leo/market_breadcrumbs.module.css'

export default function Bcs({ category_id }) {
  const [data, setData] = useState({ rows: [] })

  useEffect(() => {
    if (category_id) {
      fetch(`${process.env.API_SERVER}/market/bcs?category_id=${category_id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('後端回傳結果:', data)
          setData(data)
        })
        .catch((err) => {
          console.error('資料讀取錯誤', err)
        })
    }
  }, [category_id])

  let label = ''
  let parent_category = ''

  if (data.rows && data.rows.length > 0) {
    const [result] = data.rows
    // console.log(result)
    const { parent_category_name, category_name } = result
    // console.log(parent_category_name)
    label = category_name
    parent_category = parent_category_name
  }

  //onClick事件
  const backhome = () => {
    window.location.replace('/product')
  }
  //親分類
  const parentCategory = () => {
    window.location.replace('/product')
  }
  //子分類
  const now = () => {
    window.location.replace('/product')
  }
  return (
    <>
      <div className={`${ww.wish}`}>
        <button className={`${ww.button}`} onClick={backhome}>
          商城主頁
        </button>
        {label !== 'undefined' && label !== undefined && (
          <>
            {label !== '' && <p className={`${ww.p}`}>{'>'}</p>}
            <button className={`${ww.p} ${ww.button}`} onClick={parentCategory}>
              {parent_category}
            </button>
            {label !== '' && <p className={`${ww.p}`}>{'>'}</p>}
            <button className={`${ww.p} ${ww.button}`} onClick={backhome}>
              {label}
            </button>
          </>
        )}
      </div>
    </>
  )
}
