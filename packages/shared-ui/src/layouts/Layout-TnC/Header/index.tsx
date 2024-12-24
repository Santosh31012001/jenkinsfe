import Logo from './components/logo/logo'
import Items from './components/items/items'
import Utility from './components/utility/utility'

// import styles
import { HeaderWrapper } from './index.styles'

const HeaderANTD = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Items />
      <Utility />
    </HeaderWrapper>
  )
}

export default HeaderANTD
