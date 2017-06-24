// ------------------------------------
// Topic Component
// ------------------------------------

// Import packages to be used
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

// Import Redux actions for modifying topics & styles for Topic
import { ACTIONS } from '../../routes/Home/components/module'
import './Topic.scss'

// Define a new React component
const Topic = (props) => {
  // If specified as an empty topic, show a message instead
  if (props.empty) {
    return (
      <div className='topic'>There's currently no topic available to show.</div>
    )
  // Otherwise, show the topic with its name, point, and buttons to upvote/downvote
  } else {
    return (
      <div className='topic mb-15'>
        <div className='topic__point'>{props.point}</div>
        <div className='topic__button'>
          <a className='topic__vote' onClick={() => { props.upvoteTopic(props.id) }}>&#9650;</a>
          <a className='topic__vote' onClick={() => { props.downvoteTopic(props.id) }}>&#9660;</a>
        </div>
        <div className='topic__name'>{props.name}</div>
      </div>
    )
  }
}

// Define types of props used in this component
Topic.propTypes = {
  empty: PropTypes.bool,
  id: PropTypes.number,
  name: PropTypes.string,
  point: PropTypes.number,
  upvoteTopic: PropTypes.func,
  downvoteTopic: PropTypes.func
}

// Mapping of Redux actions into this component's props
const matchDispatchToProps = dispatch => {
  const actions = {
    upvoteTopic: ACTIONS.upvoteTopic,
    downvoteTopic: ACTIONS.downvoteTopic
  }
  return bindActionCreators(actions, dispatch)
}

// Export this component & connect it to Redux store
export default connect(null, matchDispatchToProps)(Topic)
