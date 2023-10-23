const Footer = () => {
  return (
    <footer>
      <div className="copyright"><p>（C）Yusuhara Town All Rights Reserved</p></div>
      <div className="contact">
        <div className="logo">
          <img
            src="https://yusuhararemori.jp/img/common/head_logo.png"
            width={230}
          />
          <span>
            高知県梼原町
            <br />
            森林の文化創造推進課
          </span>
        </div>
        <div>
          <p>
            〒785-0695 <br />
            高知県高岡郡梼原町梼原1426番地2
            <br />
            地域活力センター「ゆすはら・夢・未来館」2階
          </p>
          <div className="tel-fax">
            <h2>TEL. 0889-65-0811</h2>
            <h4>FAX. 0889-65-0812</h4>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
