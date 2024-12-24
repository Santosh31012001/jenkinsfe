import React from 'react'
import Layout from '@package/antd-wrapper/layout'
import Card from '@package/antd-wrapper/card'
import { Row, Col } from '@package/antd-wrapper/grid'
import { FacebookOutlined } from '@ant-design/icons'
const { Footer } = Layout

// import data
import { FooterData } from './footerData'

// import styles
import { ButtonWrapper, ParaWrapper } from './index.styles'

const FooterANTD = () => {
  return (
    <Footer>
      <Row gutter={[16, 16]}>
        {FooterData.map((e, i) => {
          if (i === 3) {
            return (
              <Col xs={24} sm={12} md={8} lg={6} key={i + e.title}>
                <Card title={e.title} bordered={false}>
                  <p>{e.contactInfo?.email}</p>
                  <p>{e.contactInfo?.phoneNumbers[0]}</p>
                  <p>{e.contactInfo?.phoneNumbers[1]}</p>
                  {e.externalLinks?.map((ext, index) => (
                    <span style={{ margin: 10 }} key={index + ext.url}>
                      <a href={ext.url}>
                        <FacebookOutlined />
                      </a>
                    </span>
                  ))}
                </Card>
              </Col>
            )
          }
          return (
            <Col xs={24} sm={12} md={8} lg={6} key={i + e.title}>
              <Card title={e.title} bordered={false}>
                {e.description}
                {e.subLinks.map((ext, index) => (
                  <React.Fragment key={index + ext.title}>
                    <ButtonWrapper type="link" href={ext.url}>
                      {ext.title}
                    </ButtonWrapper>
                    <br />
                  </React.Fragment>
                ))}
              </Card>
            </Col>
          )
        })}
      </Row>
      <ParaWrapper>
        &copy; Copyright Reserved to <strong>Clouplay Solutions</strong>
      </ParaWrapper>
    </Footer>
  )
}

export default FooterANTD
