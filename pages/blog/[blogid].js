import ArticleContentElement from '@/components/article-content/article-content-element'
import ToolBar from '@/components/blog/toolbar'
import FollowColumn from '@/components/blog/follow-column'
import { useRouter } from 'next/router'

export default function BlogPost() {
  const router = useRouter()
  const blogid = router.query.blogid
  console.log(blogid)

  return (
    <div className="container d-flex pt-5">
      <ToolBar />
      <ArticleContentElement />
      <FollowColumn />
    </div>
  )
}
