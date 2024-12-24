import styled from 'styled-components'
import Layout from '@package/antd-wrapper/layout'
import { colors } from '@package/build-theme'
const { Sider } = Layout

const SiderWrapper = styled(Sider)`
  height: calc(100vh - 65px);
  position: fixed;
  inset-inline-start: 0;
  bottom: 0;
  top: 65px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: unset;
  background-color: ${colors.primary.light};
`

export default SiderWrapper
