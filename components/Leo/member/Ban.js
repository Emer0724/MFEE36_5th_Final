import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

export default function Ban() {
  const x = {
    width: '250px',
    height: '250px',
  }
  const y = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 80,
  }
  return (
    <>
      <div style={y}>
        <FontAwesomeIcon icon={faBan} style={x} />
      </div>
    </>
  )
}
