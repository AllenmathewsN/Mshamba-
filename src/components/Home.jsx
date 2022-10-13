import React from "react";
import tips from "../images/tips.jpg";
import healthBenefits from "../images/healthbenefits.jpg";
import superFoods from "../images/superfoods.jpg";
import freshOrganic from "../images/fresh organic.jpg";
import greenBell from "../images/greenbell.jpg";
import freshVegetables from "../images/freshvegetables.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div>
        <h1 className="logo">
          M<span className="primary">SHAMBA</span>
        </h1>
      </div>
      <div className="d">
        <h1> Know our Products and their Health Benefits </h1>
      </div>
      <div className="tu">
        <h1>
          <span className="primary">OUR</span> <span>GUARANTEE</span>
        </h1>
      </div>
      <div className="k">
        <div className="tips">
          <img src={tips} alt="" /> {/*tip imported as a component*/}
          <div className="tips1">
            <h1> Monitoring </h1>
            <p>
              {" "}
              Farmers are provided with field officers to manage their farming
              methods. Only productive methods and approved are used.
            </p>
            <button> Read More </button>
          </div>
        </div>
        <div>
          <div className="greenbell">
            <img src={healthBenefits} alt="" />
            <div className="m">
              <h1> Variety </h1>
              <p>
                {" "}
                Our line of products is wide, from Sukumawiki to Cabbages etc.
                We are not limited to exotic products only. We also have local
                vegetables.
              </p>
              <button> Read More </button>
            </div>
          </div>
          <div className="fresh">
            <img src={superFoods} alt="" />
            <div className="k1">
              <h1> Quality </h1>
              <p>
                Our quality meets international standards in food handling
                processing and distribution. Pick up points are stationed all
                over the country...
              </p>
              <button> Read More </button>
            </div>
          </div>
        </div>
        <div className="kA">
          <div className="tipsA">
            <img src={freshOrganic} alt="" />
            <div className="tips1A">
              <h1> Natural Products </h1>
              <p>
                Our products are natured using approved substances from the WHO,
                KEBS and EUC.
              </p>
              <button> Read More </button>
            </div>
          </div>
          <div className="greenbellA">
            <img src={greenBell} alt="" />
            <div className="mA">
              <h1> Non-GMOs </h1>
              <p>
                Since the country laws limits the use of genetically modified
                organisms(GMOs), our products are strictly non-GMOs
              </p>
              <button> Read More </button>
            </div>
          </div>
          <div className="freshA">
            <img src={freshVegetables} alt="" />
            <div className="k1A">
              <h1> Vegetables</h1>
              <p>
                We have a wide arrays of different vegetables. Vegetables are
                delivered timely and adhere to Kenyan Public Health laws and
                regulations ...
              </p>
              <button> Read More </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  

export default Home;
