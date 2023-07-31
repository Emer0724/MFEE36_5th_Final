import BookReviewElement from "./book-review-element"
import BookElement from "./book-element"

export default function BookContent() {

    return (
    <div className="col-xl-7 d-flex flex-column px-xl-5 pb-5">
        <BookElement/>
        <BookReviewElement/>
    </div>
    )
}