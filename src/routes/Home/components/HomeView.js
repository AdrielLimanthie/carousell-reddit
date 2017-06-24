// ------------------------------------
// Main Component for Home page
// ------------------------------------

// Import packages to be used
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Also imports required components & files from other folder
import Sidebar from '../../../components/Sidebar'
import TopicList from '../../../components/TopicList'
import './HomeView.scss'

// Define a new React component
class HomeView extends Component {
  // Define types of props used in this component
  static propTypes = {
    topics: PropTypes.object
  }

  // Define a constructor for this component
  constructor (props) {
    super(props)

    // Bind functions to HomeView component (due to JavaScript's scope behaviour)
    this.preprocessTopics = this.preprocessTopics.bind(this)
  }

  // Function to transform list of topics from Object to Array
  transformTopicsToArray (obj) {
    const ids = Object.keys(obj)
    let arr = ids.map(id => {
      return {
        id: id,
        name: obj[id].name,
        point: obj[id].point
      }
    })
    return arr
  }

  // Function to sort topics from the highest point to the lowest
  sortTopicsByPoint (topics) {
    return topics.sort((a, b) => b.point - a.point)
  }

  // Function to limit the number of topics shown in the page
  limitTopicsCount (topics, count) {
    return topics.slice(0, count)
  }

  // Function to perform all the preprocessing
  preprocessTopics (topics) {
    let newTopics = this.transformTopicsToArray(topics)
    newTopics = this.sortTopicsByPoint(newTopics)
    return this.limitTopicsCount(newTopics, 20)           // limit topics count to maximum of 20
  }

  // Render Sidebar & Topic List with the preprocessed data
  render () {
    return (
      <div>
        <div className='column column--main'>
          <TopicList topics={this.preprocessTopics(this.props.topics)} />
        </div>
        <div className='column column--side'>
          <Sidebar />
        </div>
      </div>
    )
  }
}

// Mapping of Redux state into this component's props
const mapStateToProps = state => {
  return {
    topics: state.topic.topics
  }
}

// Export this component & connect it to Redux store
export default connect(mapStateToProps, null)(HomeView)
