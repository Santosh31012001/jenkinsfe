import styled from 'styled-components'
import { colors, misc } from '@package/build-theme'

export const DivWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
`

export const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: ${misc.zIndex.xxsmall};
  color: ${colors.primary.light};
`
export const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
