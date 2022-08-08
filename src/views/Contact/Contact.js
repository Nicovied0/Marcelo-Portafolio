import React from 'react';
import Grid from '@material-ui/core/Grid';
import FB from '../../Assets/fb.png';
import Gmail from '../../Assets/gmail.png';
import Form from './Form'


const Contact = () => {
  return (
    <div id="Homepage" class="fullscreen portfolioWidth">
      <Grid container spacing={2}>
        <Grid item sm={12} data-aos="fade-in" data-aos-duration="1300" data-aos-easing="ease-in-out">

          {/* About Picture */}


          <div>
            {/* About Heading */}
            <div class="aboutHeading">
              Contactarme
            </div>
            <br />

            {/* About Text */}
            <div class="aboutText">
              <a href="mailto:marcelogoviedo@gmail.com">
                <img draggable="false" class="aboutImage" src={Gmail} alt="gm" />
              </a>
              <a href="mailto:marcelogoviedo@gmail.com">
                <img draggable="false" class="aboutImage" src={FB} alt="fb" />
              </a>
            </div>

          </div>
        </Grid>
        <br />
        <Form />

      </Grid>
    </div>
  );
}

export default Contact;
