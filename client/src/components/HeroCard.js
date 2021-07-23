import React from 'react'
import Stays from '../stays.json'

class HeroCard extends React.Component {
  constructor() {
    super()
    this.state = {
      staysList: Stays,
    }
  }
  render() {
    const staysListCopy = this.state.staysList
    return (
      <div className="grid">
        {staysListCopy.map(data => {
          return (
            <div key={data.id} className="hero">
              <div
                className="hero__image"
                style={{
                  backgroundImage: `url(${data.photo})`,
                }}
              />
              <div className="hero__info">
                {data.superHost ? (
                  <span>{'super host'.toUpperCase()}</span>
                ) : null}
                <p className="hero__info__description">
                  {data.type} {data.beds > 0 ? `${data.beds} beds` : null}
                </p>
                <div className="hero__info__ratings">
                  <p>💥 {data.rating}</p>
                </div>
              </div>
              <p className="hero__title">{data.title}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
export default HeroCard
