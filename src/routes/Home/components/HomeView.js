import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Sidebar from '../../../components/Sidebar'
import TopicList from '../../../components/TopicList'
import './HomeView.scss'

class HomeView extends Component {
  static propTypes = {
    topics: PropTypes.object
  }

  constructor (props) {
    super(props)

    this.preprocessTopics = this.preprocessTopics.bind(this)
  }

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

  sortTopicsByPoint (topics) {
    return topics.sort((a, b) => b.point - a.point)
  }

  limitTopicsCount (topics, count) {
    return topics.slice(0, count)
  }

  preprocessTopics (topics) {
    let newTopics = this.transformTopicsToArray(topics)
    newTopics = this.sortTopicsByPoint(newTopics)
    return this.limitTopicsCount(newTopics, 20)
  }

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

const mapStateToProps = state => {
  return {
    topics: state.topic.topics
  }
}

export default connect(mapStateToProps, null)(HomeView)
