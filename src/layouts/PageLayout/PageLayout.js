import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../components/Header'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div>
    <Header />
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
