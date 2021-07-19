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
  toggleModal = ({ f1, f2 }) => {
    this.setState(prev => {
      return {
        modal: !prev.modal,
        locationFocus: !prev.locationFocus === f1,
        guestFocus: !prev.guestFocus === f2,
      }
    })
  }

  render() {
    return (
      <>
        <Modal
          show={this.state.modal}
          closeModal={this.toggleModal}
          location={this.state.locationFocus}
          guest={this.state.guestFocus}
        />
        <ModalBg modalBg={this.state.modal} />
        <div className="header">
          <div className="header__logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="header__search-bar">
            <div
              className="location"
              onClick={() => this.toggleModal({ f1: true })}
            >
              Helsinki, Finland
            </div>
            <span></span>
            <div
              className="guests"
              onClick={() => this.toggleModal({ f2: true })}
            >
              Add Guests
            </div>
            <span></span>
            <img src={Search} alt="Search" onClick={this.toggleModal} />
          </div>
        </div>
      </>
    )
  }
}

export default Header
