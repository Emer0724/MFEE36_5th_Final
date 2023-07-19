import React from 'react'
import b from '@/components/Leo/market_aside.module.css'
import Dropdown from 'react-bootstrap/Dropdown'
export default function Market_aside_button() {
  const arr = [
    '文學小說',
    '自然科普',
    '飲食',
    '生活風格',
    '旅遊',
    '藝術設計',
    '電腦資訊',
    '商業理財',
    '心理勵志',
  ]
  const bb = {
    marginLeft: '10px',
  }
  const bbo = {
    marginLeft: '20px',
  }
  return (
    <>
      {arr.map((label, index) => (
        <Dropdown key={index} style={bb}>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className={b.market_aside_button}
          >
            {label}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              key={`item-${index}`}
              href="#/action-1"
              className={b.subMenu}
            ></Dropdown.Item>
            <Dropdown.Item
              key={`item-${index}`}
              href="#/action-2"
              className={b.subMenu}
            >
              Another action
            </Dropdown.Item>
            <Dropdown.Item
              key={`item-${index}`}
              href="#/action-3"
              className={b.subMenu}
            >
              Something else
            </Dropdown.Item>
            <Dropdown.Item
              key={`item-${index}`}
              href="#/action-4"
              className={b.subMenu}
            >
              Something else
            </Dropdown.Item>
            <Dropdown.Item
              key={`item-${index}`}
              href="#/action-4"
              className={b.subMenu}
            >
              Something else
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ))}
      <button
        className={`${b.market_aside_button} ${b.market_aside_more}`}
        style={bbo}
      >
        更多...
      </button>
    </>
  )
}
