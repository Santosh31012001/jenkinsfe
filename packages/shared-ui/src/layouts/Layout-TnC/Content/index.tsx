import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

// Style package
import { ContentWrapper, ButtonWrapper } from './index.styles'

interface SiderAntdProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const ContentAntd: React.FC<SiderAntdProps> = ({ collapsed, setCollapsed }) => {
  return (
    <ContentWrapper>
      <ButtonWrapper
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
      />
      <p>Content</p>
    </ContentWrapper>
  )
}

export default ContentAntd
