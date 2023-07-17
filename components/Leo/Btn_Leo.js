import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const buttonStyle_l = {
  backgroundColor: '#52796F',
  width: 180,
  height: 65,
  borderRadius: 5,
  color: 'white',
  fontSize: 36,
}
const btnctstyle = {
  display: 'flex',
  justifyContent: 'center',
}

export default function DeepButton({ t1 }) {
  return (
    <div style={btnctstyle}>
      <Link href={''}>
        <button style={buttonStyle_l}>{t1}</button>
      </Link>
    </div>
  )
}

DeepButton.propTypes = {
  content: PropTypes.string,
  route: PropTypes.string,
}
