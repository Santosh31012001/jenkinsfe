// Styled component
import { colors, misc } from '@package/build-theme'
import styled from 'styled-components'

export const StyledCard = styled.div<{ className?: string }>`
  border-radius: ${misc.borderRadius.base};
  border: 1px solid ${colors.secondary.light};
  box-shadow: 0 1px 1px ${colors.primary.lighter};
  display: flex;
  gap: 50px;
  margin-bottom: 10px;
  padding: 5px;
  padding-left: 10px;
`
