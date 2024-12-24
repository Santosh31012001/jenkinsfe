import styled from 'styled-components'
import Menu from '@package/antd-wrapper/menu'
import { textSizes } from '@package/build-theme'

export const MenuWrapper = styled(Menu)`
  ${textSizes.BaseW2};
  margin-right: 14px;
  max-width: 1000px;
`
