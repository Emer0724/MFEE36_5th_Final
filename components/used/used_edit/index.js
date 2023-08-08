import React, { useState } from 'react'
import Image from 'next/image'
import { Select, Space } from 'antd'
import { BsCheckCircleFill } from 'react-icons/bs'
import Popup_window from '../popup_window'
import css from '@/components/used/used_edit/used_edit.module.css'

export default function UsedEdit({
  used_id,
  book_name,
  pic,
  ISBN,
  status_id,
  original_price,
  price,
  used_state,
}) {
  const [selectdatainfo, setselectdatainfo] = useState('')
  const [discoount, setdiscoount] = useState(1)
  const [edit, setedit] = useState(false)
  const [newstatus_id, setnewstatus_id] = useState(status_id)
  const [booknote, setbooknote] = useState('')
  const [newused_state, setnewused_state] = useState(used_state)
  const [usedprice, setusedprice] = useState(price)
  const [success, setsuccess] = useState(false)
  const [pop, setpop] = useState(false)
  const handleChange = (value) => {
    setnewstatus_id(value)
    if (value === 'A') {
      setselectdatainfo('膠膜未拆，無瑕疵。')
      setdiscoount(0.9)
      setusedprice(Math.ceil(original_price * 0.9))
    }
    if (value === 'B') {
      setselectdatainfo('未包膜，翻閱痕跡不明顯，如實體賣場陳列販售之書籍。')
      setdiscoount(0.8)
      setusedprice(Math.ceil(original_price * 0.8))
    }
    if (value === 'C') {
      setselectdatainfo('有使用痕跡，如摺角、碰撞等，不如新書潔白。')
      setdiscoount(0.7)
      setusedprice(Math.ceil(original_price * 0.7))
    }
    if (value === 'D') {
      setselectdatainfo('有明顯使用痕跡或黃褐色、黑斑等。')
      setdiscoount(0.6)
      setusedprice(Math.ceil(original_price * 0.6))
    }
    if (value === 'E') {
      setselectdatainfo('印刷褪色、模糊或其它更糟之書況。')
      setdiscoount(0.5)
      setusedprice(Math.ceil(original_price * 0.5))
    }
  }

  const handleEdit = (edit) => {
    setedit(!edit)
  }

  const handleChange2 = (value) => {
    setnewused_state(value)
  }
  const gotodb = async (
    used_id,
    newstatus_id,
    usedprice,
    newused_state,
    booknote
  ) => {
    console.log(newused_state)
    const data = {
      used_id: used_id,
      status_id: newstatus_id,
      price: usedprice,
      used_state: newused_state,
      book_note: booknote,
    }
    const gotodb1 = await fetch(`${process.env.WEB}/used/updisplay`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const gotodb2 = await gotodb1.json()
    console.log(gotodb2)
    if (gotodb2.changedRows === 1) {
      setedit(true)
      setsuccess(true)
      setpop(true)
      setTimeout(() => {
        setpop(false)
      }, [2000])
    }
  }
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${used_id}`}
            aria-expanded="true"
            aria-controls={`collapse${used_id}`}
          >
            {status_id || success ? (
              <>
                <BsCheckCircleFill
                  className="  color-tx-2  me-3 "
                  style={{ width: '60px', height: '60px' }}
                />
              </>
            ) : (
              ''
            )}
            <span className="pe-2">{used_id}</span>
            <span className={css.single_ellipsis}> {book_name}</span>
          </button>
        </h2>
        <div
          id={`collapse${used_id}`}
          className="accordion-collapse collapse "
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="d-flex justify-content-center  ">
              <Image
                src={`${process.env.WEB_IMG}/all_img/book_pic/${pic}`}
                width={200}
                height={200}
                alt="pic"
              ></Image>
            </div>

            <div className="text-center mt-3">ISBN:{ISBN}</div>
            <div className=" mt-3">
              書況:{' '}
              <Space wrap>
                <Select
                  disabled={!edit ? true : false}
                  defaultValue={status_id ? status_id : '請選擇書況'}
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: 'A',
                      label: '全新',
                    },
                    {
                      value: 'B',
                      label: '近全新',
                    },
                    {
                      value: 'C',
                      label: '良好',
                    },
                    {
                      value: 'D',
                      label: '普通',
                    },
                    {
                      value: 'E',
                      label: '差強人意',
                    },
                  ]}
                />
              </Space>
              <div className="mt-2">
                {' '}
                {selectdatainfo ? selectdatainfo : ''}
              </div>
              <div className="mt-2">
                原價:{original_price}
                <div className="mt-2">
                  二手書價:
                  <input
                    disabled={!edit ? true : false}
                    type="text"
                    size={5}
                    className="ms-2 ps-2"
                    onChange={(e) => setusedprice(e.target.value)}
                    value={usedprice ? usedprice : price}
                  ></input>
                </div>
              </div>
              <div className="mt-3">
                狀態:
                <Select
                  disabled={!edit ? true : false}
                  defaultValue={used_state ? used_state : '請選擇書況'}
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange2}
                  options={[
                    {
                      value: '1',
                      label: '待兌換',
                    },
                    {
                      value: '3',
                      label: '退回',
                    },
                    {
                      value: '4',
                      label: '已兌換',
                    },
                    {
                      value: '2',
                      label: '待收書',
                    },
                  ]}
                />
              </div>
              <div className="mt-2">
                書況備註:
                <input
                  type="text"
                  size={10}
                  className="ms-2"
                  disabled={!edit ? true : false}
                  onChange={(e) => setbooknote(e.target.value)}
                  value={booknote}
                ></input>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-secondary border-radius-5px mt-3 me-3"
                  onClick={() => handleEdit(edit)}
                >
                  {edit ? '取消' : '修改'}
                </button>
                <button
                  className="btn btn-secondary border-radius-5px mt-3"
                  disabled={!edit ? true : false}
                  onClick={() =>
                    gotodb(
                      used_id,
                      newstatus_id,
                      usedprice,
                      newused_state,
                      booknote
                    )
                  }
                >
                  送出
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {pop ? (
        <Popup_window text={'修改成功'} no_botton={true} icon={true} />
      ) : (
        ''
      )}
    </>
  )
}
