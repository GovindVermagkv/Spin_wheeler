import React, { useState } from 'react';

import './wheel.css';
const  Wheel=({items,setSelectedItems,selectedItem})=> {


 function selectItem() {
  setSelectedItems(null)
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
          
     

        </div>
      </div>
      </div>
        <button id='btnspin' onClick={selectItem}>Spin</button>
        </>
    );
  }

  export default  Wheel;