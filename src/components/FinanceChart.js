import React from 'react'
import Link from 'gatsby-link'

if (typeof document !== 'undefined') {
  const HighCharts = require('highcharts');
  const Exporting = require('highcharts/modules/exporting');
  const Drilldown = require('highcharts/modules/drilldown');
  // Initialize exporting module.
  Exporting(Highcharts);
  Drilldown(Highcharts);
}

class FinanceChart extends React.Component {
  constructor(props) {
    super();
    this.state = {...props};
  }

  componentDidMount() {
    Highcharts.chart('container', {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Expenditures'
      },
      xAxis: {
          type: 'category'
      },
      tooltip: {
          pointFormat: "Spent: ${point.y:.2f}"
      },
      plotOptions: {
          series: {
              borderWidth: 1,
              dataLabels: {
                  enabled: true,
              }
          }
      },
      series: [{
          id: 'toplevel',
          name: 'Semester',
          data: [
              {name: 'Winter 2018', y: 5507.66, drilldown: 'Winter2018'},
              {name: 'Fall 2017', y: 7486.99, drilldown: 'Fall2017'}              
          ]
      }],
      drilldown: {
          series: [ { 
              id:'Fall2017',
              name: 'Fall 2017',
              data: [
                  {name: 'Lounge Clean Up', y: 61.79},
                  {name: 'U0/U1 Welcome Party', y: 279.20},
                  {name: 'DPM Social', y: 250.00},
                  {name: 'Movie Night', y: 100.00},
                  {name: 'Soccer Team', y: 150.00},
                  {name: 'Academic Forum 1', y: 100.00},
                  {name: 'Council Retreat', y: 100.00},
                  {name: 'Professor Speaker Series 1', y: 100.00},
                  {name: 'CopiEUS Printing Fees', y: 150.00},
                  {name: 'The Factory', y: 2568.73},
                  {name: 'Industry Spkr Series 1', y: 50.00},
                  {name: 'Roboelectronics', y: 142.45},
                  {name: 'MECHSESS', y: 312.77},
                  {name: 'Fall Banquet', y: 1384.69},
                  {name: 'Apparel Sale', y: 1294.80},
                  {name: 'Coffee House', y: 330.00},
                  {name: 'Mtl Company Crawl', y: 12.56},
                  {name: 'E-Week', y: 100.00}
              ] 
          },{                
              id:'Winter2018',
              name: 'Winter 2018',
              data: [
                  {name: 'DPM Social', y: 250.00},
                  {name: 'Academic Forum 2', y: 100.00},
                  {name: 'Professor Spkr Series 2', y: 100.00},
                  {name: 'ECSESS Broomball', y: 150.00},
                  {name: 'Elections', y: 330.00},
                  {name: 'The Factory', y: 450.00},
                  {name: 'Industry Spkr Series 2', y: 50.00},
                  {name: 'Apparel Sale', y: 650.00},
                  {name: 'Winter Banquet', y: 1114.96},
                  {name: 'Misc Costs (Annual)', y: 490.00},
                  {name: 'Industry Trip', y: 832.70},
                  {name: 'Coffee House', y: 330.00},
                  {name: 'Year Events', y: 560.00}
              ] 
          }]
      }
  })
  }

  render() {
    return (
      <section class="section">
      <div id='container'></div>
      </section>
    )
  }
}

export default FinanceChart
