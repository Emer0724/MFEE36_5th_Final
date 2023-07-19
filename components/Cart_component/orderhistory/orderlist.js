import {useState} from 'react'
import s from "@/components/Cart_component/orderhistory/orderlist.module.css"
import Orderdetail from './orderdetail'

export default function orderlist() {
    const [openedIndexes, setOpenedIndexes] = useState([]);

  const opendetailhandle = (index) => {
    if (openedIndexes.includes(index)) {
      // 如果订单已经展开，则从数组中移除
      setOpenedIndexes(openedIndexes.filter((i) => i !== index));
    } else {
      // 否则将其添加到数组中
      setOpenedIndexes([...openedIndexes, index]);
    }
  };
    const createddates = ['2022.08.27','2022.08.28','2022.08.29']
    const totalprice = [2000,888,777]
    const waterlist = [111111,222222,33333333]
  return (
    <div className={s.listcontain}>
       <div className={s.listrow}>
       {waterlist.map((v,i)=>{
        const price = totalprice[i]
        const dates = createddates[i]
        return(
            <>
                <div className={s.listcol}>
                    <div>
                        <div className={s.listnum}><h1>訂單編號:{v}</h1></div>
                        <div className={s.listdiv}>
                            <h3>訂單日期:</h3>
                            <h4>{dates}</h4>
                        </div>
                        <div className={s.listdiv}>
                            <h3>訂單總金額:</h3>
                            <h4>{price}</h4>
                        </div>
                        <div className={s.listdiv}>
                            <h3>訂單狀態:</h3>
                            <h4>已送達</h4>
                        </div>
                    </div>
                    <div><div onClick={() => opendetailhandle(i)}><h3>商品細節</h3></div></div>
                </div>
                <div className={s.detaillocation}>
                {openedIndexes.includes(i) && <Orderdetail />}
                </div>
            </>
        )
       })}
        
       </div>
    </div>
  )
}