import { colors, font } from '@package/build-theme'
import styled from 'styled-components'

interface QuestionLinkProps {
  selected: boolean
}

export const Container = styled.div`
  width: 20rem;
  flex-shrink: 0;
  padding: 24px;
`

export const StickyDiv = styled.div`
  position: sticky;
  top: 1rem;
`

export const Title = styled.h2`
  font-weight: ${font.fwSemiBold};
  margin-bottom: 16px;
`

export const ScrollArea = styled.div`
  height: calc(100vh - 100px);
`

export const QuestionLink = styled.a<QuestionLinkProps>`
  display: block;
  font-size: ${font.fs14};
  color: ${({ selected }) => (selected ? colors.error : colors.text)};
  transition: color 0.2s;
  text-decoration: none;
  &:hover {
    color: ${colors.secondary.base};
  }
`

export const QuestionList = styled.div`
  margin-top: 16px;
  & > div {
    margin-bottom: 16px;
  }
`
