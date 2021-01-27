import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Checkout from '../components/checkout'

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h1>About</h1>
    <p>Details</p>
    <p>
    <Link to="/advanced/">Click here to to send us a message</Link>
      Otherwise please contact us using one of the following
      Phone: +1.470.825.1752
      Mail: 178 Baker Britt Rd Thomaston, GA 30286
      Email: admin@atl15.us
    </p>
  </Layout>
)

export default IndexPage
