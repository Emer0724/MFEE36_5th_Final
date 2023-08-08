import FollowColumnTop from './follow-columntop'
import FollowColumnDown from './follow-columndown'
import style from '@/components/blog/follow-column.module.css'


export default function FollowColumn() {
  return (
    <div className={`col-xl-3 d-flex flex-column col-xl-px-5`}
    >
      <div className={`${style.followColumnWrapper} row`}>
        <FollowColumnTop />
        <FollowColumnDown />
      </div>
    </div>
  )
}
