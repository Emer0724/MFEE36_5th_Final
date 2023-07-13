import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'next/image'
import Trash from "@/assets/Nav_Image/trashcan.svg"
import styles from "@/components/Cart_component/cart/CartProductlist.module.css"
import fake from "@/assets/Cart_Image/fake.svg"



export default function CurtProduct({display1}) {



  const Countcut = {
    textAlign: "center",
    border: "1px solid black",
    width:"10%",
    backgroundColor: "var(--bgc7)",
    display:display1
  }
  const Countplus = {
    textAlign: "center",
    border: "1px solid black",
    width:"10%",
    backgroundColor: "var(--bgc7)",
    display:display1
  }

  const PLheader = ["產品","ISBN","價格","數量","小計","刪除"]
  
  
const product = [
        {Productname:"書不起",
          ISBN:98997203,
          img:123,
          price:199,
          count:1,
        },
       {  Productname:"書不起1",
          ISBN:98997203,
          img:123,
          price:199,
          count:1,
        } ,
        {Productname:"書不起2",
          ISBN:98997203,
          img:123,
          price:199,
          count:1,
        },
        {
          Productname:"書不起3",
          ISBN:98997203,
          img:123,
          price:199,
          count:1,
      }
    ]
  return (
  <>
    <Table className={styles.tablecontain}>
      <thead>
        <tr>
          {PLheader.map((v,i)=>{
          return(   
              <th key={i}  style={{textAlign: 'center'}}>{v}</th>
              )
          })}
          </tr>  
      </thead> 
      <tbody>
    {product.map((v,i)=>{
        return(
        <tr key={i} className={styles.Prodeucttr}>
            <td className={styles.ProdeuctBlock}><Image src={fake} alt='icon'/>{v.Productname}</td>
            <td className={styles.ProdeuctBlock}>{v.ISBN}</td>
            <td className={styles.ProdeuctBlock}>{v.price}</td>
            <td><div className={styles.CountBlock}>
                  <button style={Countcut} className={styles.Countcut}>-</button>
                  <div className={styles.Countvalue}>{v.count}</div>
                  <button style={Countplus} className={styles.Countplus}>+</button>
                </div>
            </td>
            <td className={styles.ProdeuctBlock}>${v.price*v.count}</td>
            <td className={styles.ProdeuctBlock}><Image src={Trash} width={40} height={40} alt='icon'/></td>
        </tr>)
    })}
    </tbody>
    </Table>
    {product.map((v,i)=>{
        return(
          <div>
            <div className={styles.CProductlist1} key={i}>
              <div><Image src={fake} alt='icon' width={100} height={80}/></div>
              <div className={styles.CProductlist2}>
                <h6 className={styles.Clisttext}>{v.Productname}</h6>
                <h6 className={styles.Clisttext}>{v.ISBN}</h6>
                <div className={styles.CountBlock}>
                    <button  className={styles.Countcut}>-</button>
                    <div className={styles.Countvalue}>{v.count}</div>
                    <button  className={styles.Countplus}>+</button>
                </div>
              </div>
              <div className={styles.CProductlist3}>
                <Image src={Trash} width={30} height={30} alt='icon'/>
                
              </div>
            </div>
            <div className={styles.CPtotaltext}>
              <p >${v.price*v.count}</p>
            </div>
          </div>

        )
    })}
   
  </>
  )
}
