
import TagBreadCrumbs from './tag-breadcrumbs'
import ToolBar from '../blog/toolbar'
import FollowColumn from '../blog/follow-column'


export default function Tag() {
    return (
        <div className="container d-flex pt-5">
            <ToolBar/>
            <TagBreadCrumbs/>
            <FollowColumn/>
        </div>
    )
}