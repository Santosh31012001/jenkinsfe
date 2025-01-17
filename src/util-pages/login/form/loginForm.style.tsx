import { colors, misc, spacing, textSizes } from '@package/build-theme'
import styled from 'styled-components'

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const LabelWrapper = styled.label`
  color: ${colors.text};
  margin: 5px;
  margin-bottom: -5px;
`

export const InputFieldWrapper = styled.div`
  width: 330px;
  margin-left: -5px;
  margin-bottom: 10px;
  padding: ${spacing.small};
  borderradius: ${misc.border.base};
`
export const WarningWrapper = styled.p`
  color: ${colors.warning};
  width: 330px;
  margin-top: 2px;
  margin-bottom: 5px;
  font-size: ${textSizes.BaseW1};
`

export const spanWrapper = styled.span`
  margin-top: 7px;
  margin-left: 98px;
`
export const Highlight = styled.span`
  color: ${colors.warning};
`
