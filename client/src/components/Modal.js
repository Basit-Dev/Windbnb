import React from 'react'
import Search from '../images/search_white.svg'

class Modal extends React.Component {
  render() {
    return this.props.show ? (
      <div className="modal">
        <input
          className="modal__input"
          type="text"
          // value=""
          placeholder="LOCATION"
          onChange={null}
          autoFocus={this.props.focusLocation}
        />
        <span></span>
        <input
          className="modal__input"
          type="text"
          // value=""
          placeholder="GUEST"
          onChange={null}
          autoFocus={this.props.focusGuest}
        />
        <span></span>
        <button>
          <img src={Search} alt="Search" onClick={null} />
          Search
        </button>
        <span onClick={this.props.closeModal} className="close">
          &times;
        </span>
      </div>
    ) : null
  }
}

export default Modal
