import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const buttonStyle1 = {
  border: '2px solid #52796F',
  width: 200,
  height: 40,
  borderRadius: 5,
  color: '#52796F',
  fontSize:"20px"
}

export default function LightButton({ lightbtncontent, route, props }) {
  return (
    <Link href={{ route }}>
      <button style={buttonStyle1} onClick={props}>
        {lightbtncontent}
      </button>
    </Link>
  )
}

LightButton.propTypes = {
  content: PropTypes.string,
  route: PropTypes.string,
}
