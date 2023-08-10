import { useEffect } from 'react'

export default function useDebounce(doSomething, msec = 500) {
  if (!(doSomething instanceof Function))
    throw new Error('useDebounce: 第一個參數應該要為函式')
  useEffect(() => {
    const tid = setTimeout(doSomething, msec)
    return () => clearTimeout(tid)
  }, [doSomething, msec])
}
