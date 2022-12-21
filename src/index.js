import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"
import { ReactComponent as Real } from "./assets/icons/30.svg"
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div>
    <Header />
    <Main Icon={<Real />} name="Xudish" surname="test" age={5} />
    <Real />
    <Main name="Roma" surname="test1" age={6} />
    <Main name="Umid" surname="tes2" age={7} />
    <Main name="Axmadali" surname="test3" age={55} />
    <Footer />
  </div>
)
