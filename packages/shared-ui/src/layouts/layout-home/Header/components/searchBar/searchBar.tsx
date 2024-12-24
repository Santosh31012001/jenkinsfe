import Space from '@package/antd-wrapper/space'

// import styles
import * as S from './searchBar.style'

const options = [
  {
    value: 'Delhi',
    label: 'Delhi',
  },
  {
    value: 'Mumbai',
    label: 'Mumbai',
  },
]

const SearchBar = () => {
  return (
    <S.DivWrapper>
      <Space.Compact>
        <S.SelectWrapper size="large" defaultValue="Delhi" options={options} />
        <S.InputWrapper
          size="large"
          defaultValue="Xihu District, Hangzhou"
          prefix={<S.SearchOutlinedWrapper />}
        />
      </Space.Compact>
    </S.DivWrapper>
  )
}

export default SearchBar
