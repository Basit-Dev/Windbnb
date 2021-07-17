import React from 'react'
import Search from '../images/search_white.svg'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
    }
  }
  render() {
    return (
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
        <span className="close">&times;</span>
      </div>
    )
  }
}

export default Modal
