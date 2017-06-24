import React from 'react'

import Sidebar from '../../../components/Sidebar'
import TopicList from '../../../components/TopicList'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <div className='column column--main'>
      <TopicList />
    </div>
    <div className='column column--side'>
      <Sidebar />
    </div>
  </div>
)

export default HomeView
