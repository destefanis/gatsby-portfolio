import * as React from 'react'
import { motion, AnimatePresence } from "framer-motion"

// function PageWrapper(props) {
//   return (
//     <div>
//       <AnimatePresence>
//         {this.props.children}
//       </AnimatePresence>
//     </div>
//   )
// }

const PageWrapper = ({ element, props }, pluginOptions) => {
  return <div {...props}><AnimatePresence>{element}</AnimatePresence></div>
}

export default PageWrapper