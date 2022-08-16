import React from "react";
import Grid from "@material-ui/core/Grid";
import Pdf from '../../Assets/CV_OVIEDO_MARCELO.pdf';

const About = (props) => {
  return (
    <div class="fullscreen background">
      <Grid container spacing={3}>
        {/******** About Me Section *********/}
        <Grid
          item
          sm={12}
          data-aos="fade-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          {/* About Picture */}
          <img
            draggable="false"
            class="aboutImage"
            src="profileIcon.png"
            alt="profile"
          />

          <div>
            {/* About Heading */}
            <div class="aboutHeading">Sobre Mí</div>
            <br />

            {/* About Text */}
            <div class="aboutText">
              Soy Marcelo Oviedo y me especializo en la investigación de
              incendios, también me desempeño en el ámbito de la capacitación y
              asesoramiento en aspectos relacionados con la prevención y
              extinción de incendios, prevención de accidentes, rescate,
              liderazgo y logística.
            </div>
            <div class="aboutText paddingTop">
              Trabajo de manera profesional y con experiencia en capacitación,
              asesoramientos y peritajes. Mi trabajo se centra en resultados de
              calidad que crean un impacto significativo. Me complace emplear la
              experiencia y habilidades que he obtenido en mi carrera para
              lograr proyectos interesantes mediante la resolución creativa de
              problemas, pensamiento innovador y científico. Eche un vistazo a
              mis actividades y póngase en contacto si tiene alguna pregunta o
              requerimiento.
            </div>

            {/* Resume Button */}
            <div class="text-center" data-aos="fade-up"
     data-aos-duration="2000">
              <br />
              <a
                href={Pdf}
                download="CV_Marcelo_Oviedo.pdf"
                target="_blank"
                class="btn btn-primary  bigButton blueButton buttonLink"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
