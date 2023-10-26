import React, { useEffect, useState } from 'react'
import ww from '@/components/Leo/market_breadcrumbs.module.css'
import { useLeoContext } from '@/context/LeoContext'

export default function Bcs({ category_id, parent_category }) {
  const [data, setData] = useState({ rows: [] })
  const {
    setAsideButtonClick,
    setParentCategory,
    setCategoryId,
    setCategoryName,
  } = useLeoContext() //宣告LeoContext中的函式供此檔使用
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

  if (data.rows && data.rows.length > 0) {
    const [result] = data.rows
    const { parent_category_name, category_name } = result
    label = category_name
    parent_category = parent_category_name
  }
  //onClick事件
  const backhome = () => {
    window.location.replace('/product')
  }
  //親分類
  const parent = () => {
    console.log(typeof parent_category)
    setParentCategory(parent_category)
    setAsideButtonClick(true)
    window.location.replace('/product')
  }
  //子分類
  const now = () => {
    console.log(label, category_id)
    setCategoryId(category_id)
    setCategoryName(label)
    setAsideButtonClick(true)
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
            <button
              className={`${ww.p} ${ww.button}`}
              onClick={() => {
                parent(parent_category)
              }}
            >
              {parent_category}
            </button>
            {label !== '' && <p className={`${ww.p}`}>{'>'}</p>}
            <button
              className={`${ww.p} ${ww.button}`}
              onClick={() => {
                now(label, category_id)
              }}
            >
              {label}
            </button>
          </>
        )}
      </div>
    </>
  )
}
