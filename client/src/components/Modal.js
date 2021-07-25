import React from 'react'
import Search from '../images/search_white.svg'
import Stays from '../stays.json'
class Modal extends React.Component {
  constructor() {
    super()
    this.state = {
      staysList: Stays,
      location: '',
      userInputValue: '',
    }
  }
  getInput = e => {
    this.setState(() => {
      return {
        location: this.state.staysList
          .filter(data => {
            return data.city
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          })
          .map(data => {
            return (
              <div key={data.id}>
                <div>{data.city}</div>
              </div>
            )
          }),
      }
    })
  }

  getSearchLocations = () => {
    this.setState(() => {
      return {
        location: this.state.staysList.map(data => {
          return <div className="">{`${data.city}, ${data.country}`}</div>
        }),
      }
    })
  }

  render() {
    return this.props.show ? (
      <>
        <div className="modal">
          <div className="modal__container">
            <input
              className="modal__input"
              // type="text"
              // value=""
              placeholder="LOCATION"
              onFocus={this.getSearchLocations}
              onChange={this.getInput}
              autoFocus={this.props.location}
            />
            <span></span>

            <input
              className="modal__input"
              type="text"
              // value=""
              placeholder="GUEST"
              onChange={null}
              autoFocus={this.props.guest}
            />
            <span></span>
            <button>
              <img src={Search} alt="Search" onClick={this.props.search} />
              Search
            </button>
            <span onClick={this.props.closeModal} className="close">
              &times;
            </span>
          </div>
          <div className="modal__filtered-list">{this.state.location}</div>
        </div>
      </>
    ) : null
  }
}

export default Modal
