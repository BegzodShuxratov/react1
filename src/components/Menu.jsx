import React from 'react'
import './Menu.css'

export default function Menu() {
  return (
    <div className='menu container'>
        <div className="ota">
        <div className="left">
     <h4>Special Dishes</h4>
     <h2>Standout Dishes <br /> From Our Menu</h2>
        </div>
        <div className="right">
            <button>{"<"}</button>
            <button>{">"}</button>
        </div>  
        </div>
     
     <div className="cards">
        <div className="card2 ">
            <img src="./Salad.svg" alt="" />
            <p>Fattoush salad</p>
            <span>Description of the item</span>
            <h3><span>$</span> 24.00</h3>
        </div>
        <div className="card2 ">
            <img src="./Salad.svg" alt="" />
            <p>Fattoush salad</p>
            <span>Description of the item</span>
            <h3><span>$</span> 24.00</h3>
        </div>
        <div className="card2 ">
            <img src="./Salad.svg" alt="" />
            <p>Fattoush salad</p>
            <span>Description of the item</span>
            <h3><span>$</span> 24.00</h3>
        </div>
     </div>

    </div>
  )
}
