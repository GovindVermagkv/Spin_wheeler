import React, { useEffect, useState } from 'react';
import Wheel from './Wheel';

import '../App.css';

const WheelPage = () => {
  const [selectedItem,setSelectedItems]=useState(null);

  const [places] = useState(['Rs 500 off on 1999', '1 pizza Free', 'Free Shipping', 'Better Luck next time', 'Movie voucher worth 300', 'Rs 100 in bank']);
 
  const[toggle,setToggle]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
    setToggle(true)
     },3000)
  },[selectedItem])


  // function Timing(){
  //   return(
  //   setTimeout(() => {
     
  //       places[selectedItem]
  //   }, 3000);
  // }
  return (
    <div className="App">
      <h1>Spin and win Rewards</h1>
      <Wheel items={places} selectedItem={selectedItem} setSelectedItems={setSelectedItems} />
      {    
      toggle && selectedItem !== null &&
      (
       <>
       <div>{ places[selectedItem]} </div>
       </>
      )
      }
    </div>

  );

}
export default WheelPage;
