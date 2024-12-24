import styled from 'styled-components'
import { misc, colors } from '@package/build-theme'

export const CardWrapper = styled.div`
  width: 375px;
  border: ${misc.border.base} solid ${colors.primary.base};

  /* Use border-radius from misc */
  border-radius: ${misc.borderRadius.base};
`
