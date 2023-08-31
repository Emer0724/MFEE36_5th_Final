// import React, { createContext, useContext, useState } from 'react'

// const LeoContext = createContext()
// //創建context

// export const LeoContextProvider = ({ children }) => {
//   //提供context的值
//   const [parent_category, setParent_category] = useState('')
//   const [category_id, setCategory_id] = useState('')
//   const [asideButtonClick, setAsideButtonClick] = useState(false)

//   const triggerAsideButtonClick = (category_id, parent_category) => {
//     setAsideButtonClick(true)
//     setCategory_id(category_id)
//     setParent_category(parent_category)
//   }
//   console.log(`context: ${parent_category}`)
//   console.log(`context: ${category_id}`)
//   return (
//     <LeoContext.Provider value={{ asideButtonClick, triggerAsideButtonClick }}>
//       {children}
//     </LeoContext.Provider>
//   )
// }

// export default LeoContext
