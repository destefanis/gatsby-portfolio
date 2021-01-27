import Transition from "./Transition"
import * as React from 'react'

const Layout = props => {
  return (
    <>
      <Transition {...props}>
          <main>{props.children}</main>
      </Transition>
    </>
  )
}

export default Layout
