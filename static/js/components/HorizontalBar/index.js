import React from 'react';
import ReactChartkick, {BarChart} from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);
import {generateArray} from '../../data-layer/array-processors';
import {size} from 'lodash';
import './index.scss';

export default class HorizontalBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getRandomData()
    };
  }

  getRandomData() {
    return generateArray().map(({val, label}) => [label, val]);
  }

  componentDidMount() {
    setInterval(() => this.setState({data: this.getRandomData()}), 1000);
  }

  /*
  data={this.state.data}
        refresh={1}
        messages={{empty: 'No data'}}
        width="100%"
        height="470px"
        decimal=","
        colors={['#0a83cf']}
   */
  render() {
    return (
      <BarChart data={this.state.data} height="470px" library={{options: {maxBarThickness: 0}}} />
    );
  }
}
