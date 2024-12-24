import { ReactNode } from 'react'
// Import the styled component
import * as S from './RightScrollArea.style'

interface ScrollAreaProps {
  children: ReactNode
  className?: string
}

const RightScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  className = '',
}) => (
  <S.ScrollAreaContainer className={className}>
    {children}
  </S.ScrollAreaContainer>
)

export default RightScrollArea
