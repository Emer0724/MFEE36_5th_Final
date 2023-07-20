import React, { useState } from 'react'
import { AppstoreOutlined } from '@ant-design/icons'
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
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Option 5', '5'),
  ]),
  getItem('自然科普', 'sub2', ' ', [
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem('藝術設計', 'sub3', ' ', [
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
    getItem('Option 13', '13'),
    getItem('Option 14', '14'),
    getItem('Option 15', '15'),
  ]),
  getItem('宗教命理', 'sub4', ' ', [
    getItem('Option 16', '16'),
    getItem('Option 17', '17'),
    getItem('Option 18', '18'),
    getItem('Option 19', '19'),
    getItem('Option 20', '20'),
  ]),
  getItem('心理勵志', 'sub5', ' ', [
    getItem('Option 21', '21'),
    getItem('Option 22', '22'),
    getItem('Option 23', '23'),
    getItem('Option 24', '24'),
    getItem('Option 25', '25'),
  ]),
  getItem('飲食', 'sub6', ' ', [
    getItem('Option 26', '26'),
    getItem('Option 27', '27'),
    getItem('Option 28', '28'),
    getItem('Option 29', '29'),
    getItem('Option 30', '30'),
  ]),
  getItem('商業理財', 'sub7', ' ', [
    getItem('Option 31', '31'),
    getItem('Option 32', '32'),
    getItem('Option 33', '33'),
    getItem('Option 34', '34'),
    getItem('Option 35', '35'),
  ]),
  getItem('醫療保健', 'sub8', ' ', [
    getItem('Option 36', '36'),
    getItem('Option 37', '37'),
    getItem('Option 38', '38'),
    getItem('Option 39', '39'),
    getItem('Option 40', '40'),
  ]),

  getItem('旅遊', 'sub9', ' ', [
    getItem('Option 41', '41'),
    getItem('Option 42', '42'),
    getItem('Option 43', '43'),
    getItem('Option 44', '44'),
    getItem('Option 45', '45'),
  ]),
  getItem('生活風格', 'sub10', ' ', [
    getItem('Option 46', '46'),
    getItem('Option 47', '47'),
    getItem('Option 48', '48'),
    getItem('Option 49', '49'),
    getItem('Option 50', '50'),
  ]),
  getItem('其他', 'sub11', ' ', [
    getItem('斗內', '51'),
    getItem('友站連結', 'sub3', null, [
      getItem('博客來', '52'),
      getItem('讀冊', '53'),
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
