'use client'

import React, { useState } from 'react'

// component packages
import Header from './Header'
import LeftPannal from './LeftPannal'
import Footer from './Footer'
import ContentAntd from './Content'
import Layout from '@package/antd-wrapper/layout'
import Flex from '@package/antd-wrapper/flex'

// style package
import * as S from './index.styles'

const LayoutANTD: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Flex gap="middle" wrap>
      <S.LayoutWrapper>
        <Header />
        <Layout>
          <LeftPannal collapsed={collapsed} />
          <Layout
            style={
              collapsed ? { marginInlineStart: 80 } : { marginInlineStart: 200 }
            }
          >
            <ContentAntd collapsed={collapsed} setCollapsed={setCollapsed} />
            <Footer />
          </Layout>
        </Layout>
      </S.LayoutWrapper>
    </Flex>
  )
}

export default LayoutANTD
