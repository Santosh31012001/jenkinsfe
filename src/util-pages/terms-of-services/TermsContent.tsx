//package
import { PageCard } from '@package/shared-ui/src/page-card/PageCard'
// data
import termsOfService from '@/app/terms-of-services/data'

//styling
import * as S from './TermsContent.style'

const TermsContent: React.FC = () => {
  const renderContent = (content: string | Record<string, string>) => {
    if (typeof content === 'string') {
      return (
        <S.ContentContainer>
          {content.split('\n').map((paragraph, index) => (
            <S.Paragraph key={index}>{paragraph}</S.Paragraph>
          ))}
        </S.ContentContainer>
      )
    }

    return Object.entries(content).map(([key, value]) => (
      <div key={key}>
        <S.SubsectionTitle id={key}>{key}</S.SubsectionTitle>
        <S.Paragraph>{value}</S.Paragraph>
      </div>
    ))
  }

  return (
    <S.TermsContainer>
      <div>
        <S.Title>Terms of Service</S.Title>
        <S.LastUpdated>
          Last updated on {termsOfService.lastUpdated}
        </S.LastUpdated>
      </div>
      <div>
        {termsOfService.sections.map((section) => (
          <PageCard
            key={section.title}
            id={section.title.toLowerCase().replace(/\s+/g, '-')}
          >
            <div>
              <S.SectionTitle>{section.title}</S.SectionTitle>
              {section.content && renderContent(section.content)}
              {section.subsections && (
                <S.SubsectionContainer>
                  {section.subsections.map((subsection) => (
                    <div
                      key={subsection.title}
                      id={subsection.title.toLowerCase().replace(/\s+/g, '-')}
                    >
                      <S.SubsectionTitle>{subsection.title}</S.SubsectionTitle>

                      <ul>
                        <li>{renderContent(subsection.content)}</li>
                      </ul>
                    </div>
                  ))}
                </S.SubsectionContainer>
              )}
            </div>
          </PageCard>
        ))}
      </div>
    </S.TermsContainer>
  )
}

export default TermsContent
