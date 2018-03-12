import React from 'react'
import bulmaAccordion from '../utils/accordion.min';

export default ({ questions }) => (
  <section>
    <section className="section container accordions">
      <h2 className="title">Current students</h2>
      {questions.map(q => 
        <article className="accordion">
          <div className="accordion-header">
            <p>{q.question}</p>
            <button className="toggle" aria-label="toggle"></button>
          </div>
          <div className="accordion-body">
            <div className="accordion-content">{q.answer}</div>
          </div>
        </article>
      )}
    </section>
    <section className="section container accordions">
      <h2 className="title">Prospective students</h2>
      {questions.map(q => 
        <article className="accordion">
          <div className="accordion-header">
            <p>{q.question}</p>
            <button className="toggle" aria-label="toggle"></button>
          </div>
          <div className="accordion-body">
            <div className="accordion-content">{q.answer}</div>
          </div>
        </article>
      )}
    </section>
  </section>
  
)