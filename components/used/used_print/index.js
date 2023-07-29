import React, { useEffect } from 'react'
import css from '@/components/used/used_print/used_print.module.css'
import { Checkbox } from 'antd'
import { useState } from 'react'
import { Pagination } from 'antd'
import { check } from 'prettier'
// const used = [
//   { used: 1048, book_name: '重置人生：你還是16歲時的那個自己嗎？1' },
//   { used: 1047, book_name: '重置人生：你還是16歲時的那個自己嗎？2' },
//   { used: 1046, book_name: '重置人生：你還是16歲時的那個自己嗎？3' },
//   { used: 1049, book_name: '重置人生：你還是16歲時的那個自己嗎？4' },
//   { used: 1050, book_name: '重置人生：你還是16歲時的那個自己嗎？5' },
//   { used: 1051, book_name: '重置人生：你還是16歲時的那個自己嗎？6' },
//   { used: 1052, book_name: '重置人生：你還是16歲時的那個自己嗎？7' },
//   { used: 1053, book_name: '重置人生：你還是16歲時的那個自己嗎？8' },
//   { used: 1054, book_name: '重置人生：你還是16歲時的那個自己嗎？9' },
//   { used: 1055, book_name: '重置人生：你還是16歲時的那個自己嗎？10' },
//   { used: 1056, book_name: '重置人生：你還是16歲時的那個自己嗎？11' },
//   { used: 1057, book_name: '重置人生：你還是16歲時的那個自己嗎？12' },
// ]

export default function UsedPrint({usedInfo,printALL}) {
  const [checkedValues, setCheckedValues] = useState([])
  const [data, setdata] = useState(usedInfo)
  const [pagedata, setPagedate] = useState([])
  const [page1, setpage1] = useState(1)
  const [selectAll, setSelectAll] = useState(false)
  const [canprint,setcanprint]=useState(true)

  useEffect(() => {
    getcheck()
  }, [])
  useEffect(() => {
   printabout(data)
  }, [data])

  //初始化
  const getcheck = () => {
    const needata = data.map((v, i) => {
      return { ...v, checked: false }
    })
    // console.log(needata)
    setdata(needata)
    getpage(needata, 1, 5)
  }

  //點擊 checkbox 改變狀態
  const checkitem = (data, id, page, perPage) => {
    // const value = e.target.value
    
    const newdata = data.map((v, i) => {
      if (parseInt(v.used_id) === parseInt(id)) {
        //改變狀態
        return { ...v, checked: !v.checked }
      } else {
        return { ...v }
      }
    })
    setdata(newdata)

    getpage(newdata, page, perPage)
  }

//改變頁數
  const getpage = (data, page, pageSize) => {
    const pagedata = data.filter((v, i) => {
      if (i >= (page - 1) * pageSize && i < page * pageSize) {
        return v
      }
    })
    setPagedate(pagedata)
    setpage1(page)
  }
//設定全選
  const getAllitem = (selectAll, e, data, page1, pageSize) => {
    let newdata = []

    if (!selectAll) {
      newdata = data.map((v, i) => {
        return { ...v, checked: true }
      })
    } else if (selectAll) {
      newdata = data.map((v, i) => {
        return { ...v, checked: false }
      })
    }
    setSelectAll(!selectAll)
    setdata(newdata)
    getpage(newdata, page1, pageSize)
  }
  //是否列印
  const printabout=(data)=>{
const newdata=data.filter((v,i)=>{
  if(v.checked)return v
})
if(!newdata[0]) {
  // console.log(newdata[0])
  setcanprint(true)
}else{
  setcanprint(false)
}
  }
 

  return (
    // <div className={css.used_bg}>
    <div className={`${css.used_whitebg} used_display_chkbox`}>
      <div className="textp-32px d-flex justify-content-center used-search-text-20">二手書資訊</div>
      <table className="table used_table_layout ">
        <thead>
          <tr>
            <th className="text-center">
              <Checkbox
                onChange={(e) => getAllitem(selectAll, e, data, page1, 5)}
              />
            </th>
            <th className={`col-10  textp-20px ${css.used_text}`}>全選</th>
          </tr>
        </thead>
        <tbody>
          {pagedata.map((v, i) => {
            return (
              <tr key={v.used_id}>
                <th className="text-center">
                  <Checkbox
                    checked={v.checked}
                    value={v.used_id}
                    onClick={(e) => {
                      checkitem(data, e.target.value, page1, 5)
                  
                    }}
                  />
                </th>
                <td className={`textp-20px letter-spacing used_chk_msg_book_name ${css.used_text}` }>{v.book_name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-between mt-3 ">
        <Pagination
          defaultCurrent={1}
          total={usedInfo.length}
          defaultPageSize={5}
          onChange={(page, pageSize) => getpage(data, page, pageSize)}
        />
        <button className="textp-20px letter-spacing btn  color-bg-2 border-radius-5px color-tx-7 "
        onClick={()=>printALL(data)}
        disabled={canprint}

        >
          列印
          
        </button>
      </div>
    </div>
    // </div>
  )
}
