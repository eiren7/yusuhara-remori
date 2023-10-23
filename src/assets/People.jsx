const People = () => {
  return (
    <section className="people">
      <div className="people-title">
        <h2>りもりの暮らし</h2>
        <p>LIFE</p>
        <span>高知県梼原町では、私たちと一緒に、</span>
        <span>未来の森林づくりをしてくれる仲間を募集しています。</span>
      </div>

      <div className="people-column">
        <ul>
          <img src="https://yusuhararemori.jp/img/top/people01.webp" />
          <p>森林の神秘と美しい街並みに惹かれて</p>
          <h2>角金 玄さん</h2>
          <p>ゆすはら地域おこし協力隊</p>
        </ul>
        <ul>
          <img src="https://yusuhararemori.jp/img/top/people02.webp" />
          <p>自分のペースで山と向き合う</p>
          <h2>谷田 真吾さん</h2>
          <p>個人事業主／CoMORI会長</p>
        </ul>
        <ul>
          <img src="https://yusuhararemori.jp/img/top/people03.webp" />
          <p>父親の背中を見て、家業を継ぐ決意</p>
          <h2>川上 政志さん</h2>
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
