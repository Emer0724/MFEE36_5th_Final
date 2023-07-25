import ToolBar from '../blog/toolbar'
import TrackContent1 from './track-content1'
import FollowColumn from '../blog/follow-column'
import style from '@/components/track/track.module.css'

export default function Track() {
  return (
    <div className={`${style.cardgap} container d-flex pt-5`}>
        <ToolBar />
        <TrackContent1 />
        <FollowColumn />
    </div>
  )
}
