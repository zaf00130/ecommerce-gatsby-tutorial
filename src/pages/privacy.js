import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Checkout from '../components/checkout'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Help</h1>
    <p>If you need help please contact using a method listed below</p>
    <Link to="/support/">Support</Link>
    <Link to="/terms/">Terms</Link>
    <Link to="/about/">About</Link>
    <Link to="/privacy/">Privacy</Link>
    <p>
      Follow{' '}
      <a href="https://www.gatsbyjs.org/tutorial/ecommerce-tutorial/">
        this tutorial
      </a>{' '}
      to build your own.
    </p>
    <Checkout />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/advanced/">Go to the advanced example</Link>
  </Layout>
)

export default IndexPage
