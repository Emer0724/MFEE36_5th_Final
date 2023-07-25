import React from 'react'
import css from '@/pages/used-book/test_load.module.css'

export default function test_load() {
  return (
    <div id="loading">
      <div id="loading--inner" className={css.loading_inner}>
        <div
          className={`${css.loading_box} ${css.loading_box_animate} ${css.upper}`}
          style="left: 20px; bottom: 0; animation-delay: .7s"
        ></div>
        <div
          className={`${css.loading_box} ${css.loading_box_animate}`}
          style="left: 32px; bottom: 0; animation-delay: .6s"
        ></div>
        <div
          className="loading--box dbl-width loading--box-animate"
          style="left: 44px; bottom: 0; animation-delay: .5s"
        ></div>
        <div
          className="loading--box sink loading--box-animate"
          style="left: 50px; bottom: 11px; animation-delay: .5s"
        ></div>
        <div
          className="loading--box hang loading--box-animate"
          style="left: 44px; top: 0; animation-delay: .4s"
        ></div>
        <div
          className="loading--box hang loading--box-animate"
          style="left: 56px; top: 0; animation-delay: .3s"
        ></div>
        <div
          className="loading--box loading--box-animate"
          style="left: 68px; bottom: 0; animation-delay: .1s"
        ></div>
        <div
          className="loading--box upper loading--box-animate"
          style="left: 68px; top: 0; animation-delay: .1s"
        ></div>
        <div
          className="loading--box dbl-height loading--box-animate"
          style="left: 80px; bottom: 0;"
        ></div>
        <div className="loading--text">LADE</div>
      </div>
    </div>
  )
}
