import Items from './components/items/items'

// import styles
import SiderWrapper from './index.styles'

// type interface
interface SiderAntdProps {
  collapsed: boolean
}

const LeftPannal: React.FC<SiderAntdProps> = ({ collapsed }) => {
  return (
    <SiderWrapper trigger={null} collapsible collapsed={collapsed}>
      <Items />
    </SiderWrapper>
  )
}

export default LeftPannal
