import { colors } from '@package/build-theme'
import styled from 'styled-components'

export const ScrollAreaContainer = styled.div<{ className?: string }>`
  overflow-y: auto;
  padding: 16px;
  max-height: calc(100vh - 200px);
  border-left: 2px solid ${colors.secondary.light};
`
