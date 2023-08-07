import {useState,useEffect} from 'react'




export default function LightButton({ lightbtncontent, onClick={} }) {

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
      <button style={buttonStyle1} onClick={onClick} >
        {lightbtncontent}
      </button>
  )
}
