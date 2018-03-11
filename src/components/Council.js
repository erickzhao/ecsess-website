import React from 'react'

export default ({ council }) => (
  <div>
    {council.map(c => (
      <article className="message">
        <div className="message-body">
          {c.name}
          <br />
          <cite> – {c.position}</cite>
        </div>
      </article>
    ))}
  </div>
)