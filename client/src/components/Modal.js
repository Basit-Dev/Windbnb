import React from 'react'
import Search from '../images/search_white.svg'
import Header from './Header'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }
  }
  closeModal = () => {
    this.setState(prev => {
      return {
        modal: !prev.modal,
      }
    })
  }
  render() {
    return this.state.modal ? 
        <Header /> :
      <div className="modal" style={this.props.style}>
        <input
          className="modal__input"
          type="text"
          // value=""
          placeholder="LOCATION"
          onChange={null}
        />
        <span></span>
        <input
          className="modal__input"
          type="text"
          // value=""
          placeholder="GUEST"
          onChange={null}
        />
        <span></span>
        <button>
          <img src={Search} alt="Search" onClick={null} />
          Search
        </button>
        <span onClick={this.closeModal} className="close">
          &times;
        </span>
        </div>
  }
}

export default Modal
