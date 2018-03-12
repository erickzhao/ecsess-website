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
              <div className="column is-one-third-desktop is-half-tablet is-full-mobile" key={m.name}>
                <div className="card ecse--card-equal-height">
                  <div className="card-image">
                    <figure className="is-square">
                      <img className="is-center" src={m.photo} alt={m.name}/>
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-4">{m.name}</p>
                    <p className="subtitle is-6">{m.position}</p>
                    <p>{m.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
    </section>
  </div>
)