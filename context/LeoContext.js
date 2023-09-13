import React, { createContext, useContext, useState } from 'react'

const LeoContext = createContext()
//創建context

export const LeoContextProvider = ({ children }) => {
  //提供context的值
  const [parentCategory, setParentCategory] = useState(' ')
  const [categoryId, setCategoryId] = useState(' ')
  const [categoryName, setCategoryName] = useState(' ')
  const [asideButtonClick, setAsideButtonClick] = useState(false)

  console.log(` ${parentCategory}`)
  console.log(` ${categoryId}`)
  console.log(` ${categoryName}`)

  return (
    <LeoContext.Provider
      value={{
        asideButtonClick,
        setAsideButtonClick,
        parentCategory,
        setParentCategory,
        categoryId,
        setCategoryId,
        categoryName,
        setCategoryName,
      }}
    >
      {children}
    </LeoContext.Provider>
  )
}

export const useLeoContext = () => {
  //自訂hook
  return useContext(LeoContext)
}
