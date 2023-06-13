import Header from '../Header/Header'
import styles from './DefaultLayout.module.scss'

import { ReactNode } from 'react'
type Props = {
  children: ReactNode
}
function DefaultLayout({ children }: Props) {
  return (
    <div>
      <Header></Header>
      <div> {children}</div>
    </div>
  )
}

export default DefaultLayout
