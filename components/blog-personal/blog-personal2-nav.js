import React, { useState } from "react";
import Link from "next/link";
import style from "@/components/blog-personal/blog-personal2-nav.module.css";

export default function BlogPersonal2Nav() {
  const Work = "/blog/personal-page/work";
  const Bookrw = "/blog/personal-page/review";

  const [selectedLink, setSelectedLink] = useState(Work);

  return (
    <div className={`${style.chenjc}`}>
      <div className={` d-flex pb-3 pt-5`}>
        <div className="pe-4">
          <Link
            href={Work}
            style={{
              color: selectedLink === Work ? '#52796F' : "black",
              fontSize: "18px",
              textDecoration: "none"
            }}
            onClick={() => setSelectedLink(Work)}
          >
            作品
          </Link>
        </div>
        <div>
          <Link
            href={Bookrw}
            style={{
              color: selectedLink === Bookrw ? '#52796F' : "black",
              fontSize: "18px",
              textDecoration: "none"
            }}
            onClick={() => setSelectedLink(Bookrw)}
          >
            書評
          </Link>
        </div>
      </div>
    </div>
  )
}
