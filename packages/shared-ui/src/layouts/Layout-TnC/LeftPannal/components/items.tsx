import Menu from '@package/antd-wrapper/menu'
import { MenuProps } from '@package/antd-wrapper/menu'

// Import Data
import { LeftPannalrData } from '../LeftPannalData'

type MenuItem = Required<MenuProps>['items'][number]
const items1: MenuItem[] = LeftPannalrData.map((e, i) => {
  return {
    key: i,
    icon: <e.preIcion />,
    label: e.title,
    children: e.subMenu?.map((subItems, j) => {
      return { key: j + subItems.title, label: subItems.title }
    }),
  }
})

const Items = () => {
  return (
    <>
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items1}
      />
    </>
  )
}

export default Items
