import React from 'react'

export default ({ members, title, heading }) => (
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {title}
          </h1>
          <h2 class="subtitle">
            {heading}
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
    <div class="container">
      <div className="columns">
          {members.map(m => (
            <div className="column is-one-quarter">
              <img src={m.photo} style={{maxHeight: 200}}/>
              <br/>
              {m.name}
              <br/>
              {m.position}
            </div>
          ))}
      </div>
    </div>
    </section>
  </div>
)