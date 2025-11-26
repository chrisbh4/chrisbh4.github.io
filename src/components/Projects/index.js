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
      <div className="projects-container">
        {/* Spud-Hub Card */}
        <div className="project-card spudhub-card">
          <div className="project-image spudhub-image">
            <img src="https://imgur.com/Vo3nCh3.png" alt="project" />
          </div>
          <div className="project-description spudhub-description">
            Locally grown produce from farmers who have excess goods to share.
          </div>
          <div className="project-links">
            <a href="https://farm-to-fork.fly.dev/" target="_blank" rel="noopener noreferrer">
              Live App
              <i className="fas fa-globe"></i>
            </a>
            <a href="https://github.com/chrisbh4/farm-to-fork" target="_blank" rel="noopener noreferrer">
              GitHub
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="project-features-list">
            <div className="project-features-title">Features</div>
            <Box textAlign={'start'} pl={'1em'}>
              <Text>• Oauth2: Credentails</Text>
              <Text>• Products Listings (CRUD)</Text>
              <Text>• Shopping Cart (CRUD)</Text>
              <Text>• Product Reviews (CRUD)</Text>
            </Box>
          </div>
          <div className="project-techs">
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
            <div className="project-tech">
              <img src={redux} alt="tech logo" />
              <div>Redux.js</div>
            </div>
            <div className="project-tech">
              <img src={"https://devicon-website.vercel.app/api/html5/plain-wordmark.svg"} alt="tech logo" />
              <div>HTML</div>
            </div>
            <div className="project-tech">
              <img src={"https://devicon-website.vercel.app/api/tailwindcss/plain.svg"} alt="tech logo" />
              <div>TailwindCSS</div>
            </div>
          </div>
        </div>

        <div className="project-card snkr-mrkt-card">
          <div className="project-image snkr-mrkt-image">
            <img src="https://imgur.com/KOgkPYD.png" alt="project" />
          </div>
          <div className="project-description snkr-mrkt-description">
            Bringing the best selection of sneakers to our customers.
          </div>
          <div className="project-links">
            <a href="http://snkr-mrkt.fly.dev" target="_blank" rel="noopener noreferrer">
              Live App
              <i className="fas fa-globe"></i>
            </a>
            <a href="https://github.com/chrisbh4/SnkrMrkt" target="_blank" rel="noopener noreferrer">
              GitHub
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="project-features-list">
            <div className="project-features-title">Features</div>
            <Box textAlign={'start'} pl={'1em'}>
              <Text>• Oauth2: Credentails</Text>
              <Text>• StockX.com API</Text>
              <Text>• AWS S3 Image uploads</Text>
              <Text>• Search Bar filtering</Text>
              <Text>• Sneaker listings (CRUD)</Text>
              <Text>• Sneaker reviews (CRUD)</Text>
              <Text>• Shopping Cart (CRUD)</Text>
            </Box>
          </div>
          <div className="project-techs">
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
            <div className="project-tech snkr-mrkt-tech">
              <img src={postgresql} alt="tech logo" />
              <div>PostgreSQL</div>
            </div>
            <div className="project-tech">
              <img src="https://devicon-website.vercel.app/api/express/original.svg?color=%23FFFFFF" alt="tech logo" />
              <div>Express</div>
            </div>
            <div className="project-tech">
              <img src={"https://devicon-website.vercel.app/api/html5/plain-wordmark.svg"} alt="tech logo" />
              <div>HTML</div>
            </div>
            <div className="project-tech">
              <img src={"https://devicon-website.vercel.app/api/tailwindcss/plain.svg"} alt="tech logo" />
              <div>TailwindCSS</div>
            </div>
            <div className="project-tech">
              <img src={"https://devicon-website.vercel.app/api/amazonwebservices/original.svg"} alt="tech logo" />
              <div>AWS</div>
            </div>
          </div>
        </div>

