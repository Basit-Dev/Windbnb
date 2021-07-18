import React from 'react'

class ModalBg extends React.Component {
  render() {
    return <div className={`${this.props.modalBg && 'modal-bg'}`}></div>
  }
}
export default ModalBg
