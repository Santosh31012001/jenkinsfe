import { colors, headingSizes, textSizes } from '@package/build-theme'
import styled from 'styled-components'

export const TermsContainer = styled.div`
  flex: 1;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px;
  }
`

export const Title = styled.h1`
  font-size: ${headingSizes.xLarge};
  margin-bottom: 16px;
`

export const LastUpdated = styled.p`
  font-size: ${textSizes.BaseW1};
  color: ${colors.text};
  margin-top: 8px;
`

export const SectionTitle = styled.h2`
  font-size: ${headingSizes.Large};
  margin-bottom: 16px;
`

export const SubsectionTitle = styled.h3`
  font-size: ${headingSizes.MediumW1};
  margin-bottom: 12px;
`
export const Paragraph = styled.p`
  margin-bottom: 16px;
  font-size: ${textSizes.MediumW1};
`

export const SubsectionContainer = styled.div`
  margin-top: 16px;
  padding-left: 16px;
  flex-direction: column;
`

export const ContentContainer = styled.div`
  white-space: pre-wrap;
`
