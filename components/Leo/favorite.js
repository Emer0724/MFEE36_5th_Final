import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

export default function Favorite() {
  const i = {
    fontSize: '45px',
  }
  const fbtn = {
    border: 'none',
    backgroundColor: 'transparent',
  }
  return (
    <>
      <button style={fbtn} onClick={''}>
        <FontAwesomeIcon icon={faBookmark} style={i} />
      </button>
    </>
  )
}
