import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column; // flex-col
  width: 100%; // w-full

  @media (min-width: 1024px) {
    // lg:flex-row
    flex-direction: row;
  }
`
