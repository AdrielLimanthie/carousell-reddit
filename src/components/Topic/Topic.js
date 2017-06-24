import React from 'react'
import PropTypes from 'prop-types'

import './Topic.scss'

const Topic = (props) => {
  if (props.empty) {
    return (
      <div className='topic'>There's currently no topic available to show.</div>
    )
  } else {
    return (
      <div className='mb-15'>
        Topic
      </div>
    )
  }
}

Topic.propTypes = {
  empty: PropTypes.bool
}

export default Topic
