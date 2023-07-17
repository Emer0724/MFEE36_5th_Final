import {useState,useEffect} from 'react'

const CartHeaderstyle1 = {
    color: "#52796F",
    textAlign:"center",
    margin:"80px 0",
    letterSpacing:"2px",
    fontWeight:"900"
  }
const CartHeaderstyle2 = {
    color: "#52796F",
    textAlign:"center",
    margin:"80px 0",
    letterSpacing:"2px",
    fontWeight:"bolder",
    borderBottom:"1px solid black",
    paddingBottom:"50px",
    fontSize:"var(--txi16)",
    fontWeight:"900"
  }
const CartHeader = {
  width:"100%"
  }

export default function CartTitle({titlecontent}) {
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
  return (
    <div style={CartHeader}>
    {windowWidth && windowWidth > 600
     ? <h3 style={CartHeaderstyle1}>{titlecontent}</h3> : <p style={CartHeaderstyle2}>{titlecontent}</p>}
    </div>
  )
}
