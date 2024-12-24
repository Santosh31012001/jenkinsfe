import Logo from './components/logo/logo'
import Items from './components/items/items'

// import styles
import { HeaderWrapper } from './index.styles'

const HeaderANTD = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Items />
    </HeaderWrapper>
  )
}

export default HeaderANTD
