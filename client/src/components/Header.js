import React from 'react'
import Logo from '../images/logo.svg'
import Search from '../images/search.svg'
import Modal from './Modal'
import ModalBg from './ModalBg'

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
    let change = true
    return (
      <>
        <Modal
          show={this.state.modal}
          closeModal={this.openModal}
          focusLocation={change}
        />
        <ModalBg modalBg={this.state.modal} />
        <div className="header">
          <div className="header__logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="header__search-bar">
            <div className="location" onClick={this.openModal}>
              Helsinki, Finland
            </div>
            <span></span>
            <div className="guests" onClick={this.openModal}>
              Add Guests
            </div>
            <span></span>
            <img src={Search} alt="Search" onClick={this.openModal} />
          </div>
        </div>
      </>
    )
  }
}

export default Header
