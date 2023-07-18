import ToolBar from '../blog/toolbar'
import BookContent from './book-content'
import FollowColumn from '../blog/follow-column'

export default function BookReview() {
  return (
    <div class="container d-flex pt-5">
      <ToolBar />
      <BookContent />
      <FollowColumn />
    </div>
  )
}
