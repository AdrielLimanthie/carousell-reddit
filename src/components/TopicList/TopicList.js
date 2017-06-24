// ------------------------------------
// Topic List Component
// ------------------------------------

// Import packages to be used
import React from 'react'
import PropTypes from 'prop-types'

// Import Topic component to contain data of each topic
import Topic from '../Topic'

// Define a new React component
const TopicList = (props) => {
  // If the list of topics is not empty (there is at least 1 topic in the state), render each topic as a Topic component
  if (props.topics.length) {
    return (
      <div className='mb-15'>
        {props.topics.map((val, i) => <Topic id={val.id} name={val.name} point={val.point} key={i} />)}
      </div>
    )
  // Otherwise, render an empty Topic component
  } else {
    return (
      <div className='mb-15'>
        <Topic empty />
      </div>
    )
  }
}

// Define types of props used in this component
TopicList.propTypes = {
  topics: PropTypes.array
}

// Export this component
export default TopicList
