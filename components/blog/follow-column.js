import FollowColumnTop from './follow-columntop'
import FollowColumnDown from './follow-columndown'


export default function FollowColumn() {
  return (
    <div className={`col-xl-3 d-flex flex-column col-xl-px-5`}>
      <div className="row">
        <FollowColumnTop />
        <FollowColumnDown />
      </div>
    </div>
  )
}
