import React from 'react'
import Logo from '../images/logo.svg'
import Search from '../images/search.svg'
import Modal from './Modal'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      modal: false,
    }
  }
  openModal = () => {
    this.setState(prev => {
      return {
        modal: !prev.modal,
      }
    })
  }
  render() {
    console.log(this.state.modal)
    return this.state.modal ? 
        <Modal style={{ display: 'flex' }} />  : 
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
            <img src={Search} alt="Search" onClick={this.openModal} />
          </div>
        </div>
  }
}

export default Header
