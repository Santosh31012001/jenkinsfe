'use client'

import React, { useState } from 'react'
import Flex from '@package/antd-wrapper/flex'
import Layout from '@package/antd-wrapper/layout'

// component packages
import Header from './Header'
import LeftPannal from './LeftPannal'
import Footer from './Footer'
import ContentAntd from './Content'

// style package
import { LayoutWrapper } from './index.styles'

const LayoutANTD: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Flex gap="middle" wrap>
      <LayoutWrapper>
        <Header />
        <Layout>
          <LeftPannal collapsed={collapsed} />
          <ContentAntd collapsed={collapsed} setCollapsed={setCollapsed} />
        </Layout>
        <Footer />
      </LayoutWrapper>
    </Flex>
  )
}

export default LayoutANTD
