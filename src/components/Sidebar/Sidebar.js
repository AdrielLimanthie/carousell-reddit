// ------------------------------------
// Sidebar Component
// ------------------------------------

// Import packages to be used
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

// Import Redux actions for modifying topics & styles for Sidebar
import { ACTIONS } from '../../routes/Home/components/module'
import './Sidebar.scss'

// Define a new React component
class Sidebar extends Component {
  // Define types of props used in this component
  static propTypes = {
    addTopic: PropTypes.func
  }

  // Define a constructor for this component
  constructor (props) {
    super(props)

    this.state = {
      formActive: false,
      topicName: ''
    }

    // Bind functions to Sidebar component (due to JavaScript's scope behaviour)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleSubmitTopic = this.handleSubmitTopic.bind(this)
  }

  // Function to handle simple changes to this component's state
  handleStateChange (key, value, callback = () => {}) {
    this.setState({ [key]: value }, callback)
  }

  // Function to handle when the user submit a new topic
  handleSubmitTopic (topic) {
    this.handleStateChange('formActive', false)
    this.handleStateChange('topicName', '')
    this.props.addTopic(topic)
  }

  // Render the buttons & text input to add a new topic
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
            maxLength={255}                 // Limit the topic string to 255 characters
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

// Mapping of Redux actions into this component's props
const matchDispatchToProps = dispatch => {
  const actions = {
    addTopic: ACTIONS.addTopic
  }
  return bindActionCreators(actions, dispatch)
}

// Export this component & connect it to Redux store
export default connect(null, matchDispatchToProps)(Sidebar)
