import styled from 'styled-components'
import Button from '@package/antd-wrapper/button'
import { colors, textSizes } from '@package/build-theme'

export const DivWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 13px 50px 13px 0;
`
export const ButtonWrapper = styled(Button)`
  ${textSizes.BaseW3};
  color: ${colors.primary.light};
`
