const About = () => {
  return (
    <section className="about">
      <div className="about-title">
        <p className="subtitle">ABOUT</p>
        <p>りもりについて</p>
      </div>

      <div className="about-item-container">
        <button className="about-item">
          <img src="https://yusuhararemori.jp/img/top/category01.svg" />
          <p>ReMORIの取り組み</p>
        </button>
        <button className="about-item">
          <img src="https://yusuhararemori.jp/img/top/category02.svg" />
          <p>
            ゆすはら地域おこし
            <br />
            協力隊の特徴・制度
          </p>
        </button>
        <button className="about-item">
          <img src="https://yusuhararemori.jp/img/top/category03.svg" />
          <p>
            ゆすはら地域おこし
            <br />
            協力隊メンバー紹介
          </p>
        </button>
      </div>
    </section>
  )
}

export default About
