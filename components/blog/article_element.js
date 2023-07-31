import BreadCrumbs from './bread_crumbs'
import BlogContent from './blog_content'

export default function ArticleElement() {
  return (
    <div className={`col-xl-7 px-xl-5 d-flex flex-column`}>
      <BreadCrumbs />
      <BlogContent />
    </div>
  )
}
