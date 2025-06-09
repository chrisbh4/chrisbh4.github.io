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
import { animate, createTimeline } from 'animejs';
import { useEffect, useRef } from 'react';

import {
  Image,
  Text,
  Box,
} from "@chakra-ui/react";

function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    // Initialize animation for each project card
    projectRefs.current.forEach((card) => {
      // Set initial state with more professional styling
      animate(card, {
        scale: 0.98,
        opacity: 0.85,
        y: 0,
        rotate: 0,
        duration: 0,
        filter: 'brightness(0.9)'
      });

      // Set initial states for child elements
      const image = card.querySelector('.project-image');
      const description = card.querySelector('.project-description');
      const links = card.querySelector('.project-links');
      const features = card.querySelector('.project-features-list');
      const techs = card.querySelector('.project-techs');

      // Check if this is the spudhub card for special handling
      const isSpudhubCard = card.classList.contains('spudhub-card');
      const isSnkrMrktCard = card.classList.contains('snkr-mrkt-card');
      const isGoodTunesCard = card.classList.contains('goodTunes-card');
      const isBeachittCard = card.classList.contains('beachitt-card');
      const isSpotifyCard = card.classList.contains('spotify-card');

      // Get theme-appropriate shadow color
      const getShadowColor = () => {
        if (isSpudhubCard) return '0 20px 45px rgba(160, 178, 158, 0.4)';
        if (isSnkrMrktCard) return '0 20px 45px rgba(35, 31, 32, 0.4)';
        if (isGoodTunesCard) return '0 20px 45px rgba(250, 74, 24, 0.4)';
        if (isBeachittCard) return '0 20px 45px rgba(59, 144, 200, 0.4)';
        if (isSpotifyCard) return '0 20px 45px rgba(19, 145, 63, 0.4)';
        return '0 25px 50px rgba(0,0,0,0.4)';
      };

      // Create handler functions that we can reference for cleanup
      const mouseenterHandler = () => {
        // Slower main card expansion with sophisticated easing
        const mainTimeline = createTimeline();

        mainTimeline.add(card, {
          scale: 1.02,
          opacity: 1,
          y: -8,
          rotate: 0.5,
          width: window.innerWidth <= 820 ? '370px' : '850px',
          height: '600px',
          duration: 2000,
          ease: 'outCirc',
          filter: 'brightness(1.1)'
        });

        // Synchronized content reveal timeline - all elements start together
        const contentTimeline = createTimeline();

        // Image animation with smooth bounce and rotation
        contentTimeline.add(image, {
          marginBottom: '280px',
          scale: [0.95, 1.03],
          rotate: [-1, 0],
          opacity: [0.7, 1],
          duration: 1800,
          ease: 'outCubic',
        }, 200);

        // Description slides in with smooth curve and fade
        contentTimeline.add(description, {
          marginBottom: '40px',
          marginRight: '280px',
          opacity: [0.3, 1],
          y: [20, 0],
          scale: [0.95, 1],
          duration: 1700,
          ease: 'outQuart'
        }, 200);

        // Links appear with elegant slide and fade
        contentTimeline.add(links, {
          top: '35px',
          right: '40px',
          opacity: [0, 1],
          x: [30, 0],
          y: [-15, 0],
          scale: [0.8, 1],
          duration: 1600,
          ease: 'outQuart'
        }, 200);

        // Features list slides with smooth curve
        contentTimeline.add(features, {
          top: '115px',
          right: '10px',
          opacity: [0, 1],
          x: [50, 0],
          y: [15, 0],
          scale: [0.9, 1],
          rotate: [2, 0],
          duration: 1700,
          ease: 'outQuart'
        }, 200);

        // Tech stack appears with playful bounce
        contentTimeline.add(techs, {
          right: '50px',
          bottom: '30px',
          opacity: [0, 1],
          y: [30, 0],
          scale: [0.8, 1],
          rotate: [-3, 0],
          duration: 1800,
          ease: 'outCubic'
        }, 200);

        // Enhanced hover glow effect with smooth transition
        animate(card, {
          boxShadow: ['0px 0px 5px 2px rgb(97, 97, 97)', getShadowColor()],
          duration: 1600,
          ease: 'outQuart'
        });
      };

      const mouseleaveHandler = () => {
        // Slower main card contraction with smooth easing
        const mainTimeline = createTimeline();

        mainTimeline.add(card, {
          scale: [1.02, 0.98],
          opacity: [1, 0.85],
          y: [-8, 0],
          rotate: [0.5, 0],
          width: '400px',
          height: '250px',
          duration: 1400,
          ease: 'outQuint',
          filter: ['brightness(1.1)', 'brightness(0.9)'],
          boxShadow: [getShadowColor(), '0px 0px 5px 2px rgb(97, 97, 97)']
        });

        // Synchronized content hide timeline - all elements exit together
        const hideTimeline = createTimeline();

        // Tech stack disappears with gentle rotation
        hideTimeline.add(techs, {
          right: '-300px',
          bottom: '0px',
          opacity: [1, 0],
          y: [0, -25],
          scale: [1, 0.7],
          rotate: [0, 6],
          duration: 1100,
          ease: 'inQuart'
        }, 100);

        // Features list slides out smoothly
        hideTimeline.add(features, {
          top: '-205px',
          right: '-250px',
          opacity: [1, 0],
          x: [0, 70],
          y: [0, -20],
          scale: [1, 0.8],
          rotate: [0, -3],
          duration: 1100,
          ease: 'inQuart'
        }, 100);

        // Links fade out elegantly
        hideTimeline.add(links, {
          top: '-180px',
          right: '30px',
          opacity: [1, 0],
          x: [0, -40],
          y: [0, 20],
          scale: [1, 0.7],
          duration: 1100,
          ease: 'inCubic'
        }, 100);

        // Description slides back smoothly
        hideTimeline.add(description, {
          marginBottom: '40px',
          marginRight: '0px',
          opacity: [1, 0.9],
          y: [0, 12],
          scale: [1, 0.95],
          duration: 1200,
          ease: 'inOutQuad'
        }, 100);

        // Image returns with gentle motion
        hideTimeline.add(image, {
          marginBottom: '0px',
          scale: [1.03, 1],
          rotate: [0, 0.5],
          opacity: [1, 0.95],
          duration: 1200,
          ease: 'inOutQuart'
        }, 100);
      };

      // Store handler references on the element for cleanup
      card._mouseenterHandler = mouseenterHandler;
      card._mouseleaveHandler = mouseleaveHandler;

      // Add event listeners to individual cards
      card.addEventListener('mouseenter', mouseenterHandler);
      card.addEventListener('mouseleave', mouseleaveHandler);
    });

    // Cleanup function to remove event listeners
    return () => {
      projectRefs.current.forEach((card) => {
        if (card && card.parentNode) {
          // Remove event listeners from individual cards
          card.removeEventListener('mouseenter', card._mouseenterHandler);
          card.removeEventListener('mouseleave', card._mouseleaveHandler);
        }
      });
    };
  }, []);

  // Helper function to add refs to project cards
  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  return (
    <div className="projects">
      {/* <div className="projects-header" id='projects'>Projects</div> */}
      <div className="projects-container">
        {/* Spud-Hub Card */}
        <div className="project-card spudhub-card" ref={addToRefs}>
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

        <div className="project-card snkr-mrkt-card" ref={addToRefs}>
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
                <Text pt={'1em'}>- StockX.com API</Text>
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
        <div className="project-card goodTunes-card" ref={addToRefs}>
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
              <Text>- Discogs.com API</Text>
                <Text pt={'1em'}>- Create Shelves to add
                  <Text pl={'1.2em'}>albums (CRUD)</Text>
                </Text>
                <Text pt={'1em'}>- Search bar by artist or
                  <Text pl={'1.2em'}>album</Text>
                </Text>
                <Text pt={'1em'}>- Leave reviews for albums
                  <Text pl={'1.2em'}>(CRUD)</Text>
                </Text>
                <Text pt={'1em'}>- Oauth with email & password</Text>
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
        {/* Spotify Bot CARD */}
        <div className="project-card spotify-card" ref={addToRefs}>
          <div className="project-image spotify-image">
            <img src="https://imgur.com/rluLo3S.png" alt="project page" />
          </div>
          <div className="project-page beachitt-page">
            <img src="https://imgur.com/kuSZnSF.png" alt="project page" />
          </div>
          <div className="project-description spotify-description">
          Automate your Spotify streaming experience with our powerful bot.
          </div>
          <div className="project-links">
            <a href="https://spotify-api.fly.dev/">
              Live App
              <i class="fas fa-globe"></i>
            </a>
            <a href="https://github.com/chrisbh4/spotify-api">
              GitHub
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="project-features-list spotify-features">
            <div className="project-features-title">Features List</div>
            <div>
              <Box textAlign={'start'} pl={'4em'}>
                <Text>- Spotify API</Text>
                <Text>- Spotify Web Playback SDK integration</Text>
                <Text>- Automated streaming capability</Text>
                <Text>- Real-time stream counting</Text>
                <Text>- OAuth2 authentication implementation</Text>
                <Text>- Automatic token refresh functionality</Text>
              </Box>
            </div>

          </div>
          <div className="project-techs">
            <div className="project-techs-top">
              <div className="project-tech">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elixir/elixir-original-wordmark.svg" alt="tech logo" />
                <div>Elixir</div>
              </div>
              <div className="project-tech js-tech">
                <img src={js} alt="tech logo" />
                <div>JavaScript</div>
              </div>
            </div>
            <div className="project-techs-bottom">
            <div className="project-tech">
                <img style={{ marginLeft: '40px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/phoenix/phoenix-original.svg" alt="tech logo" />
                <div>Phoenix Liveview</div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card beachitt-card" ref={addToRefs}>
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
