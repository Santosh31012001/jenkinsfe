import styled from 'styled-components'
import { colors, headingSizes } from '@package/build-theme'

export const DivWrapper = styled.div`
  color: ${colors.primary.light};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const H1Wrapper = styled.h1`
  margin: 0;
  font-family: cursive;
  ${headingSizes.xLarge};
`
export const ParaWrapper = styled.p`
  margin-top: 0;
`
