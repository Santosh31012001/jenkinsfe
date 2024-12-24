// TableContent.js
import { useState } from 'react'
//packages
import RightScrollArea from '@package/shared-ui/src/right-scrollArea/RightScrollArea'
import privacyPolicyData from '@/app/privacy-policy/data'
//style
import * as S from './TableContent.style'

const TableContent: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)

  return (
    <S.Container>
      <S.StickyDiv>
        <S.Title>Questions</S.Title>
        <RightScrollArea>
          <S.ScrollArea>
            <S.QuestionList>
              {privacyPolicyData.questions.map((item, index) => (
                <div key={index}>
                  <S.QuestionLink
                    href={`#question-${index + 1}`}
                    selected={selectedQuestion === index}
                    onClick={() => setSelectedQuestion(index)}
                  >
                    {item.Question}
                  </S.QuestionLink>
                </div>
              ))}
            </S.QuestionList>
          </S.ScrollArea>
        </RightScrollArea>
      </S.StickyDiv>
    </S.Container>
  )
}
export default TableContent
