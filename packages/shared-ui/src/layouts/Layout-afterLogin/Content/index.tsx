import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

// Style package
import * as S from './index.styles'

interface SiderAntdProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const ContentAntd: React.FC<SiderAntdProps> = ({ collapsed, setCollapsed }) => {
  return (
    <S.ContentWrapper>
      <S.ButtonWrapper
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
      />
      <p>Content</p>
    </S.ContentWrapper>
  )
}

export default ContentAntd
