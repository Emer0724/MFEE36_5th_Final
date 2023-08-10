import TagContentTravel from '@/components/tag/tag-contenttravel'
import ToolBar from '@/components/blog/toolbar'
import FollowColumn from '@/components/blog/follow-column'
import style from '@/components/book-personal/book-personal.module.css'
import BlogNav from '@/components/blog/blog-nav'
export default function Love() {
  return (
    <>
      <div className={`${style.blogcontent} container pt-xl-5 d-flex`}>
      <div className='pb-5'>
          <BlogNav />
        </div>
        <ToolBar />
        <TagContentTravel />
        <FollowColumn />
      </div>
    </>
  )
}
