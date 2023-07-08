import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';

const buttonStyle2 = {
  backgroundColor: "#52796F",
  width: 150,
  height:40,
  borderRadius: 5,
  color: "white",
};

export default function DeepButton({ DeepButtoncontent,route })  {
   return( <Link href={{route}}>
<button style={buttonStyle2}>{DeepButtoncontent}</button></Link>
)}

DeepButton.propTypes = {
content: PropTypes.string,
route:PropTypes.string,
};