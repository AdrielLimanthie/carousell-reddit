import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { ACTIONS } from '../../routes/Home/components/module'
import './Topic.scss'

const Topic = (props) => {
  if (props.empty) {
    return (
      <div className='topic'>There's currently no topic available to show.</div>
    )
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

Topic.propTypes = {
  empty: PropTypes.bool,
  id: PropTypes.number,
  name: PropTypes.string,
  point: PropTypes.number,
  upvoteTopic: PropTypes.func,
  downvoteTopic: PropTypes.func
}

const matchDispatchToProps = dispatch => {
  const actions = {
    upvoteTopic: ACTIONS.upvoteTopic,
    downvoteTopic: ACTIONS.downvoteTopic
  }
  return bindActionCreators(actions, dispatch)
}

export default connect(null, matchDispatchToProps)(Topic)
