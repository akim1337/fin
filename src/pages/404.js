import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiBugLine, RiSkullLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
        <RiSkullLine style={{
          fontSize: "128px",
          color: "var(--primary-color)"
        }}/>
        <h1>Неа, дружище, ты куда то не туда попал)</h1>
        <p>Вообще тут все просто, есть посты, и пару страниц ниочем. Так что это даже удивительно, как ты здесь оказался. Но не расстраивайся, держи подарочек:</p>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>На главную!</Link>
      <Link to="/contact" className="button -outline">Сообщить об ошибке<RiBugLine className="icon -right"/></Link>
    </div>
  </Layout>
)

export default NotFound
