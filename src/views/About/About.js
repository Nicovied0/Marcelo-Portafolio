import React from 'react';
import Grid from '@material-ui/core/Grid';


const About = props => {
  return (
    <div class="fullscreen background">
      <Grid container spacing={3}>

        {/******** About Me Section *********/}
          <Grid item sm={12} data-aos="fade-in" data-aos-duration="1500" data-aos-easing="ease-in-out">

            {/* About Picture */}
            <img draggable="false" class="aboutImage" src="profileIcon.png" alt="profile"/>

            <div>
              {/* About Heading */}
              <div class="aboutHeading">
                Sobre Mí
              </div>
              <br />

              {/* About Text */}
              <div class="aboutText">
              Soy Marcelo Oviedo y me especializo en la investigación de incendios,
  también me desempeño en el ámbito de la capacitación y asesoramiento
  en aspectos relacionados con la prevención y extinción de incendios,
  prevención de accidentes, rescate, liderazgo y logística.
              </div>
              <div class="aboutText paddingTop">
              Trabajo de manera profesional y con experiencia en capacitación, asesoramientos y peritajes. Mi trabajo se centra en resultados de calidad que crean un impacto significativo. Me complace emplear la experiencia y habilidades que he obtenido en mi carrera para lograr proyectos interesantes mediante la resolución creativa de problemas, pensamiento innovador y científico. Eche un vistazo a mis actividades y póngase en contacto si tiene alguna pregunta o requerimiento.
              </div>

              {/* Resume Button */}
              <div class="text-center">
                <br />
                <a href="CV.PDF" download class="btn resumeButton bigButton blueButton buttonLink" role="button">Descargar CV</a>
              </div>
            </div>

          </Grid>


       {/** Decorative Divider **/}
        <div
          data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out"
          class="hrContainer">
          <hr />
        </div>


        {/******** Skills Section *********/}
        <div
          className="skillWidth" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out"
        >
          <div class="aboutHeading">
            My Skills
          </div>
          <div className="skillContainer">
            <div className="skillCard">
            {/* Technical Skills */}
              <div className="skillTitle skillPadding">
                Technical Skills: 
              </div>
              <div className="skillText">
                <div className="skillPadding">Front-end Development</div>
                <div className="skillPadding">Back-end Development</div>
                <div className="skillPadding">Basic UI/UX & Design</div>
                <div className="skillPadding">Responsive Single Page and Full-Stack Applications</div>
                <div className="skillPadding">RESTful & APIs</div>
              </div>
            </div>
            <div className="skillCard">
            {/* Technologies */}
              <div className="skillTitle skillPadding">
                Tools: 
              </div>
              <div className="skillBold">Frontend</div>
              <div className="skillSpace">ReactJS, Redux</div>
              <div>JSX, JSON</div>
              <div>Mongoose</div>
              <div className="skillPadding">Bootstrap, Material UI, React UI Components, FlexBox</div>
              <div className="skillBold">Backend</div>
              <div className="skillSpace">NodeJS, ExpressJS</div>
              <div className="skillPadding">NPM</div>
              <div className="skillBold">Database</div>
              <div className="skillSpace skillPadding">MongoDB</div>
              <div className="skillBold">Version Control</div>
              <div className="skillSpace">Git, Github</div>
            </div>
            <div className="skillCard">
            {/* Soft Skills */}
              <div className="skillTitle skillPadding">
                Soft Skills: 
              </div>
              <div className="skillText">
                <div className="skillPadding">Team player</div>
                <div className="skillPadding">Excellent time-management skills</div>
                <div className="skillPadding">Great interpersonal skills</div>
                <div className="skillPadding">Open-minded</div>
                <div className="skillPadding">Problem solver</div>
              </div>
            </div>
          </div>
        </div> 


        {/** Decorative Divider **/}
        <div class="hrContainer"
          data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out"
        >
          <hr />
        </div>


      </Grid>
    </div>
  );
};

export default About;
