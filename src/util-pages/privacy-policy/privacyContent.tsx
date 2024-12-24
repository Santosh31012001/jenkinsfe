'use client'
// packages
import { PageCard } from '@package/shared-ui/src/page-card/PageCard'

// data imported
import privacyPolicyData from '@/app/privacy-policy/data'

// styling
import * as S from './privacyContent.style'

const PrivacyContent: React.FC = () => (
  <S.Container>
    <div>
      <S.Title>{privacyPolicyData.mainHeading}</S.Title>
      <S.LastUpdated>
        Last updated on {privacyPolicyData.questions[1].res.ans}
      </S.LastUpdated>
    </div>
    <S.QuestionList>
      {privacyPolicyData.questions.map((item, index) => (
        <PageCard key={index} id={`question-${index + 1}`}>
          <div>
            <S.QuestionTitle>{item.Question}</S.QuestionTitle>
            <S.AnswerContainer>
              <S.AnswerText>{item.res.ans}</S.AnswerText>
              {item.res.subans && item.res.subans.length > 0 && (
                <S.SubAnswerText>
                  <ul>
                    {item.res.subans.map((subAnswer, subIndex) => (
                      <S.ListAnswer key={subIndex}>{subAnswer}</S.ListAnswer>
                    ))}
                  </ul>
                </S.SubAnswerText>
              )}
              {item.res.ansKeys && (
                <S.AnswerKeysContainer>
                  {item.res.ansKeys.split(', ').map((key, keyIndex) => (
                    <S.KeyLabel key={keyIndex}>{key}</S.KeyLabel>
                  ))}
                </S.AnswerKeysContainer>
              )}
            </S.AnswerContainer>
          </div>
        </PageCard>
      ))}
    </S.QuestionList>
  </S.Container>
)

export default PrivacyContent
