import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero">
        <div className="hero-left">
            <h1>Dive into Delights <br /> Of Delectable <span>Food</span> </h1>
            <p>Where Each Plate Weaves a Story of Culinary <br />  Mastery and Passionate Craftsmanship</p>
            <div className="df">
             <button>Order Now</button>
             <p>Watch video</p>
             <img src="/Polygon 1.svg" alt="" />

            </div>

        </div>
        <div className="hero-right">
            <img src="/opaxon.svg" alt="Ochko'z kenayi" />
        </div>
    </div>
  )
}
