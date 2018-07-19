import React, { Component } from 'react';
import './TeslaBattery.css';

import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';

class TeslaBattery extends Component {
  render() {
    return (
      <form className='tesla-battery'>
        <h1>Range per charge</h1>
        <TeslaCar />
        <TeslaNotice />
      </form>
    )
  }
}

export default TeslaBattery;
