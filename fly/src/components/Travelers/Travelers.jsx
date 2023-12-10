import React, { useEffect}  from "react";

//imported
import paris from "../../assets/paris.jpg";
import dubai from "../../assets/dubai.jpg";
import london from "../../assets/london.jpg";
import newyork from "../../assets/newyork.jpg";
//imported travellers
import traveler1 from "../../assets/user1.jpg";
import traveler2 from "../../assets/user2.jpg";
import traveler3 from "../../assets/user3.jpg";
import traveler4 from "../../assets/user4.jpg";



//import aos
import Aos from 'aos';
import 'aos/dist/aos.css';


//we are going to use high order array method called map to display all the data

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "Dolly",
    socialLink: "@dolly",
  },
  {
    id: 2,
    destinationImage: dubai,
    travelerImage: traveler2,
    travelerName: "John",
    socialLink: "@john",
  },
  {
    id: 3,
    destinationImage: london,
    travelerImage: traveler3,
    travelerName: "Peter",
    socialLink: "@peter",
  },
  {
    id: 4,
    destinationImage: newyork,
    travelerImage: traveler4,
    travelerName: "Sandy",
    socialLink: "@sandy",
  },

];
const Travelers = () => {

  //useEffect to set animation duration
useEffect(()=>{
  Aos.init({duration:2000})
})
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos='fade-up' data-aos-duration='2500'>Top Travelers of This Month!</h2>

        <div className="travelersContainer grid">
          {/* single passenger card */}
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                // {/* single passenger card */}
                <div  data-aos='fade-up' data-aos-duration='2500'  key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className="travelerImage" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
