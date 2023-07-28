import React, { useEffect, useState } from 'react'
import MemberNav from '@/components/common/member-nav/member-nav'
import UsedTdUncomfirmed from '@/components/used/chk-msg/used-td-uncomfirmed'
import UsedTdExchange from '@/components/used/chk-msg/used-td-exchange'
import UsedTdReturn from '@/components/used/chk-msg/used-td-return'
import UsedTdUnreceive from '@/components/used/chk-msg/used-td-unreceive'
import Link from 'next/link'
import Member_info from '@/components/Leo/member/member_info'
import MemberBreadcrumbs_2 from '@/components/Leo/member/member_breadcrumbs-2'
import { useRouter } from 'next/router'
import UsedTdGiveUpReturn from '@/components/used/chk-msg/used-td-GiveUpReturn'
import Head from 'next/head'
import UsedPrint from '@/components/used/used_print'

//暫定 1.待兌換 2.代收書 3.退回 4.已兌換
// const datas = [
//   {
//     used_id: 1,
//     ISBN: 9789864016433,
//     book_name: '作者不詳：推理作家的讀本 (上卷)(下卷）',
//     book_state: 1,
//     price: '500',
//   },
//   { used_id: 2, ISBN: 9789577417039, book_name: '第三時效', book_state: 2 },
//   {
//     used_id: 3,
//     ISBN: 9786263565616,
//     book_name: '二度遭到殺害的她',
//     book_state: 3,
//     price: '500',
//   },
//   {
//     used_id: 4,
//     ISBN: 9786263565616,
//     book_name: '二度遭到殺害的她',
//     book_state: 4,
//     price: '500',
//   },
// ]

