import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1024px) {
    // lg:flex-row
    flex-direction: row;
  }
`
