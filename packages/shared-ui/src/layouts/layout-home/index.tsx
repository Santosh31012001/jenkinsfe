'use client'
import React from 'react'
import Layout from '@package/antd-wrapper/layout'

import Header from './Header'
import Content from './Content'
import Footer from './Footer/index'

const LayoutAntd = () => {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  )
}

export default LayoutAntd
