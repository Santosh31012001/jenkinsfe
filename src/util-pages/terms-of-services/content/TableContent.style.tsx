import { colors, headingSizes, spacing, textSizes } from '@package/build-theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 20rem;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`

export const StickyHeader = styled.div`
  position: sticky;
  top: 1rem;
`

export const Header = styled.h2`
  font-size: ${headingSizes.MediumW1};
  margin-bottom: 16px;
`

export const ScrollArea = styled.div`
  height: calc(100vh - 100px); /* h-[calc(100vh-100px)] */
  overflow-y: auto;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
`

interface QuestionLinkProps {
  selected?: boolean
}
export const NavLink = styled.a<QuestionLinkProps>`
  display: block;
  font-size: ${textSizes.BaseW2};
  color: ${({ selected }) => (selected ? colors.error : colors.text)};

  padding: 4px 8px;
  border-radius: 4px;
  transition:
    color 0.2s,
    background-color 0.2s;
  text-decoration: none;
  &:hover {
    color: ${({ selected }) =>
      selected ? colors.error : colors.secondary.base};
  }
`

export const SubNav = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
`
export const list = styled.ul`
  margin-bottom: -10px;
`
