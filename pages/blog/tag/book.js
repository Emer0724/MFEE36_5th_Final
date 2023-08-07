import TagContentBook from '@/components/tag/tag-contentbook'
import ToolBar from '@/components/blog/toolbar'
import FollowColumn from '@/components/blog/follow-column'
import style from '@/components/book-personal/book-personal.module.css'

export default function Love() {
  return (
    <>
      <div className={`${style.blogcontent} container d-flex pt-5`}>
        <ToolBar />
        <TagContentBook />
        <FollowColumn />
      </div>
    </>
  )
}
