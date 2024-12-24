import { colors, font, misc, textSizes } from '@package/build-theme'
import styled from 'styled-components'

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h2`
  font-size: ${font.fs32};
  margin: 20px;
`
export const Button = styled.button`
  width: 330px;
  height: 30px;
  margin: 25px;
  margin-bottom: 40px;
  border: ${misc.border.base} solid ${colors.black.base};
  border-radius: ${misc.borderRadius.base};
  background-color: ${colors.primary.base};
`

export const spanWrapper = styled.span`
  margin-top: 5px;
  margin-left: 30px;
`
export const ParaWrapper = styled.p`
  color: ${colors.primary.base};
  width: 330px;
  margin-left: 5px;
  font-size: ${textSizes.BaseW2};
`