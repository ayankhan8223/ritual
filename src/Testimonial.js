import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial__title">
        <h1>Skeptics Speak</h1>
        <p>
          With millions of Rituals delivered, discover why customers trust us
          with their daily health.
        </p>
      </div>

      <div className="items">
        <div className="item__1">
          <div className="item1">
            <h1>“I love that it has omegas in it but they are plant-based.”</h1>
            <h5>Erica Chidi Cohen</h5>
            <p>Doula and Health Educator</p>
          </div>
          <div className="item2">
            <img
              src="https://images.ctfassets.net/uuc5ok478nyh/2wcuA5lLofxj7UeWn3Kqhr/b64cbb86faf32fe0beb47696af099822/Erica.jpg?w=750&h=912&q=90&fm=webp"
              alt=""
            />
          </div>
        </div>

        <div className="item__2">
          <div className="img1">
            <img
              src="https://images.ctfassets.net/uuc5ok478nyh/37hIiujBnFxkAD6sakaBgU/2847757ee077f62ff3bc84494942154e/Kara.jpg?w=750&h=912&q=90&fm=webp"
              alt=""
            />
          </div>
          <div className="img2">
            <img
              src="https://images.ctfassets.net/uuc5ok478nyh/2pPwcTfPdRhn4Dw5PKocmZ/dbbe954272d10eee2941de12832af861/Sheri.jpg?w=750&h=912&q=90&fm=webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="company">
        <div className="companies">
          <img src="mg1.png" alt="" />
          <img src="mg2.png" alt="" />
          <img src="mg3.png" alt="" />
          <img src="mg4.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
