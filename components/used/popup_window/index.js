import React from 'react'
import styles from '@/components/used/popup_window/popup_window.module.css'
import { BsCheckCircleFill } from 'react-icons/bs'

export default function Popup_window({
  text,
  botton_text_left,
  botton_text_right,
  botton_left,
  botton_right,
  no_botton = false,
  icon = false,
}) {
  return (
    <>
      <div className={styles.border_card_back}>
        <div className={`w-25  border-radius-5px pt-5 ${styles.card_div}`}>
          {icon ? (
            <div className="d-flex justify-content-center  py-2">
              <BsCheckCircleFill
                style={{ fontSize: '40px' }}
                className="text-center color-tx-2"
              />
            </div>
          ) : (
            ''
          )}

          <div className="textp-28px letter-spacing text-center pb-5">
            {text}
          </div>
          {no_botton ? (
            ''
          ) : (
            <div className="d-flex justify-content-around pb-5 ">
              <botton
                className="textp-20px letter-spacing btn color-bg-2 border-radius-5px color-tx-7"
                onClick={botton_left}
              >
                {botton_text_left}
              </botton>
              <botton
                className="textp-20px letter-spacing btn  color-bg-2 border-radius-5px color-tx-7 "
                onClick={botton_right}
              >
                {botton_text_right}
              </botton>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
