import React from "react";
import { Link } from "react-router-dom";


const Home = props => {
  return (
    <div id="Homepage">
      <div class="fullscreen background">
      <div className="leftsideHome">
        {/* Heading */}
        <div data-aos="fade-right" data-aos-duration="2500" data-aos-easing="ease-in-out">
          <div class="title">
            Marcelo G. Oviedo.‍
          </div>
        </div>

        {/* Subheading */}
        <div data-aos="fade-right" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-delay="300">
          <div class="subtitle">
            <span class="subtitle subtitle-bold">Capacitaciones</span>, asesoramiento y peritajes.
          </div>
        </div> 

        {/* Link to Portfolio */}
        <div data-aos="fade-right" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-delay="600">
          <Link to="/about" class="btn bigButton purple buttonLink" role="button"> + info </Link>
        </div> 
      </div>
      
        {/* Cover Image */}
        <img draggable="false" className="coverImg" src="bbvv.jpeg" alt="img" data-aos="fade-zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-delay="600"></img>
      </div>
    </div>
  );
};

export default Home;

