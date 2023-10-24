const People = () => {
  return (
    <section className="people">
      <div className="people-title">
        <p>りもりの暮らし</p>
        <p>LIFE</p>
        <span>高知県梼原町では、私たちと一緒に、</span>
        <span>未来の森林づくりをしてくれる仲間を募集しています。</span>
      </div>

      <div className="people-column">
        <ul>
          <img src="https://yusuhararemori.jp/img/top/people01.webp" />
          <p>森林の神秘と美しい街並みに惹かれて</p>
          <p className="name">角金 玄さん</p>
          <p>ゆすはら地域おこし協力隊</p>
        </ul>
        <ul>
          <img src="https://yusuhararemori.jp/img/top/people02.webp" />
          <p>自分のペースで山と向き合う</p>
          <p className="name">谷田 真吾さん</p>
          <p>個人事業主／CoMORI会長</p>
        </ul>
        <ul>
          <img src="https://yusuhararemori.jp/img/top/people03.webp" />
          <p>父親の背中を見て、家業を継ぐ決意</p>
          <p className="name">川上 政志さん</p>
          <p>川上木材代表／CoMORI副会長</p>
        </ul>
      </div>
      <button>
        <p>くらし一覧はこちら →</p>
      </button>
    </section>
  )
}

export default People
