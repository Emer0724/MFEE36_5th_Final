import TrackNav from './track-nav'
import TrackContent from './track-content'
import BlogPersonalNav from '../blog-personal/blog-personal-nav'
import PhPersonalAvatar from '../blog-personal/ph-personal-avatar'

export default function TrackContent1() {
  return (
    <div className={`col-xl-7 px-xl-5 d-flex flex-column pb-5`}>
      <div className="row">
        <PhPersonalAvatar/>
        <BlogPersonalNav/>
        <TrackNav />
        <TrackContent />
      </div>
    </div>
  )
}
