import React from 'react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import Image from 'next/image'
import book_1 from '@/assets/used-svg/book_1.svg'
import book_2 from '@/assets/used-svg/book_2.svg'
import book_3 from '@/assets/used-svg/book_3.svg'
import Link from 'next/link'

export default function UsedBook() {
  return (
    <>
      <div
        style={{
          backgroundColor: '#EEEEEE',
        }}
      >
        <Navbar />
        <div className="container-fliud">
          {/* section1 */}
          <div className="d-flex justify-content-center used-index-rwd-section1 ">
            <div className="d-flex used-index-rwd-section1-text  ">
              <div className="used-index-img"></div>
              <div className="textp-40px fw-bold used-index-big-text color-tx-3  ">
                關於二手書
              </div>
            </div>
            <div className="w-50 mx-5 px-5  d-flex flex-column justify-content-center used-index-rwd-section1-item ">
              <div className="d-flex  w-100 border-bottom border-dark-subtle border-5  used-index-rwd-section1-svg">
                <Image src={book_1} className="used-index-icon" alt="book_1" />
                <div className="d-flex flex-column justify-content-center mx-5 w-100">
                  <div className="textp-32px fw-bold letter-spacing">
                    買二手書
                  </div>
                  <div className="textp-20px fw-bold mt-1 letter-spacing">
                    統一書況評級、管理，確認書的品質，請放心購買
                  </div>

                  <div className="textp-16px fw-bold  mt-1 ms-auto letter-spacing ">
                    <Link href="#" className="color-tx-8">
                      進入商城
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-flex  w-100 border-bottom border-dark-subtle border-5 mt-3 used-index-rwd-section1-svg ">
                <Image src={book_2} className="used-index-icon " alt="book_2" />
                <div className="d-flex flex-column justify-content-center mx-5 w-100">
                  <div className="textp-32px fw-bold letter-spacing">
                    賣二手書
                  </div>
                  <div className="textp-20px fw-bold mt-1 letter-spacing">
                    簡易賣書流程，幫舊書找新家
                  </div>

                  <div className="textp-16px fw-bold  mt-1 ms-auto letter-spacing ">
                    <Link href="#process" className="color-tx-8">
                      {' '}
                      看更多
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-flex  w-100 border-bottom border-dark-subtle border-5 mt-3 used-index-rwd-section1-svg">
                <Image
                  src={book_3}
                  className="used-index-icon"
                  alt="book_3_test"
                />
                <div className="d-flex flex-column justify-content-center mx-5 w-100">
                  <div className="textp-32px fw-bold letter-spacing">
                    以書易書
                  </div>
                  <div className="textp-20px fw-bold mt-1 letter-spacing">
                    賣舊書換代幣，再購買書，一個書的循環。
                  </div>

                  <div className="textp-16px fw-bold  mt-1 ms-auto letter-spacing ">
                    <Link href="#" className="color-tx-8">
                      看更多
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section1--end */}
          <div className="w-100 py-5 d-flex justify-content-center my-5 ">
            <button className="btn  color-bg-4 fw-bold border-radius-5px  letter-spacing textp-28px px-3 ">
              我要賣書
            </button>
          </div>
          {/* section2 */}
          <div
            className="textp-28px fw-bold color-tx-5 py-5  text-center color-bg-6"
            id="process"
          >
            簡易流程，幫舊書找新歸宿
          </div>
          <div className="container-fliuid  color-bg-6 d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
              {/* <div className=" w-100 d-flex justify-content-center color-bg-6 py-5"> */}
              {/* <div className="d-flex   justify-content-around w-75"> */}
              {/*circle*/}
              <div className="col-6 col-lg-3 used-index-circle mx-5 my-5">
                <div className="used-index-circle-number">1</div>
                <Image
                  alt="expertise.png"
                  src="/used-img/expertise.png"
                  className="used-index-circle-img"
                  width={150}
                  height={150}
                />
                <div className="used-index-circle-text1 textp-32px letter-spacing fw-bold ">
                  會員認證
                </div>
                <div className="used-index-circle-text2 textp-16px letter-spacing fw-bold ">
                  填寫會員資訊，完成會員認證
                </div>
              </div>
              {/*circle---end*/}
              {/*circle*/}
              <div className=" col-6 col-lg-3 used-index-circle mx-5 my-5">
                <div className="used-index-circle-number">2</div>
                <Image
                  alt="bar-code.png"
                  src="/used-img/bar-code.png"
                  className="used-index-circle-img"
                  width={150}
                  height={140}
                />
                <div className="used-index-circle-text1 textp-32px letter-spacing fw-bold ">
                  輸入ISBN
                </div>
                <div className="used-index-circle-text2 textp-16px letter-spacing fw-bold ">
                  填寫將賣出的ISBN
                </div>
              </div>
              {/*circle---end*/}
              {/*circle*/}
              <div className=" col-6 col-lg-3 used-index-circle mx-5 my-5">
                <div className="used-index-circle-number">3</div>
                <Image
                  alt="close.png"
                  src="/used-img/close.png"
                  className="used-index-circle-img"
                  width={150}
                  height={150}
                />
                <div className="used-index-circle-text1 textp-32px letter-spacing fw-bold ">
                  寄出二手書
                </div>
                <div className="used-index-circle-text2 textp-16px letter-spacing fw-bold ">
                  寄出該二手書，待小幫手審核書況，
                </div>
              </div>
              {/*circle---end*/}
              {/*circle*/}
              <div className=" col-6 col-lg-3 used-index-circle mx-5 my-5">
                <div className="used-index-circle-number">4</div>
                <Image
                  alt="success.png"
                  src="/used-img/success.png"
                  className="used-index-circle-img"
                  width={150}
                  height={150}
                />
                <div className="used-index-circle-text1 textp-32px letter-spacing fw-bold ">
                  兌換知音幣
                </div>
                <div className="used-index-circle-text2 textp-16px letter-spacing fw-bold ">
                  完成審核後，請確認資料及售價，沒有問題可以兌換囉~
                </div>
              </div>
              {/*circle---end*/}
              {/* </div> //這裡 */}
              {/* </div>// */}
            </div>
          </div>
          {/*section2----end*/}
          {/*section3*/}
          <div
            className="textp-28px fw-bold color-tx-5 mx-5 my-5 py-5 px-5 text-center"
            id="process"
          >
            二手書疑難雜症看這裡
          </div>
          {/*手風琴*/}
          <div className="w-100 d-flex justify-content-center mb-5">
            <div
              className="accordion accordion-flush w-75"
              id="accordionFlushExample"
            >
              <div className="accordion-item ">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button  collapsed textp-20px letter-spacing"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    書況等級如何判定?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <pre className="textp-20px letter-spacing used-index-Accordion-pre d-flex justify-content-center ">
                      {`
                    為了讓讀者們買到符合需求的二手書，小幫手們在收到大家寄來的二手書後，會依下列標準做書況標定：
                    A.全新：膠膜未拆，無瑕疵。
                    B.近全新：未包膜，翻閱痕跡不明顯，如實體賣場陳列販售之書籍。
                    C.良好：有使用痕跡，如摺角、碰撞等，不如新書潔白。
                    D.普通：有明顯使用痕跡或黃褐色、黑斑等。
                    E.差強人意：印刷褪色、模糊或其它更糟之書況。`}
                    </pre>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed textp-20px letter-spacing"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    不待售的二手書有哪些?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <pre className="textp-20px letter-spacing used-index-Accordion-pre d-flex justify-content-center ">
                      {`
                      注意！以下為BOOK書易不賣的二手書，寄書前要特別注意唷：
                    1.中文雜誌、歐美雜誌，非書籍類商品，如卡牌，影音光碟等。
                    2.無定價、無出版日期、無ISBN、無版權頁之二手書。
                    3.來自租書店及漂書單位或蓋租書店章、政府機關學校館藏章、結緣章、非賣品/不得轉贈(售)章之二手書。
                    4.高中/國中/國小教科書、參考書、兒童教具類二手書。
                    5.書況不佳之二手書：缺書封、缺書衣、缺內頁、裝訂脫落、印刷及裁切瑕疵、有書釘、汙痕、損傷、塗鴉、
                      膠貼、蟲穢/蛀、沾黏、異味。(畫線、註記不在此列，惟上架申請時需註明。）
                    6.不分售之套書，有缺書而不成套之二手書。
                    7.已使用過之各類練習簿、測驗簿、著色本或含習題之二手書，以及缺少附件即影響使用之二手書。
                      註記證件字號等個人資料之二手書。
                    `}
                    </pre>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed textp-20px letter-spacing"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    二手書兌換知音幣是如何估價的?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <pre className="textp-20px letter-spacing used-index-Accordion-pre d-flex justify-content-center ">
                      {`
                      二手書的價格會因書況的等級而給予折價，等級與折價關係，會依下列標準做標定：
                      A.全新：原價9折。
                      B.近全新：原價8折。
                      C.良好：原價7折。
                      D.普通：原價6折。
                      E.差強人意：原價5折。
                      (原價是以該書在book書易的原價為基準，書況等級判定請詳<書況等級如何判定?>)
                    `}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
