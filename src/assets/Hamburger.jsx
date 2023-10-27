import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>
      <ul className="hamburger-menu">
        <ul>
          <a href="https://yusuhararemori.jp/index.html">ReMORIホーム</a>
        </ul>
        <ul>
          <a href="https://yusuhararemori.jp/about.html">ReMORIの取り組み</a>
        </ul>

        <ul>
          <a href="https://yusuhararemori.jp/training.html">
            地域おこし協力隊の特徴・制度
          </a>
        </ul>
        <ul>
          <a href="https://yusuhararemori.jp/member.html">
            地域おこし協力隊メンバー
          </a>
        </ul>
        <ul>
          <a href="https://yusuhararemori.jp/recruiting.html">
            梼原森林づくり大学構想について
          </a>
        </ul>
        <ul>
          <a href="https://yusuhararemori.jp/comori.html">若手林業研究会</a>
        </ul>
        <ul>
          <a href="https://yusuhararemori.jp/photo_ulbrary.html">
            ReMORI写真館
          </a>
        </ul>
        <ul>
          <a href="https://yusuhararemori.jp/monthly.html">リモリマンスリー</a>
        </ul>
        <ul>
          <a href="https://yusuhararemori.jp/news.html">お知らせ</a>
        </ul>
        <ul>
          <a href="http://www.town.yusuhara.kochi.jp/town/other/toiawase.html">
            お問い合わせ
          </a>
        </ul>
      </ul>
      <button>募集要項・応募フォーム →</button>
    </div>
  )
}

export default Hamburger
