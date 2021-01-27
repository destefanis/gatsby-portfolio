import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from './Layout.js'

const PageWrapper = ({ element, props }, pluginOptions) => {
  return <Layout {...props}>{element}</Layout>
}

export default PageWrapper