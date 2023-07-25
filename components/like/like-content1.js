import LikeContent from "./like-content";
import LikeNav from "./like-nav";
import BlogPersonalNav from "../blog-personal/blog-personal-nav";
import PhPersonalAvatar from "../blog-personal/ph-personal-avatar";

export default function LikeContent1() {
    return (
        <div className="col-xl-7 px-xl-5 d-flex flex-column pb-5">
          <PhPersonalAvatar/>
          <BlogPersonalNav/>
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