import "./App.css"
import About from "./assets/About"
import People from "./assets/People"
import Header from "./assets/Header"
import Banner from "./assets/Banner"
import Footer from "./assets/Footer"
import Entry from "./assets/Entry"

const App = () => {
  return (
    <div>
      <div className="viewport">
        <div className="navigation">
          <Header />
        </div>
        <div className="content">
          <p style={{ color: "darkgreen" }}>
            WARNING! This is a copysite of https://yusuhararemori.jp/index.html.
            <br />
            All Rights belong to the original creator and Yusuhara Town.
          </p>
          <Banner />
          <About />
          <People />
          <Entry />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
