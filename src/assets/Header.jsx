const Header = () => {
  return (
    <header className="nav-container">
      <img
        src="https://yusuhararemori.jp/img/common/head_logo.png"
        width={200}
        height={54}
      />
      <nav>
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
          <a href="https://yusuhararemori.jp/photo_library.html">
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
      </nav>
      <button>募集要項・応募フォーム →</button>
    </header>
  )
}

export default Header
