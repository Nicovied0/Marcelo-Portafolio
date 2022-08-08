import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import Zoom from '@material-ui/core/Zoom';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

  return(
    <div>
      <nav class="navbar navbar-container fixed-top navbar-expand-lg navbar-light transparent">

        {/*/Homepage Link */}
        <a class="navbar-brand name" href="/#/home">
          Marcelo G. Oviedo
        </a>

        {/* Menu Icon */}
        <button class="navbar-toggler" type="button" data-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <MenuIcon />
        </button>

        {/* Social Buttons */}
        <div>
          <Tooltip title={<div style={{ fontSize: "1rem", padding: ".5rem" }}>Mi Gmail</div>} arrow TransitionComponent={Zoom} class="linkSpace linkColor">
            <Link color="inherit" href="mailto:marcelogoviedo@gmail.com" target="_blank">
              <EmailIcon />
            </Link>
          </Tooltip>
          <Tooltip title={<div style={{ fontSize: "1rem", padding: ".5rem" }}>Linkedin</div>} arrow TransitionComponent={Zoom}>
            <Link color="inherit" href="https://www.linkedin.com/" target="_blank" class="linkSpace linkColor">
              <LinkedInIcon />
            </Link>
          </Tooltip>
          <Tooltip title={<div style={{ fontSize: "1rem", padding: ".5rem" }}>Facebook</div>} arrow TransitionComponent={Zoom}>
            <Link color="inherit" href="https://www.facebook.com/marcelo.oviedo.58/" target="_blank" class="linkSpace linkColor">
              <FacebookIcon />
            </Link>
          </Tooltip>
         </div>

         {/* Home Link */}
         <div class="collapse navbar-collapse drop nav-item" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item nav-center linkSpace linkColor">
              <NavLink
              className="nav-link underline"
              activeClassName="activeNav"
              to="/home">
                Inicio
              </NavLink>
            </li>
            
            {/* About Link */}
            <li class="nav-item nav-center linkSpace linkColor">
              <NavLink
              className="nav-link underline aboutLink"
              activeClassName="activeNav"
              to="/about">
                Sobre Mi
              </NavLink>
            </li>

            {/* Work Link */}
            <li class="nav-item nav-center linkSpace linkColor">
              <NavLink
              className="nav-link underline"
              activeClassName="activeNav"
              to="/Contact">
                Contacto
              </NavLink>
            </li>


          </ul>
        </div>
      </nav>
   </div>
  );

}


export default NavBar;

