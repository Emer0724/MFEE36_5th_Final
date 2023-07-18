import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const buttonStyle2 = {
  backgroundColor: '#52796F',
  width: 200,
  height: 40,
  borderRadius: 5,
  color: 'white',
  fontSize:"20px"
}
const btnctstyle = {
  display: 'flex',
  justifyContent: 'center',
}

export default function DeepButton({ DeepButtoncontent, route }) {
  return (
    <div style={btnctstyle}>
      <Link href={{ route }}>
        <button style={buttonStyle2}>{DeepButtoncontent}</button>
      </Link>
    </div>
  )
}

DeepButton.propTypes = {
  content: PropTypes.string,
  route: PropTypes.string,
}
