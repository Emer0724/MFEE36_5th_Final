import {useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'



export default function LightButton({ lightbtncontent, route }) {

  const [windowWidth ,setWindowWidth] = useState(null)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const buttonStyle1 = {
    border: '2px solid #52796F',
    width: windowWidth && windowWidth > 600 ? 200:150,
    height: 50,
    borderRadius: 5,
    color: '#52796F',
    fontSize:windowWidth && windowWidth > 600?"20px":"16px",
  }
  return (
    <Link href={ {route} }>
      <button style={buttonStyle1} >
        {lightbtncontent}
      </button>
    </Link>
  )
}

LightButton.propTypes = {
  content: PropTypes.string,
  route: PropTypes.string,
}
