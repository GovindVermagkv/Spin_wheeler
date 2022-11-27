import React, { useState } from 'react';
import Wheel from './Wheel';

import '../App.css';

const WheelPage = () => {
  const [places] = useState(['Rs 500 off on 1999', '1 pizza Free', 'Free Shipping', 'Better Luck next time', 'Movie voucher worth 300', 'Rs 100 in bank']);

  return (
    <div className="App">
      <h1>Spin and win Rewards</h1>
      <Wheel items={places} />
    </div>
  );

}
export default WheelPage;
