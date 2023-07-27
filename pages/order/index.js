import CartTitle from '@/components/Cart_component/Cart_title'
import OrderState from '@/components/Cart_component/order/order_state'
import OrderTotalPrice from '@/components/Cart_component/order/totalprice'
import React, { useState,useEffect } from 'react'
import styles from '@/pages/order/Orderindex.module.css'
import loc from '@/data/address.json'



export default function checkForm() {
  const [windowWidth, setWindowWidth] = useState(null);
  const [shippingMethod, setShippingMethod] = useState("宅配到家+100");
  const [paymentMethod, setPaymentMethod] = useState("linepay");
  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [recipientstore, setRecipientstore] = useState("");
  const [shippingCost, setShippingCost] = useState(100);
  const [areaOptions, setAreaOptions] = useState([]);


  
 const addresscity=loc.map((v)=>v.CityName)
 const city = addresscity.map(
  (v, i) => {return(<option value={v} key={i}>{v}</option>)
 });
 const handleCityChange = (event) => {
  // 根據所選的縣市，更新區域的選項
  const selectedCity = event.target.value;
  const selectedCityData = loc.find((v) => v.CityName === selectedCity);
  const areaOptions = selectedCityData.AreaList.map((area) => (
    <option value={area.AreaName} key={area.AreaName}>
      {area.AreaName}
    </option>
  ));
  setAreaOptions(areaOptions);
  setRecipientAddress(selectedCity);
};
const handleAreaChange = (event) => {
  // 根據所選的區域，更新路名的選項
  const selectedArea = event.target.value;
  const selectedCityData = loc.find((v) => v.CityName === recipientAddress.city);
  const selectedAreaData = selectedCityData.AreaList.find(
    (area) => area.ZipCode === selectedArea
  );
  setRecipientAddress((prevAddress) => ({
    ...prevAddress+selectedArea,
  }));
};


  const shippingMethodHandle = (event) => {
    if(shippingMethod === "宅配到家+100"){
      setShippingCost(60);
      setShippingMethod(event.target.value);
    }
    else
    {setShippingCost(100);
      setShippingMethod(event.target.value)
    };
  }

  const paymentMethodHandle = (event) => {
    setPaymentMethod(event.target.value);
  };
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      shippingMethod,
      paymentMethod,
      recipientName,
      recipientPhone,
      recipientAddress,
      recipientstore,
    };
    console.log(formData);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
  const Formstyles1 ={
    display:"flex",
    flexDirection: "column",
    justifyContent:"space-around",
    alignItems:"center",
    margin:"25px"
  }
  const blockstyle1 = {
    display:"flex",
    flexDirection: "column",
    justifyContent:"space-around",
    alignItems:"center",
    marginBottom:"100px",
  }
  const labelstyle1 = {
    fontSize:"20px"
  }
  const inputstyle = {
    width:"350px",
    height:"60px",
    borderRadius:"8px",
    border:"1px solid #52796F",
    background:"#EEEEEE",
    padding:"5px",
    fontSize:"20px"
  }
  const blockstyle = {
    display:"flex",
    flexDirection: "column",
    justifyContent:"space-around",
    alignItems:"center",
    marginBottom:"100px",
  }
  const labelstyle = {
  fontSize:"20px"
  }
  const selectstyle = {
    width:"350px",
    height:"60px",
    borderRadius:"8px",
    border:"1px solid #52796F"
  }
  const selectstyle1 = {
    width:"150px",
    height:"60px",
    borderRadius:"8px",
    border:"1px solid #52796F"
  }
  const buttonStyle2 = {
    backgroundColor: '#52796F',
    width: windowWidth && windowWidth > 600 ? 200:150,
    height: 50,
    borderRadius: 5,
    color: 'white',
    fontSize:windowWidth && windowWidth > 600?"20px":"16px",
  }
  const pos1 = {
    textAlign:"center",
    marginBottom:"30px"
  }
  const address = {
    display:"flex",
    flexWrap:"wrap",
    gap:"25px"

  }
  
  return (
    <>
        <OrderState/>
        <CartTitle className={styles.title} titlecontent={"選擇喜歡的寄送方式和付款方式吧"}/>
          <div className={styles.checkcontain}>
            <form style={Formstyles1} onSubmit={handleFormSubmit}> 
                <div style={blockstyle}>
                  <label style={labelstyle}>寄件方式</label>
                  <select style={selectstyle} onChange={shippingMethodHandle}>
                      <option>宅配到家+100</option>
                      <option>便利商店+60</option>
                  </select>
                </div> 
                <div style={blockstyle}>
                  <label style={labelstyle}>付款方式</label>
                  <select style={selectstyle} onChange={paymentMethodHandle}>
                      <option>linepay</option>
                      <option>信用卡付款</option>
                  </select>
                </div> 
                <div style={blockstyle1}>
                    <label style={labelstyle1}>收件人姓名</label>
                    <input type="text" style={inputstyle} placeholder="請輸入姓名" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} pattern="[a-zA-Z\u4e00-\u9fa5\s]+"   required/>
                </div>
                <div style={blockstyle1}>
                    <label style={labelstyle1}>收件人電話</label>
                    <input type="text" style={inputstyle} placeholder="請輸入電話" value={recipientPhone} onChange={(e) => setRecipientPhone(e.target.value)} pattern="[[0-9]{10}"  required/>
                </div>
                {shippingMethod === "宅配到家+100" && (
                <div style={blockstyle1}>
                  <label style={labelstyle1}>收件人地址</label>
                        <div style={address}>
                          <select style={selectstyle1} value={recipientAddress.city} onChange={handleCityChange}>
                            {city}
                          </select>
                          <select style={selectstyle1} value={recipientAddress.area} onChange={handleAreaChange}>
                            {areaOptions}
                          </select>
                          <input
                            type="text"
                            placeholder="請輸入路名鄉鎮巷號"
                            value={recipientAddress.address}
                            onChange={(e) =>
                              setRecipientAddress((prevAddress) => ({
                                ...prevAddress,
                                address: e.target.value,
                              }))
                            }
                            style={inputstyle}
                            required
                          />
                        </div>
                </div>
             )}
              {shippingMethod === "便利商店+60" && (
                <div style={blockstyle1}>
                    <label style={labelstyle1}>門市選擇</label>
                    <input type="text" style={inputstyle} value={recipientstore} onChange={(e) => setRecipientstore(e.target.value)}  required/>
                  </div>
              )}
              <button style={buttonStyle2} type={"submit"}>下一步，確認商品</button>
            </form>

          {windowWidth>600 
          ?
           <div>
          <OrderTotalPrice  border1={"1px solid #52796F"} shippingCost={shippingCost}/>
          </div>
          :
          ""
          }
        </div>
    </>
  )
}
