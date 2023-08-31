import React, { useState } from 'react'
// import { Menu } from 'antd'
// import { Icon } from '@/assets/leo-svg/menu.svg'
import n from '@/components/Leo/market_aside.module.css'
// import { useLeoContext } from '@/context/LeoContext'

const Market_aside_button = ({ handleDisplay, rows }) => {
  const [expandedItems, setExpandedItems] = useState([])

  const toggleExpansion = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((itemIndex) => itemIndex !== index))
    } else {
      setExpandedItems([...expandedItems, index])
    }
  }
  return (
    <>
      <ul
        onClick={() => toggleExpansion(0)}
        role="presentation"
        className={n.category}
      >
        分類
        {expandedItems.includes(0) && (
          <li>
            <ul>
              文學小說
              <li>愛情小說</li>
              <li>中國古典文學</li>
              <li>懸疑推理小說</li>
              <li>科幻奇幻文學</li>
              <li>恐怖驚悚文學</li>
            </ul>
          </li>
        )}
        {expandedItems.includes(0) && (
          <li>
            <ul>
              自然科普
              <li>大腦科學</li>
              <li>環境科學</li>
              <li>地球科學</li>
              <li>物理化學</li>
              <li>應用科學</li>
            </ul>
          </li>
        )}
        {expandedItems.includes(0) && (
          <li>
            <ul>
              飲食
              <li>咖啡茶</li>
              <li>美食名店</li>
              <li>食譜</li>
              <li>酒類</li>
              <li>飲食文化</li>
            </ul>
          </li>
        )}
        {expandedItems.includes(0) && (
          <li>
            <ul>
              生活風格
              <li>塑身美妝</li>
              <li>居家生活</li>
              <li>寵物</li>
              <li>手作</li>
              <li>運動戶外活動</li>
            </ul>
          </li>
        )}
        {expandedItems.includes(0) && (
          <li>
            <ul>
              旅遊
              <li>台灣</li>
              <li>日本</li>
              <li>韓國</li>
              <li>亞洲其他地區</li>
              <li>中國香港</li>
            </ul>
          </li>
        )}
        {expandedItems.includes(0) && (
          <li>
            <ul>
              藝術設計
              <li>電影</li>
              <li>攝影</li>
              <li>設計</li>
              <li>室內設計</li>
              <li>音樂</li>
            </ul>
          </li>
        )}
        {expandedItems.includes(0) && (
          <li>
            <ul>
              電腦資訊
              <li>電腦硬體</li>
              <li>作業系統</li>
              <li>程式設計</li>
              <li>網頁開發設計</li>
              <li>數位生活</li>
            </ul>
          </li>
        )}
        {expandedItems.includes(0) && (
          <li>
            <ul>
              商業理財
              <li>傳記</li>
              <li>專業管理實務</li>
              <li>職場工作術</li>
              <li>成功法</li>
              <li>行銷廣告業務</li>
              <li>電子商務</li>
              <li>投資理財</li>
            </ul>
          </li>
        )}
        {expandedItems.includes(0) && (
          <li>
            <ul>
              心理勵志
              <li>快樂學</li>
              <li>情緒壓力</li>
              <li>個人成長</li>
              <li>勵志故事散文</li>
              <li>人際關係</li>
              <li>熟齡生活</li>
              <li>生死醫病</li>
              <li>心理學</li>
              <li>心理諮商治療</li>
            </ul>
          </li>
        )}
      </ul>
    </>
  )
}
export default Market_aside_button
