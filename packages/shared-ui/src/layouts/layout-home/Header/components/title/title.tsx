import * as S from './title.styles'

const Title = ({
  title = 'Restaurant',
  desc = 'Discover the best food & drinks in Delhi',
}) => {
  return (
    <S.DivWrapper>
      <S.H1Wrapper>{title}</S.H1Wrapper>
      {desc && <S.ParaWrapper>{desc}</S.ParaWrapper>}
    </S.DivWrapper>
  )
}
export default Title