export default function ChangebookMessage() {
  const router = useRouter()
  const [usedlist, setusedlist] = useState(false)
  const [data, setData] = useState({
    redirect: '',

    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
    error: '',
  })
  // const [totalpage, setTotalpage] = useState(1)
  // const [nowpage, setnowpage] = useState(1)
  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      router.push('/member/login')
    } else {
      getData()
    }
  }, [router.query])
  console.log(router.query)
  const getData = async () => {
    const authToken = JSON.parse(localStorage.getItem('auth')).token

    const usp = new URLSearchParams(router.query)

    const getdata1 = await fetch(
      `${process.env.API_SERVER}/used/change/item/?${usp.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    )
    const getdata2 = await getdata1.json()

    setData(getdata2)
  }
  const getUsedInfo = () => {
    setusedlist(true)
  }
  //取消二手書資訊框
  const closeItem = (e) => {
    const usedUpCheckElement = document.querySelector('.used_display_chkbox')
    if (!usedUpCheckElement.contains(e.target)) {
      setusedlist(false)
    }
  }

  return (
    <>
      <Head>
        <title>Book書易</title>
      </Head>
      <Member_info />
      <MemberNav />
      <MemberBreadcrumbs_2 />
      <div className="px-2 mt-3">
        <div className="dropdown pb-3 d-flex justify-content-between ">
          <button
            className="btn btn-success dropdown-toggle letter-spacing border-radius-5px textp-20px used-search-text-16"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            狀態篩選
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link className="dropdown-item" href="?book_state=all">
                ALL
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="?book_state=1">
                待確認
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="?book_state=2">
                待收書
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="?book_state=3">
                退回
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="?book_state=4">
                已兌換
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-success  letter-spacing border-radius-5px textp-20px used-search-text-16 "
            onClick={getUsedInfo}
          >
            列印二手書資訊
          </button>
        </div>
        {data.error === 'no_data' ? (
          <div className="text-center fs-3">目前沒有資料</div>
        ) : (
          <>
            {' '}
            <table
              className="table used_table_layout  "
              style={{ border: '6px solid #84A98C' }}
            >
              <thead>
                <tr>
                  <th
                    className="text-center col-2 textp-20px fw-bold used-search-text-16"
                    style={{ background: '#84A98C' }}
                  >
                    序號
                  </th>
                  <th
                    className="text-center col-6 textp-20px fw-bold used-search-text-16"
                    style={{ background: '#84A98C' }}
                  >
                    二手書
                  </th>
                  <th
                    className="text-center col-2 textp-20px fw-bold used-search-text-16"
                    style={{ background: '#84A98C' }}
                  >
                    狀態
                  </th>
                  <th
                    className="text-center col-2 textp-20px fw-bold used-search-text-16"
                    style={{ background: '#84A98C' }}
                  >
                    詳細資料
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((v, i) => {
                  const { used_id, ISBN, book_name, used_state, price } = v
                  let snumber = i + 1
                  if (used_state === '1') {
                    //待確認
                    return (
                      <UsedTdUncomfirmed
                        snumber={snumber}
                        key={used_id}
                        used_id={used_id}
                        ISBN={ISBN}
                        book_name={book_name}
                        used_state={used_state}
                      />
                    )
                  } else if (used_state === '2') {
                    //待收書
                    return (
                      <UsedTdUnreceive
                        snumber={snumber}
                        key={used_id}
                        used_id={used_id}
                        ISBN={ISBN}
                        book_name={book_name}
                        used_state={used_state}
                      />
                    )
                  } else if (used_state === '3') {
                    //退回
                    return (
                      <UsedTdReturn
                        snumber={snumber}
                        key={used_id}
                        used_id={used_id}
                        ISBN={ISBN}
                        book_name={book_name}
                        used_state={used_state}
                      />
                    )
                  } else if (used_state === '4') {
                    //已兌換
                    return (
                      <UsedTdExchange
                        snumber={snumber}
                        key={used_id}
                        used_id={used_id}
                        ISBN={ISBN}
                        book_name={book_name}
                        used_state={used_state}
                        price={price}
                      />
                    )
                  } else if (used_state === '5') {
                    //取消退回
                    return (
                      <UsedTdGiveUpReturn
                        snumber={snumber}
                        key={used_id}
                        used_id={used_id}
                        ISBN={ISBN}
                        book_name={book_name}
                        used_state={used_state}
                        price={price}
                      />
                    )
                  }
                })}
              </tbody>
            </table>
            <div className="d-flex justify-content-center mt-5 ">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="?page=1"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  {Array(5)
                    .fill(1)
                    .map((v, i) => {
                      let p
                      if (data.page === 1) {
                        p = data.page + i
                      } else if (data.page === 2) {
                        p = data.page - 1 + i
                      } else if (data.page === data.totalPages) {
                        p = data.page - 4 + i
                      } else if (data.page === data.totalPages - 1) {
                        p = data.page - 3 + i
                      } else {
                        p = data.page - 2 + i
                      }

                      const query = { ...router.query }

                      if (p < 1 || p > data.totalPages) return
                      query.page = p
                      return (
                        <li
                          className={`page-item ${
                            p === data.page ? 'active' : ''
                          }`}
                          key={p}
                        >
                          <Link
                            className="page-link"
                            href={'?' + new URLSearchParams(query).toString()}
                          >
                            {p}
                          </Link>
                        </li>
                      )
                    })}

                  <li className="page-item">
                    <a
                      className="page-link"
                      href={`?page=${data.totalPages}`}
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        )}

        <div className="used_rwd_botton" style={{ height: '300px' }}></div>
      </div>
      {usedlist ? (
        <div
          className="used_display_UsedUpCheck"
          role="button"
          tabIndex={0}
          onClick={
            closeItem
            // 在這裡處理點擊事件
          }
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              closeItem

              // 在這裡處理回車鍵或空白鍵事件，模擬點擊效果
            }
          }}
          // 此處可以添加其他滑鼠或觸控事件處理程序
        >
          <UsedPrint />
        </div>
      ) : (
        ''
      )}
    </>
  )
}
