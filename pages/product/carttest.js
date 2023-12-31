"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import PopUp from "@/components/common/popup/popup";
import Loading from "@/components/common/loading";

export default function Products() {
  const router = useRouter();
  const [showI,setShowI] = useState(false)
  const [member,setMember1] = useState(0)
  const [data, setData] = useState({
    redirect: "",
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  });
  const usp = new URLSearchParams(router.asPath.split('?')[1]);
  const [keyword, setKeyword] = useState(usp.get('keyword') || "");

  useEffect(() => {
    const usp = new URLSearchParams(router.query);
    fetch(`${process.env.API_SERVER}/cart/test1?${usp.toString()}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
         // 如果已經有formData，就將其解析並設定為表單狀態
      const storedData = localStorage.getItem('auth');
      const formData = JSON.parse(storedData);
      setMember1(formData.member_id);
      });
      
  }, [router.query]);

//以下為購物車
  const addToCart = (ISBN,member) => {
    const storedData = localStorage.getItem('auth');
    if(!storedData){
      router.push(`../member/login?redirect=${encodeURIComponent(router.asPath)}`);
      console.log(router.asPath);
    }
    {
      fetch(`${process.env.API_SERVER}/cart/addToCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ISBN: ISBN,member:member }),
      })
          .then((res) => res.json())
          .then((data) => {
            setShowI(true);
          })
          .catch((error) => {
            console.error("錯誤訊息:", error);
          })
        }
  }

  return (
    <>
      <Head>
        <title>abcd</title>
      </Head>
     <Loading/>

      <div className="container">
        <div className="row">
          <div className="col">
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                router.push(`?keyword=` + e.currentTarget.keyword.value);
              }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="keyword"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.currentTarget.value);
                }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>書名</th>
                  <th>作者</th>
                  <th>出版社</th>
                  <th>價格</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((i) => (
                  <tr key={i.ISBN}>
                    <td>{i.ISBN}</td>
                    <td>{i.book_name}</td>
                    <td>{i.author}</td>
                    <td>{i.publish}</td>
                    <td>{i.price}</td>
                    <td><button onClick={() => addToCart(i.ISBN,member)}>加入購物車</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
              <ul className="pagination">
                {Array(5)
                  .fill(1)
                  .map((v, i) => {
                    const p = data.page - 2 + i;
                    console.log(p);
                    const query = { ...router.query };
                    console.log(query);
                    if (p < 1 || p > data.totalPages) return;
                    query.page = p;
                    return (
                      <li
                        className={
                          `page-item ` + (p === data.page ? "active" : "")
                        }
                        key={p}
                      >
                        <Link
                          className="page-link"
                          href={"?" + new URLSearchParams(query).toString()}
                          
                        >
                          {p}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </nav>
    </>
  );
}