import React, { useState } from 'react'
// import { AppstoreOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import n from '@/components/Leo/market_aside.module.css'

function getItem(label, key, onClick, items, type, category_id) {
  return {
    key,
    onClick,
    items,
    label,
    type,
    category_id,
  }
}

const items = [
  getItem(
    '文學小說',
    'sub1',
    ' ',
    [
      getItem('愛情小說', '1', null, null, null, '2'),
      getItem('中國古典文學', '2', null, null, null, '3'),
      getItem('懸疑推理小說', '3', null, null, null, '4'),
      getItem('科幻奇幻文學', '4', null, null, null, '5'),
      getItem('恐怖驚悚文學', '5', null, null, null, '6'),
    ],
    '1'
  ),
  getItem(
    '自然科普',
    'sub2',
    ' ',
    [
      getItem('大腦科學', '6', null, null, null, '8'),
      getItem('環境科學', '7', null, null, null, '9'),
      getItem('地球科學', '8', null, null, null, '10'),
      getItem('物理化學', '9', null, null, null, '11'),
      getItem('應用科學', '10', null, null, null, '12'),
    ],
    '7'
  ),
  getItem(
    '飲食',
    'sub3',
    ' ',
    [
      getItem('咖啡茶', '11', null, null, null, '14'),
      getItem('美食名店', '12', null, null, null, '15'),
      getItem('食譜', '13', null, null, null, '16'),
      getItem('酒類', '14', null, null, null, '17'),
      getItem('飲食文化', '15', null, null, null, '18'),
    ],
    '13'
  ),
  getItem(
    '生活風格',
    'sub4',
    ' ',
    [
      getItem('塑身美妝', '16', null, null, null, '20'),
      getItem('居家生活', '17', null, null, null, '21'),
      getItem('寵物', '18', null, null, null, '22'),
      getItem('手作', '19', null, null, null, '23'),
      getItem('運動戶外活動', '20', null, null, null, '24'),
    ],
    '19'
  ),
  getItem(
    '旅遊',
    'sub5',
    ' ',
    [
      getItem('台灣', '21', null, null, null, '26'),
      getItem('日本', '22', null, null, null, '27'),
      getItem('韓國', '23', null, null, null, '28'),
      getItem('亞洲其他地區', '24', null, null, null, '29'),
      getItem('中國香港', '25', null, null, null, '30'),
    ],
    '25'
  ),
  getItem(
    '藝術設計',
    'sub6',
    ' ',
    [
      getItem('電影', '26', null, null, null, '32'),
      getItem('攝影', '27', null, null, null, '33'),
      getItem('設計', '28', null, null, null, '34'),
      getItem('室內設計', '29', null, null, null, '35'),
      getItem('音樂', '30', null, null, null, '36'),
    ],
    '31'
  ),
  getItem(
    '電腦資訊',
    'sub7',
    ' ',
    [
      getItem('電腦硬體', '31', null, null, null, '38'),
      getItem('作業系統', '32', null, null, null, '39'),
      getItem('程式設計', '33', null, null, null, '40'),
      getItem('網頁開發設計', '34', null, null, null, '41'),
      getItem('數位生活', '35', null, null, null, '42'),
    ],
    '37'
  ),
  getItem(
    '商業理財',
    'sub8',
    ' ',
    [
      getItem('傳記', '36', null, null, null, '44'),
      getItem('專業管理實務', '37', null, null, null, '46'),
      getItem('職場工作術', '38', null, null, null, '47'),
      getItem('成功法', '39', null, null, null, '48'),
      getItem('行銷廣告業務', '40', null, null, null, '49'),
      getItem('電子商務', '41', null, null, null, '50'),
      getItem('投資理財', '42', null, null, null, '52'),
    ],
    '43'
  ),

  getItem(
    '心理勵志',
    'sub9',
    ' ',
    [
      getItem('快樂學', '43', null, null, null, '54'),
      getItem('情緒壓力', '44', null, null, null, '55'),
      getItem('個人成長', '45', null, null, null, '56'),
      getItem('勵志故事散文', '46', null, null, null, '57'),
      getItem('人際關係', '47', null, null, null, '59'),
      getItem('生活哲學', '48', null, null, null, '61'),
      getItem('熟齡生活', '49', null, null, null, '62'),
      getItem('生死醫病', '50', null, null, null, '63'),
      getItem('心理學', '51', null, null, null, '64'),
      getItem('心理諮商治療', '52', null, null, null, '65'),
    ],
    '53'
  ),
  getItem('其他', 'sub11', ' ', [
    getItem('斗內', '53'),
    getItem('友站連結', 'sub12', null, [
      getItem('博客來', '54'),
      getItem('讀冊', '55'),
    ]),
  ]),
]

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

// submenu keys of first level

const Market_aside_button = ({ handleDisplay, rows }) => {
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
    >
      {items.map((item) => {
        if (item.items) {
          return (
            <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
              {item.items.map((subItem) => (
                <Menu.Item
                  key={subItem.key}
                  onClick={() => handleDisplay(subItem.category_id)}
                >
                  {subItem.label}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )
        } else {
          return (
            <Menu.Item
              key={item.key}
              onClick={() => handleDisplay(item.category_id)}
            >
              {item.label}
            </Menu.Item>
          )
        }
      })}
    </Menu>
  )
}

export default Market_aside_button
