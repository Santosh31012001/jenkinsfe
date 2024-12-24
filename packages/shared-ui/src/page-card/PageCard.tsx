import React, { ReactNode } from 'react'
import * as S from './PageCard.style'

interface CardProps {
  children: ReactNode
  className?: string
  id?: string
}

export const PageCard: React.FC<CardProps> = ({ children, className, id }) => (
  <S.StyledCard id={id} className={className}>
    {children}
  </S.StyledCard>
)
