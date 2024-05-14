import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forward Division Producer</title>
        <meta property="og:title" content="Forward Division Producer" />
      </Helmet>
    </div>
  )
}

export default Home
