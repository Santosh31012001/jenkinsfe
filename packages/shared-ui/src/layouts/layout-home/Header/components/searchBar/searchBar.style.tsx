import styled from 'styled-components'
import Input from '@package/antd-wrapper/input/input'
import Select from '@package/antd-wrapper/select'
import { colors, font } from '@package/build-theme'

// import icons
import { SearchOutlined } from '@ant-design/icons'

export const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  /* padding-bottom: 30px; */
`
export const InputWrapper = styled(Input)`
  width: 300px;
  color: ${colors.black.light};
  font-size: ${font.fs14};
`
export const SelectWrapper = styled(Select)`
  height: 49px;
  color: ${colors.black.light};
`

export const SearchOutlinedWrapper = styled(SearchOutlined)`
  margin-right: 7px;
  color: ${colors.black.light};
  font-size: ${font.fs18};
`
