import Button from '@package/antd-wrapper/button'
import styled from 'styled-components'
import { font, colors } from '@package/build-theme'

export const ButtonWrapper = styled(Button)`
  padding: 0;
  color: ${colors.black.dark};
`
export const ParaWrapper = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: ${font.xsmall};
`
