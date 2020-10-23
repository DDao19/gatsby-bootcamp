import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>The Great Gatsby</h1>
      <h2>I'm Dung Dao, a full-stack developer living in Dallas, Tx.</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
};


export default IndexPage
