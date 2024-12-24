import { colors, font, misc, textSizes } from '@package/build-theme'
import styled from 'styled-components'

export const registerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h2`
  font-size: ${font.fs32};
  margin: 15px;
  margin-bottom: -2px;
`
export const Button = styled.button`
  width: 330px;
  height: 30px;
  margin-top: -25px;
  margin-bottom: 30px;
  border: ${misc.border.base} solid ${colors.black.base};
  border-radius: ${misc.borderRadius.base};
  background-color: ${colors.primary.base};
`

export const ParaWrapper = styled.p`
  color: ${colors.primary.base};
  width: 330px;
  margin-left: 5px;
  margin-bottom: -5px;
  font-size: ${textSizes.BaseW2};
`
export const Highlight = styled.span`
  color: ${colors.warning};
  font-size: ${font.fs14};
`
