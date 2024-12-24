import styled from 'styled-components'
import Layout from '@package/antd-wrapper/layout'
import { colors } from '@package/build-theme'
const { Sider } = Layout

const SiderWrapper = styled(Sider)`
  height: 620px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: unset;
  background-color: ${colors.primary.light};
`

export default SiderWrapper
