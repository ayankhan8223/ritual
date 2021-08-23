import React from "react";
import "./Products.css";
function Products() {
  return (
    <div className="products">
      <div className="product__header">
        <h1>Featured Products</h1>
        <a href="">Shop All</a>
      </div>

      <div className="product">
        <div className="product1">
          <img
            src="//images.ctfassets.net/uuc5ok478nyh/1ZktS2HFz58J4p46qXEZE3/c5f97ad5a9bec6c5d10d452d32db3447/PDP_EFW_Bottle.jpg?w=555&q=90"
            alt=""
          />
          <h3>Essential for Women</h3>
          <h2>Multivitamin 18+</h2>
          <p>The clinical-backed multivitamin, reimagined for women 18+.</p>
        </div>

        <div className="product1">
          <img
            src="//images.ctfassets.net/uuc5ok478nyh/3MK3Sz4okY78iVRU575Vkr/2d16d86a29e30903a5ab952a90d2816a/PDP_EPRE_Bottle__1_.jpg?w=555&q=90"
            alt=""
          />
          <h3>Essential for Women</h3>
          <h2>Prenatal Multivitamin</h2>
          <p>
            The prenatal multivitamin for thinking, trying, and when it's time.
          </p>
        </div>

        <div className="product1">
          <img
            src="//images.ctfassets.net/uuc5ok478nyh/1ZktS2HFz58J4p46qXEZE3/c5f97ad5a9bec6c5d10d452d32db3447/PDP_EFW_Bottle.jpg?w=555&q=90"
            alt=""
          />
          <h3>Essential Protein</h3>
          <h2>Daily Shake 18+</h2>
          <p>The reimagined plant-based protein for adults 18-49.</p>
        </div>

        <div className="product1">
          <img
            src="//images.ctfassets.net/uuc5ok478nyh/1ZktS2HFz58J4p46qXEZE3/c5f97ad5a9bec6c5d10d452d32db3447/PDP_EFW_Bottle.jpg?w=555&q=90"
            alt=""
          />
          <h3>Essential for Men</h3>
          <h2>Multivitamin 18+</h2>
          <p>
            Formulated for men 18-49 to help fill nutrient gaps in their diet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;
