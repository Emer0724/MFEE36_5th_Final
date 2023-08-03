import style from '@/components/common/button/button4.module.css'

export default function Button4({tag_classification}) {
  return (
    <>
      <button className={`${style.chenbutton3}`}>#{tag_classification}</button>
    </>
  )
}
