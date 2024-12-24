// import icons
import { UserOutlined, DownOutlined } from '@ant-design/icons'

// import styles
import * as S from './topBar.styles'

const TopBar = () => {
  return (
    <S.DivWrapper>
      <S.ButtonWrapper type="link">Add Restaurant</S.ButtonWrapper>
      <S.ButtonWrapper type="link">
        <UserOutlined /> John <DownOutlined style={{ fontSize: '15px' }} />
      </S.ButtonWrapper>
    </S.DivWrapper>
  )
}

export default TopBar
