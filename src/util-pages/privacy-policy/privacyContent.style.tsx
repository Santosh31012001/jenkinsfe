import { colors, font, misc, spacing } from '@package/build-theme'
import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  padding: 24px;
  margin: 0;
`

export const Title = styled.h1`
  font-size: ${font.fs32};
  font-weight: ${font.fwBold};
  letter-spacing: -0.01562 * ${spacing.small} + 'rem';
`

export const LastUpdated = styled.p`
  margin-top: 8px;
`

export const QuestionList = styled.div`
  margin-top: 24px;
`

export const QuestionTitle = styled.h2`
  font-size: ${font.fs24};
  font-weight: ${font.fwSemiBold};
  margin-bottom: 16px;
`

export const AnswerContainer = styled.div`
  margin: 20px;
`

export const AnswerText = styled.p`
  font-size: ${font.fs16};
  color: ${colors.text};
  margin: 20px;
`

export const SubAnswerText = styled.p`
  font-size: ${font.fs14};
  color: ${colors.text};
  margin: 20px;
`

export const KeyLabel = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: ${misc.borderRadius.base};
  background-color: ${colors.primary.base};
  padding: 4px 8px;
  font-size: ${font.fs12};
  font-weight: ${font.fwMedium};
  color: ${colors.text};
`

export const AnswerKeysContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`
export const ListAnswer = styled.li`
  margin: 15px;
`
