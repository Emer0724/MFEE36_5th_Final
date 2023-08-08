import TagContentLove from '@/components/tag/tag-contentlove'
import ToolBar from '@/components/blog/toolbar'
import FollowColumn from '@/components/blog/follow-column'
import style from '@/components/book-personal/book-personal.module.css'

export default function Love() {
  return (
    <>
      <div className={`${style.blogcontent} container d-flex pt-5`}>
        <ToolBar />
        <TagContentLove />
        <FollowColumn />
      </div>
    </>
  )
}
