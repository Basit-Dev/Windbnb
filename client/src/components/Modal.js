import React from 'react'
import Search from '../images/search_white.svg'

class Modal extends React.Component {
  constructor() {
    super()
    this.state = {
      modalOpen: false,
    }
  }
  render() {
    return (
      <div className="modal">
        <input
          className="modal__input"
          type="text"
          value="LOCATION"
          onMouseEnter={null}
        />
        <span></span>
        <input
          className="modal__input"
          type="text"
          value="GUESTS"
          onMouseEnter={null}
        />
        <span></span>
        <button>
          <img src={Search} alt="Search" onClick={null} />
          Search
        </button>
        <span className="close">&times;</span>
      </div>
    )
  }
}

export default Modal
