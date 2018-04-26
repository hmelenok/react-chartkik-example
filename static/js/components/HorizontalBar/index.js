import React from 'react';
import {BarChart} from 'react-chartkick';
import {generateArray} from '../../data-layer/array-processors';
import {size} from 'lodash';
import './index.scss';


export default class HorizontalBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: generateArray()
    };
  }


  render() {
    return <BarChart data={[["Work", 32], ["Play", 1492]]} />;
  }
}
