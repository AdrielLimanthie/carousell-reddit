import React from 'react'
import PropTypes from 'prop-types'

import Topic from '../Topic'

const TopicList = (props) => {
  if (props.topics.length) {
    return (
      <div className='mb-15'>
        {props.topics.map((val, i) => <Topic id={val.id} name={val.name} point={val.point} key={i} />)}
      </div>
    )
  } else {
    return (
      <div className='mb-15'>
        <Topic empty />
      </div>
    )
  }
}

TopicList.propTypes = {
  topics: PropTypes.array
}

export default TopicList
