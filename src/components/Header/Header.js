import React, { Component } from 'react'
import { IndexLink } from 'react-router'

import './Header.scss'

class Header extends Component {
  render () {
    return (
      <header className='header'>
        <IndexLink to='/' activeClassName='header__link'>
          <h1>Reddit for Carousell</h1>
        </IndexLink>
      </header>
    )
  }
}

export default Header
