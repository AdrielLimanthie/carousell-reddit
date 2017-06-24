// ------------------------------------
// Header Component
// ------------------------------------

// Import packages to be used
import React, { Component } from 'react'
import { IndexLink } from 'react-router'

// Import styles for Header
import './Header.scss'

// Define a new React component
class Header extends Component {
  // Render the Header
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

// Export this component
export default Header
