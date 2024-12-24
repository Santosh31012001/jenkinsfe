'use client'
// child components
import TermsContent from '@/util-pages/terms-of-services/TermsContent'
import TableContent from '@/util-pages/terms-of-services/content/TableContent'
// style
import * as S from './page.style'

const TermsOfServices: React.FC = () => (
  <S.Container>
    <TermsContent />
    <TableContent />
  </S.Container>
)

export default TermsOfServices
