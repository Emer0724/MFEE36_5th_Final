import React, { useRouter } from 'react'

export default function Isbn() {
  const router = useRouter()
  return (
    <>
      <div>[ISBN]</div>
      <p>{router.query.isbn}</p>
    </>
  )
}