{/* Spotify Bot CARD */}
        <div className="project-card spotify-card">
          <div className="project-image spotify-image">
            <img src="https://imgur.com/rluLo3S.png" alt="project page" />
          </div>
          <div className="project-description spotify-description">
            Automate your Spotify streaming experience with our powerful bot.
          </div>
          <div className="project-links">
            <a href="https://spotify-api.fly.dev/" target="_blank" rel="noopener noreferrer">
              Live App
              <i className="fas fa-globe"></i>
            </a>
            <a href="https://github.com/chrisbh4/spotify-api" target="_blank" rel="noopener noreferrer">
              GitHub
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="project-features-list spotify-features">
            <div className="project-features-title">Features</div>
            <Box textAlign={'start'} pl={'1em'}>
              <Text>• Spotify API</Text>
              <Text>• Spotify Web Playback SDK integration</Text>
              <Text>• Automated streaming capability</Text>
              <Text>• Real-time stream counting</Text>
              <Text>• OAuth2 authentication implementation</Text>
              <Text>• Automatic token refresh functionality</Text>
            </Box>
          </div>
          <div className="project-techs">
            <div className="project-tech">
              <img src="https://devicon-website.vercel.app/api/elixir/original.svg" alt="tech logo" />
              <div>Elixir</div>
            </div>
            <div className="project-tech">
              <img  src="https://devicon-website.vercel.app/api/phoenix/original.svg" alt="tech logo" />
              <div>Phoenix Liveview</div>
            </div>
            <div className="project-tech js-tech">
              <img src={js} alt="tech logo" />
              <div>JavaScript</div>
            </div>
            <div className="project-tech js-tech">
              <img src={"https://devicon-website.vercel.app/api/tailwindcss/plain.svg"} alt="tech logo" />
              <div>TailwindCSS</div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="projects-container">
        {/* GoodTunes Card */}
        <div className="project-card goodTunes-card">
          <div className="project-image goodTunes-image">
            <img src="https://i.imgur.com/sf38Uhb.png" alt="project" />
          </div>
          <div className="project-description goodTunes-description">
            Discover your next favorite playlists and create your own.
          </div>
          <div className="project-links goodTunes-links">
            <a href="https://goodtunes.fly.dev" target="_blank" rel="noopener noreferrer">
              Live App
              <i className="fas fa-globe"></i>
            </a>
            <a href="https://github.com/chrisbh4/GoodTunes" target="_blank" rel="noopener noreferrer">
              GitHub
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="project-features-list goodTunes-features">
            <div className="project-features-title goodTunes-features-title">
              Features
            </div>
            <Box textAlign={'start'} pl={'1em'}>
              <Text>• Oauth2: Credentails</Text>
              <Text>• Discogs.com API</Text>
              <Text>• Create Shelves to add albums (CRUD)</Text>
              <Text>• Search bar by artist or album</Text>
              <Text>• Leave reviews for albums (CRUD)</Text>
            </Box>
          </div>
          <div className="project-techs goodTunes-techs">
            <div className="project-tech goodTunes-tech js-tech">
              <img src={js} alt="tech logo" />
              <div>JavaScript</div>
            </div>
            <div className="project-tech goodTunes-tech express-tech">
              <img src={express} alt="tech logo" />
              <div>Express.js</div>
            </div>
            <div className="project-tech goodTunes-tech">
              <img src={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pug/pug-original.svg"} alt="tech logo" />
              <div>Pug.js</div>
            </div>
            <div className="project-tech goodTunes-tech">
              <img src={postgresql} alt="tech logo" />
              <div>PostgreSQL</div>
            </div>
            <div className="project-tech goodTunes-tech">
              <img src={"https://devicon-website.vercel.app/api/html5/plain-wordmark.svg"} alt="tech logo" />
              <div>HTML</div>
            </div>
            <div className="project-tech goodTunes-tech">
              <img src={css} alt="tech logo" />
              <div>CSS</div>
            </div>
          </div>
        </div>

        <div className="project-card beachitt-card">
          <div className="project-image beachitt-image">
            <img src="https://imgur.com/w5U7FoB.png" alt="project page" />
          </div>
          <div className="project-description beachitt-description">
            Find your next international beach getaway.
          </div>
          <div className="project-links">
            <a href="https://beachitt.fly.dev" target="_blank" rel="noopener noreferrer">
              Live App
              <i className="fas fa-globe"></i>
            </a>
            <a href="https://github.com/chrisbh4/beachitt" target="_blank" rel="noopener noreferrer">
              GitHub
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="project-features-list beachitt-features">
            <div className="project-features-title">Features</div>
            <Box textAlign={'start'} pl={'1em'}>
              <Text>• Oauth2: Credentails</Text>
              <Text>• Google Maps API</Text>
              <Text>• AWS S3 Image uploads</Text>
              <Text>• Rental listings (CRUD)</Text>
              <Text>• Rental reviews (CRUD)</Text>
            </Box>
          </div>
          <div className="project-techs">
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
            <div className="project-tech">
              <img src={redux} alt="tech logo" />
              <div>Redux.js</div>
            </div>
            <div className="project-tech google-tech">
              <img src={postgresql} alt="tech logo" />
              <div>PostgreSQL</div>
            </div>
            <div className="project-tech js-tech">
              <img src={"https://devicon-website.vercel.app/api/tailwindcss/plain.svg"} alt="tech logo" />
              <div>TailwindCSS</div>
            </div>
            <div className="project-tech google-tech">
              <img src={"https://devicon-website.vercel.app/api/amazonwebservices/original.svg"} alt="tech logo" />
              <div>AWS</div>
            </div>
            <div className="project-tech google-tech">
              <img src="https://devicon-website.vercel.app/api/googlecloud/original.svg" alt="tech logo" />
              <Text pos={'relative'} left={'4px'}>Google Cloud</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
