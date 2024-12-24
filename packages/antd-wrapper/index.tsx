'use client'
import { ReactNode } from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'

interface AntdWrapperProps {
  children: ReactNode
}

const AntdWrapper: React.FC<AntdWrapperProps> = ({ children }) => {
  return <AntdRegistry>{children}</AntdRegistry>
}

export default AntdWrapper
