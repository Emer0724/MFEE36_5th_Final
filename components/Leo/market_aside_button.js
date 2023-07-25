import React, { useState } from 'react'
// import { AppstoreOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import n from '@/components/Leo/market_aside.module.css'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem('文學小說', 'sub1', ' ', [
    getItem('愛情小說', '1'),
    getItem('中國古典文學', '2'),
    getItem('懸疑推理小說', '3'),
    getItem('科幻奇幻文學', '4'),
    getItem('恐怖驚悚文學', '5'),
  ]),
  getItem('自然科普', 'sub2', ' ', [
    getItem('大腦科學', '6'),
    getItem('環境科學', '7'),
    getItem('地球科學', '8'),
    getItem('物理化學', '9'),
    getItem('應用科學', '10'),
  ]),
  getItem('飲食', 'sub3', ' ', [
    getItem('咖啡茶', '11'),
    getItem('美食名店', '12'),
    getItem('食譜', '13'),
    getItem('酒類', '14'),
    getItem('飲食文化', '15'),
  ]),
  getItem('生活風格', 'sub4', ' ', [
    getItem('塑身美妝', '16'),
    getItem('居家生活', '17'),
    getItem('寵物', '18'),
    getItem('手作', '19'),
    getItem('運動戶外活動', '20'),
  ]),
  getItem('旅遊', 'sub5', ' ', [
    getItem('台灣', '21'),
    getItem('日本', '22'),
    getItem('韓國', '23'),
    getItem('亞洲其他地區', '24'),
    getItem('中國香港', '25'),
  ]),
  getItem('藝術設計', 'sub6', ' ', [
    getItem('電影', '26'),
    getItem('攝影', '27'),
    getItem('設計', '28'),
    getItem('室內設計', '29'),
    getItem('音樂', '30'),
  ]),
  getItem('電腦資訊', 'sub7', ' ', [
    getItem('電腦硬體', '31'),
    getItem('作業系統', '32'),
    getItem('程式設計', '33'),
    getItem('網頁開發設計', '34'),
    getItem('數位生活', '35'),
  ]),
  getItem('商業理財', 'sub8', ' ', [
    getItem('傳記', '36'),
    getItem('專業管理實務', '37'),
    getItem('職場工作術', '38'),
    getItem('成功法', '39'),
    getItem('行銷廣告業務', '40'),
    getItem('電子商務', '41'),
    getItem('投資理財', '42'),
  ]),

  getItem('心理勵志', 'sub9', ' ', [
    getItem('快樂學', '43'),
    getItem('情緒壓力', '44'),
    getItem('個人成長', '45'),
    getItem('勵志故事散文', '46'),
    getItem('人際關係', '47'),
    getItem('生活哲學', '48'),
    getItem('熟齡生活', '49'),
    getItem('生死醫病', '50'),
    getItem('心理學', '51'),
    getItem('心理諮商治療', '52'),
  ]),
  getItem('其他', 'sub11', ' ', [
    getItem('斗內', '53'),
    getItem('友站連結', 'sub12', null, [
      getItem('博客來', '54'),
      getItem('讀冊', '55'),
    ]),
  ]),
]

// submenu keys of first level
const rootSubmenuKeys = [
  'sub1',
  'sub2',
  'sub3',
  'sub4',
  'sub5',
  'sub6',
  'sub7',
  'sub8',
  'sub9',
  'sub10',
  'sub11',
]
const Market_aside_button = () => {
  const [openKeys, setOpenKeys] = useState([])
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      className={n.market_aside_button}
      items={items}
    />
  )
}
export default Market_aside_button
