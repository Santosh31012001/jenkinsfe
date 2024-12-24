import type { MenuProps } from '@package/antd-wrapper/menu'

// import styles
import * as S from './items.styles'

// Import Data
import { LeftPannalrData } from '../../LeftPannalData'

type MenuItem = Required<MenuProps>['items'][number]
const items1: MenuItem[] = LeftPannalrData.map((e, i) => {
  return {
    key: i + e.title,
    icon: <e.preIcion />,
    label: e.title,
    children: e.subMenu?.map((subItems) => {
      return { key: Math.random(), label: subItems.title }
    }),
  }
})

const Items = () => {
  return (
    <>
      <div className="demo-logo-vertical" />
      <S.MenuWrapper
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items1}
      />
    </>
  )
}

export default Items
