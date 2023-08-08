import ArticleContentElement from '@/components/article-content/article-content-element'
import ToolBar from '@/components/blog/toolbar'
import FollowColumn from '@/components/blog/follow-column'
import style from '@/components/blog/blog.module.css' 
import BlogNav from '@/components/blog/blog-nav'
import { useRouter } from 'next/router'

export default function BlogPost() {
  const router = useRouter()
  const blogid = router.query.blogid
  console.log(blogid)

  return (
    <div className={`${style.blogcontent} container d-flex`}>
      <BlogNav/>
      <ToolBar />
      <ArticleContentElement />
      <FollowColumn />
    </div>
  )
}
