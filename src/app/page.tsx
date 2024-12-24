import Home from '@/util-pages/home/home'

import { Layout } from '@package/shared-ui/src'

// style-package
import GlobalStyle from './global.styles'

const HomeRoot = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Layout />
    </>
  )
}

export default HomeRoot
