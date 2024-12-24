'use client'

//components
import PrivacyContent from '@/util-pages/privacy-policy/privacyContent'
import TableContent from '@/util-pages/privacy-policy/tableContent/TableContent'
//style
import * as S from './page.style'

const PrivacyPage: React.FC = () => (
  <S.Container>
    <PrivacyContent />
    <TableContent />
  </S.Container>
)

export default PrivacyPage
