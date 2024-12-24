import { colors, font, misc } from '@package/build-theme'
import styled from 'styled-components'

export const logininternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const loginHeading = styled.h2`
  font-size: ${font.fs32};
  margin: 20px;
  margin-top: 25px;
  margin-bottom: 30px;
`
export const Button = styled.button`
  width: 325px;
  height: 30px;
  margin: 20px;
  margin-bottom: 10px;
  border: ${misc.border.base} solid ${colors.black.base};
  border-radius: ${misc.borderRadius.base};
  background-color: ${colors.primary.base};
`

export const spanWrapper1 = styled.span`
  margin: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const Highlight = styled.span`
  color: ${colors.warning};
  margin-top: 10px;
`
