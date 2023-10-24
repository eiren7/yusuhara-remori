const About = () => {
  return (
    <section className="about">
      <div className="about-title">
        <p>りもりについて</p>
      </div>

      <div className="about-item-container">
        <a href="https://yusuhararemori.jp/about.html">
          <button className="about-item">
            <img src="https://yusuhararemori.jp/img/top/category01.svg" />
            <p>ReMORIの取り組み</p>
          </button>
        </a>
        <a href="https://yusuhararemori.jp/training.html">
          <button className="about-item">
            <img src="https://yusuhararemori.jp/img/top/category02.svg" />
            <p>
              ゆすはら地域おこし
              <br />
              協力隊の特徴・制度
            </p>
          </button>
        </a>
        <a href="https://yusuhararemori.jp/member.html">
          <button className="about-item">
            <img src="https://yusuhararemori.jp/img/top/category03.svg" />
            <p>
              ゆすはら地域おこし
              <br />
              協力隊メンバー紹介
            </p>
          </button>
        </a>
      </div>
    </section>
  )
}

export default About
