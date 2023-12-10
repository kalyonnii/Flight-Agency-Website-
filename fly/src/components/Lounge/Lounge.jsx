import React,{ useEffect}  from "react";
//import assets
import imageGrid from "../../assets/grid_image2.png";


//import aos
import Aos from 'aos';
import 'aos/dist/aos.css';


const Lounge = () => {

  //useEffect to set animation duration
useEffect(()=>{
  Aos.init({duration:2000})
})
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
          <img src={imageGrid} />
        </div>

        <div className="textDiv">
          <h2 data-aos='fade-up' data-aos-duration='2500'>Unaccomplished Minor Lounge</h2>

          <div className="grids grid">
            <div data-aos='fade-up' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Help Through the airport</span>
              <p>
                you can also call airplane from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div data-aos='fade-up' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                you can also call airplane from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div data-aos='fade-up' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Care on the Flight</span>
              <p>
                you can also call airplane from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div data-aos='fade-up' data-aos-duration='2500' className="singleGrid">
              <span className="gridTitle">Chauffeur-drive service</span>
              <p>
                you can also call airplane from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
