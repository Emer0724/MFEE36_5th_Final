import ToolBar from '../blog/toolbar'
import BookContent from './book-content'
import FollowColumn from '../blog/follow-column'
import style from '@/components/book-review/book-review1.module.css'

export default function BookReview() {
  return (
    <div className={`${style.card_gap} container d-flex pt-5`}>
      <ToolBar />
      <BookContent />
      <FollowColumn />
    </div>
  )
}
