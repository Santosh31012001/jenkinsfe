import styled from 'styled-components'
import Layout from '@package/antd-wrapper/layout'
import Button from '@package/antd-wrapper/button'
const { Content } = Layout
import { font, colors } from '@package/build-theme'

export const ContentWrapper = styled(Content)`
  min-height: 620px;
  line-height: 120px;
  color: ${colors.primary.light};
  background-color: ${colors.primary.light};
`
export const ButtonWrapper = styled(Button)`
  position: fixed;
  font-size: ${font.fs14};
  width: 64px;
  height: 64px;
`
