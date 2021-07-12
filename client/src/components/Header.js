import React from 'react'
import Logo from './images/logo.svg'
import Search from './images/search.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header__search-bar">
        <div className="location" onClick={null}>
          Helsinki, Finland
        </div>
        <span></span>
        <div className="guests" onClick={null}>
          Add Guests
        </div>
        <span></span>
        <img src={Search} alt="Search" onClick={null} />
      </div>
    </div>
  )
}

export default Header
