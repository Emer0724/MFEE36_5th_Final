import {useState} from 'react'
import s from "@/components/Cart_component/orderhistory/orderlist.module.css"
import Orderdetail from './orderdetail'

export default function orderlist() {
    const [openedIndexes, setOpenedIndexes] = useState([]);

  const opendetailhandle = (index) => {
    if (openedIndexes.includes(index)) {
      setOpenedIndexes(openedIndexes.filter((i) => i !== index));
    } else {
      setOpenedIndexes([...openedIndexes, index]);
    }
  };
    const createddates = ['2022.08.27','2022.08.28','2022.08.29']
    const totalprice = [2000,888,777]
    const waterlist = [111111,222222,333333]

    
  return (
    <div className={s.listcontain}>
       <div className={s.listrow}>
       {waterlist.map((v,i)=>{
        const price = totalprice[i]
        const dates = createddates[i]
        return(
            <>
                <div className={s.listcol}>
                        <div className={s.listnum}><h3>訂單編號</h3><h3>{v}</h3></div>
                    <div>
                        <div className={s.listdiv}>
                            <h4>訂單日期:</h4>
                            <h4>{dates}</h4>
                        </div>
                        <div className={s.listdiv}>
                            <h4>訂單總金額:</h4>
                            <h4>{price}元</h4>
                        </div>
                        <div className={s.listdiv}>
                            <h4>知音幣使用:</h4>
                            <h4>100元</h4>
                        </div>
                        <div className={s.listdiv}>
                            <h4>折價卷使用:</h4>
                            <h4>100元</h4>
                        </div>
                        <div className={s.listdiv}>
                            <h4>訂單狀態:</h4>
                            <h4>已送達</h4>
                        </div>
                    </div>
                    <div className={s.orderbtn}><div onClick={() => opendetailhandle(i)} className={s.orderbtntext}>訂單細節</div></div>
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