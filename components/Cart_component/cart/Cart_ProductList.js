import  { useEffect, useState} from 'react'
import Image from 'next/image'
import Trash from "@/assets/Nav_Image/trashcan.svg"
import styles from "@/components/Cart_component/cart/CartProductlist.module.css"
import { useRouter } from 'next/router';



export default function CurtProduct({data,handleDataChange}) {
  const [data1,setData1] = useState(data);
  console.log(data1);
  const member1 = data[0].member_id;
  const router = useRouter()
  const isCartPage = router.pathname === "/product/cart";

  useEffect(() => {
    setData1(data);
  }, [data]);

  const Countcut = {
    textAlign: "center",
    border: "1px solid var(--color6)",
    width:"30px",
    backgroundColor: "var(--bgc7)",
    borderRadius:"50%",
    padding:"3px"
  }
  const Countplus = {
    textAlign: "center",
    border: "1px solid var(--color6)",
    width:"30px",
    backgroundColor: "var(--bgc7)",
    borderRadius:"50%"
  }
  const Header1={
    textAlign:"center",
    fontSize:"var(--txp24)"
  }


  const addcount = async (ISBN, member) => {
    try {
      const res = await fetch(`${process.env.API_SERVER}/cart/cart/plus`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ISBN: ISBN, member }),
      });
      const result = await res.json();
      handleDataChange((prevData) =>
        prevData.map((item) =>
          item.ISBN === ISBN ? { ...item, count: item.count + 1 } : item
        )
      );
    } catch (error) {
      console.error("錯誤訊息:", error);
    }
  };
  
  const cutcount = async (ISBN, member) => {
    try {
      const res = await fetch(`${process.env.API_SERVER}/cart/cart/cut`, {
        method: "PUT",
        body: JSON.stringify({ ISBN, member }),
        headers: { "Content-Type": "application/json" },
      });
      const resultcut = await res.json();
      if (resultcut.message === '商品已刪除') {
        handleDataChange((prevData) => prevData.filter((item) => item.ISBN !== ISBN));
      } 
      else {
        handleDataChange((prevData) =>
          prevData.map((item) =>
            item.ISBN === ISBN ? { ...item, count: item.count - 1 } : item
          )
        );
      }
    } catch (error) {
      console.error("錯誤訊息:", error);
    }
  }
  
  const deleteitem = (ISBN,status_id, member) =>{
    fetch(`${process.env.API_SERVER}/cart/cart/delete`,{
      method:"POST",
      body:JSON.stringify({ISBN:ISBN,status_id:status_id,member}),
      headers: { "Content-Type": "application/json" }
    })
    .then((r)=>r.json())
    .then((resultdel)=>{
      if(resultdel.message === "Item deleted from cart."){
        handleDataChange((prevData)=>(
          prevData.filter((item) => item.ISBN !== ISBN || item.status_id !== status_id)
        ))
      }
    })
    .catch((error) => {
      console.error("錯誤訊息:", error);
    });
  }
  const limitText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };




  const PLheader = ["產品","書名","ISBN","價格","數量","小計","刪除"]
  return (
  <>
    <table className={styles.tablecontain}>
      <thead className={styles.tablehead}>
        <tr>
          {
          PLheader.map((v,i)=>{
          return(
              <th key={i}  style={Header1}>{v}</th>
              )
          })}
          </tr>  
      </thead> 
      <tbody>
      {data1.map((v,i)=>{
        const truncatedBookName = limitText(v.book_name,10);
          return(
          <tr key={i} className={styles.Prodeucttr}>
              <td className={styles.ProdeuctBlock}><Image className={styles.imagebook} src={`/all_img/book_pic/${encodeURIComponent(v.pic)}`} width={100} height={100} alt='icon'/></td>
              <td className={styles.ProdeuctBlock}>{truncatedBookName}</td>
              <td className={styles.ProdeuctBlock}>{v.ISBN}</td>
              {v.status_id!==null
              ?
              <td className={styles.ProdeuctBlock}>二手價<span className={styles.usedprice}>${v.usedprice}</span></td>
              :
              <td className={styles.ProdeuctBlock}><span className={styles.oneprice}>{v.bookprice}</span></td>}
              <td>
              {v.status_id!==null
              ?
              <div className={styles.CountBlock}>
                <div className={styles.Countvalue1}>{v.count}</div>
              </div>
              :
              <div className={styles.CountBlock}>
                <button style={Countcut} className={styles.Countcut} onClick={() => cutcount(v.ISBN,member1)}>-</button>
                <div className={styles.Countvalue}>{v.count}</div>
                <button style={Countplus} className={styles.Countplus} onClick={() => addcount(v.ISBN,member1)}>+</button>
              </div>
              }
              </td> 
              <td className={styles.ProdeuctBlock}>
              {
                v.status_id!==null
                ?
                <span className={styles.totalprice}>{v.usedprice*v.count}</span>
                :
                <span className={styles.totalprice}>{v.bookprice*v.count}</span>}
              </td>
              <td className={styles.ProdeuctBlock}><button className={styles.trashbtn}  onClick={() => deleteitem(v.ISBN,v.status_id,member1)}><Image src={Trash} width={40} height={40} alt='icon'/></button></td>
          </tr>)
      })}
      </tbody>
    </table>
    {data1.map((v,i)=>{
      const truncatedBookName = limitText(v.book_name,15);
        return(
          <div className={styles.CProductlist} key={i}>
            <div className={styles.CProductlist1} >
              <div><Image src={`/all_img/book_pic/${encodeURIComponent(v.pic)}`} alt='icon' width={100} height={80}/></div>
              <div className={styles.CProductlist2}>
                <h6 className={styles.Clisttext}>{truncatedBookName}</h6>
                <h6 className={styles.Clisttext}>{v.ISBN}</h6>
                {v.status_id!==null
                 ?
                <div className={styles.CountBlock}>
                    <div className={styles.Countvalue}>{v.count}</div>
                </div>
                :
                <div className={styles.CountBlock}>
                    <button  className={styles.Countcut} onClick={() => cutcount(v.ISBN,member1)} >-</button>
                    <div className={styles.Countvalue}>{v.count}</div>
                    <button  className={styles.Countplus} onClick={() => addcount(v.ISBN,member1)}>+</button>
                </div>
                }
              </div>
              <div className={styles.CProductlist3}>
                <button className={styles.trashbtn} onClick={() => deleteitem(v.ISBN,v.status_id,member1)}><Image src={Trash} width={30} height={30} alt='icon'/></button>
              </div>
            </div>
            <div className={styles.CPtotaltext}>
              <p>{v.status_id!==null
              ?
              <span className={styles.totalprice}>{v.usedprice*v.count}</span>
              :
              <span className={styles.totalprice}>{v.bookprice*v.count}</span>
              }
              </p>
            </div>
          </div>
        )
    })}
  </>
  )
}
