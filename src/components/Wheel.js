import React, { useState } from 'react';

import './wheel.css';
const  Wheel=({items})=> {
const [selectedItem,setSelectedItems]=useState(null);

 function selectItem() {
  setSelectedItems(-20)
    if (selectedItem !== null) {
      const ChooseItem = Math.floor(Math.random() * items.length);
      console.log(ChooseItem);
     
      setSelectedItems(ChooseItem );
     
    }
     else {
      setSelectedItems( -20);
    }
  }



    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    return (
      <>
      <div id='wheel_main'>
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
             
            </div>
          
          ))}
          
      {setTimeout(()=>{
        console.log(items[selectedItem])
      },3000)}
        </div>
      </div>
      </div>
        <button id='btnspin' onClick={selectItem}>Spin</button>
        </>
    );
  }

  export default  Wheel;