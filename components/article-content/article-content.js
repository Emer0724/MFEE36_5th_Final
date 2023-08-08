import ToolBar from '../blog/toolbar'
import ArticleContentElement from './article-content-element'
import FollowColumn from '../blog/follow-column'
import BlogNav from '../blog/blog-nav'
import style from '@/components/blog/blog.module.css' 

export default function ArticleContent() {
  return (
      <div className={`${style.blogcontent} container d-flex pt-3`}>
        <BlogNav />
        <ToolBar />
        <ArticleContentElement />
        <FollowColumn />
      </div>
  )
}
