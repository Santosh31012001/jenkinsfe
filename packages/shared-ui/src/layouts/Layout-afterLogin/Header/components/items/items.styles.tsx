import styled from 'styled-components'
import Menu from '@package/antd-wrapper/menu'
import { textSizes } from '@package/build-theme'

import {
  MailOutlined,
  SettingOutlined,
  BellOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { font } from '@package/build-theme'

export const DivWrapper = styled.div`
  display: flex;
`

export const MenuWrapper = styled(Menu)`
  ${textSizes.BaseW3};
  margin-right: 14px;
  max-width: 1000px;
`
export const SettingOutlinedWrapper = styled(SettingOutlined)`
  font-size: ${font.fs22};
  margin: 10px;
  cursor: pointer;
`
export const BellOutlinedWrapper = styled(BellOutlined)`
  font-size: ${font.fs22};
  margin: 10px;
  cursor: pointer;
`
export const MailOutlinedWrapper = styled(MailOutlined)`
  font-size: ${font.fs22};
  margin: 10px;
  cursor: pointer;
`
export const UserOutlinedWrapper = styled(UserOutlined)`
  font-size: ${font.fs22};
  margin: 10px;
  cursor: pointer;
`
