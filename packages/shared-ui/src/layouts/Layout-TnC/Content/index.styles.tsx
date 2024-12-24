import styled from 'styled-components'
import Layout from '@package/antd-wrapper/layout'
import Button from '@package/antd-wrapper/button'
import { font, colors } from '@package/build-theme'
const { Content } = Layout

export const ContentWrapper = styled(Content)`
  min-height: 620px;
  line-height: 120px;
  color: ${colors.primary.light};
  background-color: ${colors.primary.light};
`
export const ButtonWrapper = styled(Button)`
  position: fixed;
  font-size: ${font.fs16};
  width: 64px;
  height: 64px;
`
