import "./Projects.css";
import js from "../skill-icons/javascript.svg";
import python from "../skill-icons/python.svg";
import react from "../skill-icons/react.svg";
import redux from "../skill-icons/redux.svg";
import css from "../skill-icons/css.svg";
import express from "../skill-icons/express.svg";
import flask from "../skill-icons/flask.png";
import postgresql from "../skill-icons/postgresql.svg";
import nodejs from "../skill-icons/nodejs-icon.png";

import {
  Image,
  Text,
  Box,

} from "@chakra-ui/react";

function Projects() {
  return (
    <div className="projects">
      {/* <div className="projects-header" id='projects'>Projects</div> */}
      <div className="projects-container">
        {/* SnkrMrkt CARD */}


        {/* Spud-Hub Card */}
        <div className="project-card spudhub-card">
          <div className="project-image spudhub-image">
            {/* <img src="https://imgur.com/txChmJg.png" alt="project" /> */}
            <img src="https://imgur.com/Vo3nCh3.png" alt="project" />
          </div>
          <div className="project-page spudhub-project-page">
            <img src="https://imgur.com/kc1SbA6.png" alt="project page" />
          </div>
          <div className="project-description spudhub-description">
          Locally grown produce from farmers who have excess goods to share.
          </div>
          <div className="project-links">
            <a href="https://spud-hub.fly.dev">
              Live App
              <i class="fas fa-globe"></i>
            </a>
            <a href="https://github.com/michellekontoff/spudhub">
              GitHub
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="project-features-list">
            <div className="project-features-title">Features List</div>
            <Box textAlign={'start'} pl={'3em'}>
                <Text>- Products Listings (CRUD)</Text>
                <Text pt={'1em'}>- Shopping Cart (CRUD)</Text>
                <Text pt={'1em'}>- Product Reviews (CRUD)</Text>
                <Text pt={'1em'}>- Sign up / in with email</Text>
              </Box>
          </div>
          <div className="project-techs">
            <div className="project-techs-top">
              {/* <div className="project-tech js-tech">
                <img src={js} alt="tech logo" />
                <div>JavaScript</div>
              </div> */}
              <div className="project-tech">
                <img src={python} alt="tech logo" />
                <div>Python</div>
              </div>
              <div className="project-tech flask-tech">
                <img src={flask} alt="tech logo" />
                <div>Flask</div>
              </div>
              <div className="project-tech">
                <img src={react} alt="tech logo" />
                <div>React.js</div>
              </div>
            </div>
            <div className="project-techs-bottom">
              <div className="project-tech">
                <img src={redux} alt="tech logo" />
                <div>Redux.js</div>
              </div>
              <div className="project-tech">
                <img src={css} alt="tech logo" />
                <div>CSS3</div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card snkr-mrkt-card">
          <div className="project-image snkr-mrkt-image">
            <img src="https://imgur.com/KOgkPYD.png" alt="project" />
          </div>
          <div className="project-page snkr-mrkt-page">
            <img src={"https://imgur.com/oOcv5cp.png"} alt="project page" />
          </div>
          <div className="project-description snkr-mrkt-description">
           Bringing the best selection of sneakers to our customers.
          </div>
          <div className="project-links">
            <a href="http://snkr-mrkt.fly.dev">
              Live App
              <i class="fas fa-globe"></i>
            </a>
            <a href="https://github.com/chrisbh4/SnkrMrkt">
              GitHub
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="project-features-list">
            <div className="project-features-title">Features List</div>
            <Box textAlign={'start'} pl={'2em'}>
                <Text pt={'1em'}>- Sneaker listings (CRUD)</Text>
                <Text pt={'1em'}>- Sneaker reviews (CRUD)</Text>
                <Text pt={'1em'}>- AWS S3 Image uploads</Text>
                <Text pt={'1em'}>- Shopping Cart (CRUD)</Text>
                <Text pt={'1em'}>- Search Bar</Text>
                <Text pt={'1em'}>- Sign up / in with email</Text>
              </Box>
          </div>
          <div className="project-techs">
            <div className="project-techs-top">
              <div className="project-tech js-tech">
                <img src={js} alt="tech logo" />
                <div>JavaScript</div>
              </div>
              <div className="project-tech">
                <img src={nodejs} alt="tech logo" />
                <div>Node.js</div>
              </div>
              <div className="project-tech">
                <img src={react} alt="tech logo" />
                <div>React.js</div>
              </div>
            </div>
            <div className="project-techs-bottom">
              <div className="project-tech snkr-mrkt-tech">
                <img src={postgresql} alt="tech logo" />
                <div>PostgreSQL</div>
              </div>
              <div className="project-tech">
                <img src="https://devicon-website.vercel.app/api/express/original.svg?color=%23FFFFFF" alt="tech logo" />
                <div>Express</div>
              </div>
              <div className="project-tech ">
              <Image src="https://devicon-website.vercel.app/api/amazonwebservices/original.svg?color=%23FBFBFB"></Image>
                <div>AWS</div>
              </div>
            </div>
          </div>
        </div>

        {/* GoodTunes Card */}
        <div className="project-card goodTunes-card">
          <div className="project-image goodTunes-image">
            {/* <img src="https://i.imgur.com/N8RoYl1.png" alt="project" /> */}
            <img src="https://i.imgur.com/sf38Uhb.png" alt="project" />
          </div>
          <div className="project-page goodTunes-page">
            <img src="https://imgur.com/Q4KHyIT.png" alt="project page" />
          </div>
          <div className="project-description goodTunes-description">
            Discover your next favorite playlists and create your own.
          </div>
          <div className="project-links goodTunes-links">
            <a href="https://goodtunes.fly.dev">
              Live App
              <i class="fas fa-globe"></i>
            </a>
            <a href="https://github.com/chrisbh4/GoodTunes">
              GitHub
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="project-features-list goodTunes-features">
            <div className="project-features-title goodTunes-features-title">
              Features List
            </div>
              <Box textAlign={'start'} pl={'2em'}>
                <Text>- Create Shelves to add
                  <Text pl={'1.2em'}>albums (CRUD)</Text> </Text>
                <Text pt={'1em'}>- Search by artist or album</Text>
                <Text pt={'1em'}>- Leave reviews for albums (CRUD)</Text>
                <Text pt={'1em'}>- Sign up / in with email</Text>
              </Box>
          </div>
          <div className="project-techs goodTunes-techs">
            <div className="project-techs-top">
              <div className="project-tech goodTunes-tech js-tech">
                <img src={js} alt="tech logo" />
                <div>JavaScript</div>
              </div>
              <div className="project-tech goodTunes-tech">
                <img src={react} alt="tech logo" />
                <div>React.js</div>
              </div>
              <div className="project-tech goodTunes-tech">
                <img src={redux} alt="tech logo" />
                <div>Redux.js</div>
              </div>
            </div>
            <div className="project-techs-bottom">
              <div className="project-tech goodTunes-tech express-tech">
                <img src={express} alt="tech logo" />
                <div>Express.js</div>
              </div>
              <div className="project-tech goodTunes-tech">
                <img src={css} alt="tech logo" />
                <div>CSS3</div>
              </div>
              <div className="project-tech goodTunes-tech">
                <img src={postgresql} alt="tech logo" />
                <div>PostgreSQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-container">
        {/* Beachitt CARD */}
        <div className="project-card beachitt-card">
          <div className="project-image beachitt-image">
            <img src="https://imgur.com/w5U7FoB.png" alt="project page" />
          </div>
          <div className="project-page beachitt-page">
            <img src="https://imgur.com/LZ8DYx3.png" alt="project page" />
          </div>
          <div className="project-description beachitt-description">
            Find Find your next international beach getaway.
          </div>
          <div className="project-links">
            <a href="https://beachitt.fly.dev">
              Live App
              <i class="fas fa-globe"></i>
            </a>
            <a href="https://github.com/chrisbh4/beachitt">
              GitHub
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="project-features-list beachitt-features">
            <div className="project-features-title">Features List</div>
            <div>
              <Box textAlign={'start'} pl={'4em'}>
                <Text>- Google Maps API</Text>
                <Text pt={'1em'}>- AWS S3 Image uploads</Text>
                <Text pt={'1em'}>- Rental listings (CRUD)</Text>
                <Text pt={'1em'}>- Rental reviews (CRUD)</Text>
              </Box>
            </div>
          </div>
          <div className="project-techs">
            <div className="project-techs-top">
              <div className="project-tech js-tech">
                <img src={js} alt="tech logo" />
                <div>JavaScript</div>
              </div>
              <div className="project-tech">
                <img src={express} alt="tech logo" />
                <div>Express</div>
              </div>
              <div className="project-tech">
                <img src={react} alt="tech logo" />
                <div>React.js</div>
              </div>
            </div>
            <div className="project-techs-bottom">
              <div className="project-tech">
                <img src={redux} alt="tech logo" />
                <div>Redux.js</div>
              </div>
              <div className="project-tech google-tech">
              <img src={postgresql} alt="tech logo" />
                <div>PostgreSQL</div>
              </div>
              <div className="project-tech google-tech">
                <img src="https://devicon-website.vercel.app/api/google/original.svg" alt="tech logo" />
                <Text pos={'relative'} left={'4px'} >Google</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
