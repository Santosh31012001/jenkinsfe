import {
  MailOutlined,
  SettingOutlined,
  BellOutlined,
  UserOutlined,
} from '@ant-design/icons'

const Utility = () => {
  return (
    <div style={{ display: 'flex' }}>
      <BellOutlined
        style={{ fontSize: '20px', margin: '10px', cursor: 'pointer' }}
      />
      <MailOutlined
        style={{ fontSize: '20px', margin: '10px', cursor: 'pointer' }}
      />
      <SettingOutlined
        style={{ fontSize: '20px', margin: '10px', cursor: 'pointer' }}
      />
      <UserOutlined
        style={{ fontSize: '20px', margin: '10px', cursor: 'pointer' }}
      />
    </div>
  )
}

export default Utility
