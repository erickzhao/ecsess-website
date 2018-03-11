import React from 'react'

export default ({ members, title, heading }) => (
  <div>
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            {title}
          </h1>
          <h2 className="subtitle">
            {heading}
          </h2>
        </div>
      </div>
    </section>
    <section className="section">
    <div className="container">
      <div className="columns is-multiline">
            {members.map(m => (
              <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
                <div className="card equal-height has-text-centered">
                  <img className="is-center" src={m.photo} style={{maxHeight: 250}}/>
                  <br/>
                  {m.name} - {m.position}
                </div>
              </div>
            ))}
        </div>
    </div>
    </section>
  </div>
)