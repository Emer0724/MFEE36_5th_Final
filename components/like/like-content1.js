import LikeContent from "./like-content";
import LikeNav from "./like-nav";

export default function LikeContent1() {
    return (
        <div className="col-7 d-flex flex-column ps-5 pe-5">
          <LikeNav/>
          <LikeContent/>
          <LikeContent/>
          <LikeContent/>
          <LikeContent/>
          <LikeContent/>
          <LikeContent/>
        </div>
    )
}