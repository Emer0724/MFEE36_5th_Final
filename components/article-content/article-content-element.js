import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import style from '@/components/article-content/article-content-element.module.css'
import Avatar3 from '../book-review/blogavatar3'
import Button3 from '../common/button/button3'
import Button4 from '../common/button/button4'
import Button5 from '../common/button/button5'
import Reply from './reply'

export default function ArticleContentElement() {
  return (
    <div className="col-7 d-flex flex-column ps-5 pe-5">
      <div className="border-bottom border-dark-subtle">
        <div className={`${style.chenbreadhole} text-body-tertiary pb-5`}>
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
        <div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="pb-1">
                <Avatar3 />
              </div>
              <div className="d-flex align-items-center ps-3">
                <h4 className="fw-bold">心理的創傷</h4>
              </div>
            </div>
            <div className="d-flex pt-1">
              <Button3 />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between pt-3">
        <div>
          <Button4 />
        </div>
        <div>
          <Button5 />
        </div>
      </div>
      <div className="pt-5">
        <p className={`${style.chenp}`}>
          我其實已經忘了，2023年台灣這波臉書社群me
          too運動，是從哪一天開始的。我細細地閱讀每一篇文字，反覆咀嚼，看著陌生人的傷口，我也打從心裡覺得相當難受。
        </p>
        <p className={`${style.chenp}`}>
          我以為我已經經歷過那些年少反覆糾結的心境，跨過了過去跨不過的坎，或多或少念了一些女性理論、有過長期心理諮商的積累，如今的我足夠強大足夠平靜，可以靜靜在一旁凝視別人的故事。
        </p>
        <p className={`${style.chenp}`}>
          直到我發現我這一個多禮拜，工作狀態奇差，心思紛亂，不時被網路上一篇又一篇熱騰騰的me
          too自我揭露，給拽了過去，逼自己看了好幾篇好幾篇。
        </p>
        <p className={`${style.chenp}`}>心頭盛滿，滿滿的傷口，與滿滿的惡。</p>
        <p className={`${style.chenp}`}>
          儘管我曾經從多次的試探界線中，僥倖全身而退，但當下的我卻沒有足夠的勇氣義正嚴辭去斥責對方。
        </p>
        <p className={`${style.chenp}`}>
          本該在公開場合的面試，一個臨時更換地點，我走進一個大馬路上的大樓，跟著男性面試官搭上電梯，他在上升的電梯
        </p>
        <p className={`${style.chenp}`}>
          密閉空間，只剩下我跟他兩人，電梯上升，他才說，「這是我家。」
        </p>
        <p className={`${style.chenp}`}>
          我傻住，卻來不及臨陣脫逃，進了他家，穿過他的房間，在他家的陽台跟他面試，我很努力的不讓氣氛歪掉，講對於工作的想法，講你們公司不是在附近嗎?我想去公司看看。我太過緊繃，努力不讓氣氛流於曖昧不明的空間，依稀記得他問了一句有沒有男朋友的話。
        </p>
        <p className={`${style.chenp}`}>後來我成功讓對方把我帶到辦公室，</p>
        <p className={`${style.chenp}`}>但那天是假日，辦公室仍然空無一人。</p>
        <p className={`${style.chenp}`}>
          我從那次的面試中全身而退了，但我卻努力在那樣被設計好的空間，大口喘氣撐住空間的正大光明，不要讓對方誤解，有任何一絲絲出手的機會。
        </p>
        <p className={`${style.chenp}`}>
          在後來幾年，終於有女性具名公開指認，這名男子經常以工作理由，單獨邀約女性出去，約在他的車上、家中等私密空間，卻讓話題從公領域慢慢退下，遊走在曖昧不明的地帶，伺機而動。
        </p>
        <p className={`${style.chenp}`}>
          這名曾經在社運台上高台闊論的活運分子，網路上擁有極高的話語權與追隨者，有著漂漂亮亮的職業，不時賣弄自己醫學知識，創辦了一個又一個政治正確的社群，
        </p>
        <p className={`${style.chenp}`}>最後終於，被起訴，跌落神壇。</p>
        <p className={`${style.chenp}`}>
          我還有一個很難以啟齒與訴說的經驗，在一個濕濕冷冷的十二月雨季，那時候我的確跟一名男子進入房間內了，我的心裡是希望跟他親近的，但我沒有心理準備要進展到哪一步。當時的我沒有跟異性發生過親密經驗，我欣賞眼前的人，他深深感受到我欣賞他讓他可以藉此伸手向我多索求什麼，即使他已經醜話說在前頭他無法當我的男朋友。
        </p>
        <p className={`${style.chenp}`}>
          這個男人說他不能當我的男朋友可是他強烈的想要從我的身上得到什麼，我渴求親近他，但我並不想要這樣的關係，我並不想要跟這個男人做。
        </p>
        <p className={`${style.chenp}`}>
          我阻止他繼續下去，但他仍不時有想要強行進入的動作。我不斷地拜託不要不要，我可以用其他方式幫你，但拜託不要進來
        </p>
        <p className={`${style.chenp}`}>
          我在床上全身而退了，但這個經驗讓我深深的受傷了，好幾年好幾年。
        </p>
        <p className={`${style.chenp}`}>
          我困惑迷惘了好久，願意跟他進入密閉空間，脫下衣服的我，還有資格稱為受害者嗎？
        </p>
        <p className={`${style.chenp}`}>
          都是我太過喜歡他才讓他有機會觸摸我，在那空間發生的一切讓我感到侷促不安，他摸了我可是他不愛我，那我對他的情感豈不是建立在虛無的空白，他只想要我的身體沒有任何一點喜歡與愛，讓我覺得自己好可悲好可悲。
        </p>
        <p className={`${style.chenp}`}>
          這個人的消息當時也不時出現在新聞上，社群上，每看見這個人慷慨激昂的形象，開始有這個人的耳語逐漸流出，我都越覺得自己可悲的過於渺小。是我跟他走進那個房間，我有什麼好說的，我害怕自己根本就不是一個合格的受害者
        </p>
        <p className={`${style.chenp}`}>
          大眾想像中的被害人，必須要夠可憐，叫破喉嚨的抵抗，才有資格稱作你不甘不願，在成為受害者之前，要先立一座貞節牌坊。
        </p>
        <p className={`${style.chenp}`}>
          這個社會容許男人的慾望四處橫流，站出來控訴的女性往往要先經歷一番性魅力羞辱，任人指點。一扯上性與慾望，主控球總是被放在男性手中，於雄性而言是加分，於雌性而言是減分。
        </p>
        <p className={`${style.chenp}`}>
          我花了好多好多年，才想通，我有權利握有自己的慾望要如何使用，跟誰使用。
        </p>
        <p className={`${style.chenp}`}>
          太多的敘事中，我們只看見男人張揚的性與權力，女性只能是迎合的，被撩撥起來的。
        </p>
        <p className={`${style.chenp}`}>
          在那個房間發生的一切，對方只看的見自己的慾望完全無視於我的主體，差一點我就要在那樣私密空間中，被男性支配的慾望給巧取豪奪
        </p>
        <p className={`${style.chenp}`}>
          我從那張床上全身而退，經歷了好幾年的失調與混亂，好不容易多念了一些書，才能夠指認出，傳統論述中對於女性的不公與束縛。
        </p>
        <p className={`${style.chenp}`}>
          沒有任何一個女性會樂意自己踩在一個受害者的位置上，我們只求在那樣私密的情感與慾望流動的空間之中，雙方是對等的姿態，欲望是建立在共享的意願與界限，而非以男性的慾望暴力支配。
        </p>
        <p className={`${style.chenp}`}>我的慾望本該活的理直氣壯。</p>
      </div>
      <div className="pt-5">
        <h3 className="fw-bold pb-5">最新的回應</h3>
        <Reply />
        <Reply />
        <Reply />
        <Reply />
        <Reply />
      </div>
    </div>
  )
}
