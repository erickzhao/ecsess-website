import React from 'react'
import Link from 'gatsby-link'

let Highcharts
let Exporting
let Drilldown

if (typeof document !== 'undefined') {
  Highcharts = require('highcharts');
  Exporting = require('highcharts/modules/exporting');
  Drilldown = require('highcharts/modules/drilldown');
  // Initialize exporting module.
  Exporting(Highcharts);
  Drilldown(Highcharts);
}

class FinanceChart extends React.Component {
  constructor(props) {
    super();
    this.state = {...props};
  }

  generateSeries(data) {
    return {
      toplevel: [{
        id: 'toplevel',
        name: 'Semester',
        data: data.map(s => ({
          name: s.semester,
          y: s.expenditures.reduce((acc,e) => acc+Number(e.cost), 0),
          drilldown: s.semester
        }))
      }],
      drilldown: data.map(s => ({
        id: s.semester,
        name: s.semester,
        data: s.expenditures.map(e => ({name: e.name, y: Number(e.cost)}))
      }))
    }
  }
  
  componentDidMount() {
    const { toplevel, drilldown } = this.generateSeries(this.state.finances);
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
      series: toplevel,
      drilldown: {
        series: drilldown
      }
  })
  }

  render() {
    return (
      <section className="section">
      <div id='container'></div>
      </section>
    )
  }
}

export default FinanceChart
