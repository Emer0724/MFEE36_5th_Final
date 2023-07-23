import {useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'



export default function DeepButton({ DeepButtoncontent, route="",type="",onClick}) {
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

  const buttonStyle2 = {
    backgroundColor: '#52796F',
    width: windowWidth && windowWidth > 600 ? 200:150,
    height: 50,
    borderRadius: 5,
    color: 'white',
    fontSize:windowWidth && windowWidth > 600?"20px":"16px",
  }
  const btnctstyle = {
    display: 'flex',
    justifyContent: 'center',
  }


  return (
    <div style={btnctstyle}>
      <Link href={route}>
        <button type={type} style={buttonStyle2} onClick={onClick}>{DeepButtoncontent}</button>
      </Link>
    </div>
  )
}

DeepButton.propTypes = {
  content: PropTypes.string,
  route: PropTypes.string,
}
