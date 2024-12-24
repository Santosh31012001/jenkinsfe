import styled from 'styled-components'
import Layout from '@package/antd-wrapper/layout'
import { colors, misc } from '@package/build-theme'
const { Header } = Layout

export const HeaderWrapper = styled(Header)`
  position: sticky;
  top: 0;
  z-index: ${misc.zIndex.xxsmall};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary.light};
  border-bottom: 1px solid ${colors.border};
`
