// import styles
import { MenuWrapper } from './items.styles'

// import data
import { HeaderData } from '../../headerData'

const getMenuItems = () => {
  return HeaderData.map((element, index) => {
    if (index === 1) {
      return {
        key: index + element.title,
        label: element.title,
        children: element.subMenu.map((e, i) => {
          return {
            key: i + e.title,
            label: (
              <a href={e.link} target="_blank" rel="noopener noreferrer">
                {e.title}
              </a>
            ),
          }
        }),
      }
    }
    return {
      key: index + element.title,
      label: element.title,
    }
  })
}

const Items = () => {
  return (
    <div>
      <MenuWrapper
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        items={getMenuItems()}
      />
    </div>
  )
}

export default Items
