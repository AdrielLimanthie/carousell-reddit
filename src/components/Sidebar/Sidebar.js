import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { ACTIONS } from '../../routes/Home/components/module'
import './Sidebar.scss'

class Sidebar extends Component {
  static propTypes = {
    addTopic: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      formActive: false,
      topicName: ''
    }

    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleSubmitTopic = this.handleSubmitTopic.bind(this)
  }

  handleStateChange (key, value, callback = () => {}) {
    this.setState({ [key]: value }, callback)
  }

  handleSubmitTopic (topic) {
    this.handleStateChange('formActive', false)
    this.handleStateChange('topicName', '')
    this.props.addTopic(topic)
  }

  render () {
    return (
      <div className='sidebar'>
        <button className='button button--primary'
          onClick={() => {
            this.handleStateChange('formActive', true, () => { this.nameInput.focus() })
          }}>
          Add a Topic
        </button>
        <div className={'sidebar__form' + (this.state.formActive ? 'active' : '')}>
          <hr />
          <h6>Name of the Topic</h6>
          <input type='text'
            className='input mb-15'
            value={this.state.topicName}
            onChange={e => { this.handleStateChange('topicName', e.target.value) }}
            onKeyPress={e => e.key === 'Enter' && this.handleSubmitTopic(this.state.topicName)}
            ref={ref => { this.nameInput = ref }} />
          <button className='button button--primary'
            onClick={() => { this.handleSubmitTopic(this.state.topicName) }}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

const matchDispatchToProps = dispatch => {
  const actions = {
    addTopic: ACTIONS.addTopic
  }
  return bindActionCreators(actions, dispatch)
}

export default connect(null, matchDispatchToProps)(Sidebar)
