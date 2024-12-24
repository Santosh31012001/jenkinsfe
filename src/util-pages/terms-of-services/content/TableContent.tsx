import React, { useState } from 'react'
// packages
import RightScrollArea from '@package/shared-ui/src/right-scrollArea/RightScrollArea'
// data
import termsOfService from '@/app/terms-of-services/data'
// style
import * as S from './TableContent.style'

const TableContent: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [selectedSubSection, setSelectedSubSection] = useState<string | null>(
    null
  )

  const handleSectionClick = (title: string) => {
    setSelectedSection(title)
    setSelectedSubSection(null)
  }

  const handleSubSectionClick = (title: string) => {
    setSelectedSubSection(title)
  }

  return (
    <S.Container>
      <S.StickyHeader>
        <S.Header>On this page</S.Header>
        <RightScrollArea>
          <S.ScrollArea>
            <S.Nav>
              {termsOfService.sections.map((section) => (
                <div key={section.title}>
                  <S.NavLink
                    href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                    selected={
                      selectedSection === section.title && !selectedSubSection
                    }
                    onClick={() => handleSectionClick(section.title)}
                  >
                    {section.title}
                  </S.NavLink>
                  {section.subsections && (
                    <S.SubNav>
                      {section.subsections.map((subsection) => (
                        <S.NavLink
                          key={subsection.title}
                          href={`#${subsection.title
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`}
                          selected={selectedSubSection === subsection.title}
                          onClick={() =>
                            handleSubSectionClick(subsection.title)
                          }
                        >
                          <S.list>
                            <li>{subsection.title}</li>
                          </S.list>
                        </S.NavLink>
                      ))}
                    </S.SubNav>
                  )}
                </div>
              ))}
            </S.Nav>
          </S.ScrollArea>
        </RightScrollArea>
      </S.StickyHeader>
    </S.Container>
  )
}

export default TableContent
