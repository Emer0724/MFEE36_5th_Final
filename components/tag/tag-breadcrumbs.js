import style from '@/components/blog/bread-crumbs.module.css'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import TagContent from './tag-content'

export default function TagBreadCrumbs() {
  return (
    <>
      <div className={`col-xl-7 px-xl-5 d-flex flex-column`}>
        <div className="row">
          <div
            className={`${style.chenbreadhole} ${style.bread} text-body-tertiary pb-5`}
          >
            <Link
              href="#"
              className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}
            >
              首頁
            </Link>
            &#062;
            <Link
              href="#"
              className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}
            >
              部落格
            </Link>
            &#062;
            <Link
              href="#"
              className={`text-body-tertiary text-decoration-none ${style.chenbreadhole}`}
            >
              熱門
            </Link>
          </div>
            <TagContent />
            <TagContent />
            <TagContent />
            <TagContent />
            <TagContent />
        </div>
      </div>
    </>
  )
}
