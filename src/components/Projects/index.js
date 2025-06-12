/*
 * ============================================================================
 * PROJECT CARD ANIMATION SYSTEM - COMPREHENSIVE GUIDE
 * ============================================================================
 *
 * This file creates smooth, professional hover animations for project cards.
 * Each card expands and reveals content when hovered, then contracts when hover ends.
 *
 *
 * HOW TO MODIFY ANIMATIONS:
 * ============================================================================
 *
 * 1. TIMING ADJUSTMENTS:
 *    - duration: Change number (in milliseconds) to make animations faster/slower
 *      Example: duration: 2000 = 2 seconds, duration: 1000 = 1 second
 *    - delay: The number after the animation object (}, 200) controls when animation starts
 *      Example: }, 500) = wait 500ms before starting this animation
 *
 * 2. EASING FUNCTIONS (how animation accelerates/decelerates):
 *    - 'outCirc': Very smooth, elegant (best for card expansion)
 *    - 'outCubic': Smooth with slight bounce feeling
 *    - 'outQuart': Dramatic but smooth
 *    - 'outBack': Overshoots then settles (bouncy feeling)
 *    - 'outElastic': Bouncy, playful
 *    - 'inQuart': Starts slow, ends fast (good for exits)
 *    - 'inOutQuad': Smooth both ends (good for reversible animations)
 *
 * 3. MOVEMENT VALUES:
 *    - scale: Size multiplier (1 = normal, 1.1 = 110% size, 0.9 = 90% size)
 *    - x, y: Movement in pixels (positive = right/down, negative = left/up)
 *    - rotate: Rotation in degrees (positive = clockwise, negative = counter-clockwise)
 *    - opacity: Transparency (0 = invisible, 1 = fully visible, 0.5 = 50% transparent)
 *
 * 4. ARRAY SYNTAX [startValue, endValue]:
 *    - Use when you want to animate FROM one value TO another
 *    - Example: scale: [0.8, 1.2] means "start at 80% size, end at 120% size"
 *    - Example: opacity: [0, 1] means "fade in from invisible to fully visible"
 *
 * 5. POSITION PROPERTIES:
 *    - top, right, bottom, left: Final position relative to card edges
 *    - marginBottom, marginRight: Spacing adjustments
 *    - width, height: Final size of the card
 *
 * 6. VISUAL EFFECTS:
 *    - filter: 'brightness(1.1)' = 110% brightness (lighter)
 *    - filter: 'brightness(0.9)' = 90% brightness (darker)
 *    - boxShadow: Creates glow effects around cards
 *
 *
 * COMMON MODIFICATIONS:
 * ============================================================================
 *
 * Make animations faster:
 *   - Reduce all duration values (e.g., 2000 → 1000)
 *
 * Make animations slower:
 *   - Increase all duration values (e.g., 1800 → 2500)
 *
 * Change card expansion size:
 *   - Modify width/height in mouseenterHandler (e.g., '850px' → '900px')
 *
 * Make elements move further:
 *   - Increase x, y values (e.g., y: [30, 0] → y: [50, 0])
 *
 * Add more bounce:
 *   - Change ease from 'outCubic' to 'outElastic' or 'outBack'
 *
 * Make elements appear in different order:
 *   - Change the delay values (}, 200) to different numbers
 *   - Smaller delay = appears earlier, larger delay = appears later
 *
 * Change shadow colors:
 *   - Modify the getShadowColor() function return values
 *   - Format: 'X Y blur rgba(red, green, blue, opacity)'
 *
 *
 * TROUBLESHOOTING:
 * ============================================================================
 *
 * Animation not working:
 *   - Check console for errors
 *   - Ensure anime.js is properly imported
 *   - Verify element selectors (querySelector) are finding elements
 *
 * Animation too jerky:
 *   - Remove any CSS transitions from the affected elements
 *   - Use smoother easing functions like 'outCirc' or 'outCubic'
 *
 * Elements not returning to original position:
 *   - Ensure mouseleaveHandler has reverse animations for all properties
 *   - Check that [currentValue, targetValue] arrays are correctly reversed
 *
 * Memory leaks:
 *   - Always ensure cleanup function removes all event listeners
 *   - Store handler references on DOM elements for proper removal
 *
 */

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
  // useRef hooks to store references to DOM elements
  // projectRefs: stores all project card elements for animation targeting
  const projectRefs = useRef([]);

  useEffect(() => {
    // Initialize animation for each project card
    // This runs once when component mounts and sets up all animations
    projectRefs.current.forEach((card) => {

      // INITIAL STATE SETUP
      // Set the starting appearance of each card before any user interaction
      // These properties define how cards look in their "resting" state
      animate(card, {
        scale: 0.98,        // Slightly smaller than normal (98% size) - creates subtle "ready to expand" feeling
        opacity: 0.85,      // Slightly transparent (85% opacity) - draws attention when they become fully opaque on hover
        y: 0,               // Vertical position at normal level
        rotate: 0,          // No rotation in resting state
        duration: 0,        // Instant application (no animation for initial state)
        filter: 'brightness(0.9)' // Slightly dimmed (90% brightness) - brightens on hover for visual feedback
      });

      // ELEMENT QUERIES
      // Get references to all the inner elements that will animate
      // These querySelector calls find specific parts of each card to animate separately
      const image = card.querySelector('.project-image');           // The main project image/logo
      const description = card.querySelector('.project-description'); // Project description text
      const links = card.querySelector('.project-links');            // Live app and GitHub links
      const features = card.querySelector('.project-features-list'); // Features list section
      const techs = card.querySelector('.project-techs');            // Technology stack icons

      // CARD TYPE DETECTION
      // Identify which specific project card this is for theme-appropriate styling
      const isSpudhubCard = card.classList.contains('spudhub-card');
      const isSnkrMrktCard = card.classList.contains('snkr-mrkt-card');
      const isGoodTunesCard = card.classList.contains('goodTunes-card');
      const isBeachittCard = card.classList.contains('beachitt-card');
      const isSpotifyCard = card.classList.contains('spotify-card');

      // THEME-APPROPRIATE SHADOW COLORS
      // Function that returns the correct shadow color based on card type
      // Each project has a shadow that matches its brand color scheme
      const getShadowColor = () => {
        if (isSpudhubCard) return '0 20px 45px rgba(160, 178, 158, 0.4)';  // Green tint for agricultural theme
        if (isSnkrMrktCard) return '0 20px 45px rgba(35, 31, 32, 0.4)';    // Dark shadow for sneaker marketplace
        if (isGoodTunesCard) return '0 20px 45px rgba(250, 74, 24, 0.4)';  // Orange glow for music app
        if (isBeachittCard) return '0 20px 45px rgba(59, 144, 200, 0.4)';  // Blue aura for beach rentals
        if (isSpotifyCard) return '0 20px 45px rgba(19, 145, 63, 0.4)';    // Spotify green
        return '0 25px 50px rgba(0,0,0,0.4)';                              // Default black shadow
      };

      // MOUSE ENTER HANDLER (HOVER IN ANIMATION)
      // This function runs when user hovers over a project card
      const mouseenterHandler = () => {

        // MAIN CARD EXPANSION ANIMATION
        // Creates the primary visual effect - the card growing larger
        const mainTimeline = createTimeline(); // Create timeline for coordinated animations

        mainTimeline.add(card, {
          // TRANSFORM PROPERTIES:
          scale: 1.02,        // Grow to 102% size (subtle but noticeable expansion)
          opacity: 1,         // Become fully opaque (from initial 85%)
          y: -8,              // Move up 8 pixels (creates "lifting" effect)
          rotate: 0.5,        // Rotate 0.5 degrees (adds subtle dynamism)

          // SIZE PROPERTIES:
          width: window.innerWidth <= 820 ? '370px' : '850px',  // Responsive width (smaller on mobile)
          height: '600px',    // Fixed height for expanded state

          // TIMING PROPERTIES:
          duration: 2000,     // 2 seconds for smooth, luxurious expansion
          ease: 'outCirc',    // Circular easing - starts fast, ends very smoothly

          // VISUAL EFFECTS:
          filter: 'brightness(1.1)' // Brighten to 110% (creates "spotlight" effect)
        });

        // INNER CONTENT REVEAL ANIMATION
        // Animates all the content elements inside the card
        // All elements start at the same time (200ms after card expansion begins)
        const contentTimeline = createTimeline();

        // IMAGE ANIMATION
        // The project logo/image with subtle bounce effect
        contentTimeline.add(image, {
          marginBottom: '280px',    // Push image up by adding bottom margin
          scale: [0.95, 1.03],      // ARRAY SYNTAX: [startValue, endValue] - grows from 95% to 103%
          rotate: [-1, 0],          // Starts slightly rotated left (-1°), straightens to 0°
          opacity: [0.7, 1],        // Fades in from 70% to 100% opacity
          duration: 1800,           // 1.8 seconds for smooth animation
          ease: 'outCubic',         // Cubic easing - smooth acceleration curve
        }, 200);  // DELAY: starts 200ms after timeline begins

        // DESCRIPTION TEXT ANIMATION
        // The project description with sliding and scaling effect
        contentTimeline.add(description, {
          marginBottom: '40px',     // Adjust spacing
          marginRight: '280px',     // Push text left to make room for other content
          opacity: [0.3, 1],        // Fades in from 30% to full opacity
          y: [20, 0],               // Slides up from 20px below to normal position
          scale: [0.95, 1],         // Grows from 95% to normal size
          duration: 1700,           // 1.7 seconds
          ease: 'outQuart'          // Quartic easing - smooth but slightly more dramatic than cubic
        }, 200);  // Same 200ms delay - starts with image

        // LINKS ANIMATION (Live App, GitHub)
        // Navigation links with diagonal slide-in effect
        contentTimeline.add(links, {
          top: '35px',              // Final position from top
          right: '40px',            // Final position from right
          opacity: [0, 1],          // Fade in completely
          x: [30, 0],               // Slides in from 30px to the right
          y: [-15, 0],              // Slides down from 15px above
          scale: [0.8, 1],          // Grows from 80% to full size
          duration: 1600,           // 1.6 seconds
          ease: 'outQuart'          // Consistent easing with description
        }, 200);

        // FEATURES LIST ANIMATION
        // The detailed features list with curved motion
        contentTimeline.add(features, {
          top: '115px',             // Final vertical position
          right: '10px',            // Final horizontal position
          opacity: [0, 1],          // Fade in
          x: [50, 0],               // Slides in from 50px to the right
          y: [15, 0],               // Slides up from 15px below
          scale: [0.9, 1],          // Grows from 90% to full size
          rotate: [2, 0],           // Starts rotated 2° clockwise, straightens
          duration: 1700,           // 1.7 seconds
          ease: 'outQuart'          // Consistent easing
        }, 200);

        // TECHNOLOGY STACK ANIMATION
        // The tech icons with bouncy entrance
        contentTimeline.add(techs, {
          right: '50px',            // Final position from right edge
          bottom: '30px',           // Final position from bottom
          opacity: [0, 1],          // Fade in
          y: [30, 0],               // Slides up from 30px below
          scale: [0.8, 1],          // Grows from 80% to full size
          rotate: [-3, 0],          // Starts rotated 3° counter-clockwise, straightens
          duration: 1800,           // 1.8 seconds (longest duration for final impact)
          ease: 'outCubic'          // Smooth cubic curve
        }, 200);

        // GLOW EFFECT ANIMATION
        // Creates the themed shadow glow around the card
        animate(card, {
          // ARRAY SYNTAX for boxShadow: [startShadow, endShadow]
          boxShadow: ['0px 0px 5px 2px rgb(97, 97, 97)', getShadowColor()],
          duration: 1600,           // 1.6 seconds for gradual glow buildup
          ease: 'outQuart'          // Smooth transition
        });
      };

      // MOUSE LEAVE HANDLER (HOVER OUT ANIMATION)
      // This function runs when user stops hovering over the card
      const mouseleaveHandler = () => {

        // MAIN CARD CONTRACTION ANIMATION
        // Returns the card to its original size and appearance
        const mainTimeline = createTimeline();

        mainTimeline.add(card, {
          // ARRAY SYNTAX: [currentValue, targetValue] for smooth reverse transition
          scale: [1.02, 0.98],      // Shrink from expanded (102%) back to resting (98%)
          opacity: [1, 0.85],       // Fade from full opacity back to 85%
          y: [-8, 0],               // Lower from lifted position back to normal
          rotate: [0.5, 0],         // Remove rotation back to 0°

          // SIZE RETURN:
          width: '400px',           // Back to original width
          height: '250px',          // Back to original height

          // TIMING:
          duration: 1400,           // 1.4 seconds (faster than expansion for snappy feel)
          ease: 'outQuint',         // Quintic easing - very smooth deceleration

          // VISUAL EFFECTS RETURN:
          filter: ['brightness(1.1)', 'brightness(0.9)'], // Dim back to 90%
          boxShadow: [getShadowColor(), '0px 0px 5px 2px rgb(97, 97, 97)'] // Remove glow
        });

        // CONTENT HIDING ANIMATION
        // Hides all inner elements in coordinated sequence
        const hideTimeline = createTimeline();

        // TECH STACK DISAPPEARS FIRST
        // Usually the last thing that appeared, first to disappear
        hideTimeline.add(techs, {
          right: '-300px',          // Move far off-screen to the right
          bottom: '0px',            // Return to bottom edge
          opacity: [1, 0],          // Fade out completely
          y: [0, -25],              // Move up while fading (adds elegance)
          scale: [1, 0.7],          // Shrink to 70% while disappearing
          rotate: [0, 6],           // Add 6° rotation while exiting
          duration: 1100,           // 1.1 seconds
          ease: 'inQuart'           // "In" easing - starts slow, accelerates (opposite of entrance)
        }, 100); // DELAY: 100ms after timeline starts

        // FEATURES LIST SLIDES OUT
        hideTimeline.add(features, {
          top: '-205px',            // Move off-screen upward
          right: '-250px',          // Move off-screen to the right
          opacity: [1, 0],          // Fade out
          x: [0, 70],               // Slide right while fading
          y: [0, -20],              // Slide up while fading
          scale: [1, 0.8],          // Shrink to 80%
          rotate: [0, -3],          // Rotate counter-clockwise while exiting
          duration: 1100,           // 1.1 seconds
          ease: 'inQuart'           // Consistent exit easing
        }, 100);

        // LINKS FADE OUT
        hideTimeline.add(links, {
          top: '-180px',            // Move off-screen upward
          right: '30px',            // Stay at horizontal position
          opacity: [1, 0],          // Fade out
          x: [0, -40],              // Slide left while fading
          y: [0, 20],               // Slide down while fading
          scale: [1, 0.7],          // Shrink to 70%
          duration: 1100,           // 1.1 seconds
          ease: 'inCubic'           // Cubic "in" easing
        }, 100);

        // DESCRIPTION SLIDES BACK
        hideTimeline.add(description, {
          marginBottom: '40px',     // Reset margin
          marginRight: '0px',       // Remove right margin
          opacity: [1, 0.9],        // Slight fade (not completely transparent)
          y: [0, 12],               // Slide down slightly
          scale: [1, 0.95],         // Shrink slightly to 95%
          duration: 1200,           // 1.2 seconds (slightly longer)
          ease: 'inOutQuad'         // "InOut" easing - smooth both ends
        }, 100);

        // IMAGE RETURNS TO ORIGINAL POSITION
        hideTimeline.add(image, {
          marginBottom: '0px',      // Remove bottom margin
          scale: [1.03, 1],         // Shrink from 103% back to normal
          rotate: [0, 0.5],         // Add slight rotation while returning
          opacity: [1, 0.95],       // Slight fade to 95%
          duration: 1200,           // 1.2 seconds
          ease: 'inOutQuart'        // Smooth quartic curve both directions
        }, 100);
      };

      // EVENT LISTENER SETUP
      // Store function references on the DOM element for proper cleanup
      // This prevents memory leaks and ensures smooth operation
      card._mouseenterHandler = mouseenterHandler;   // Store reference for later removal
      card._mouseleaveHandler = mouseleaveHandler;   // Store reference for later removal

      // ATTACH EVENT LISTENERS
      // Connect the animation functions to actual mouse events
      card.addEventListener('mouseenter', mouseenterHandler);  // Trigger on hover
      card.addEventListener('mouseleave', mouseleaveHandler);  // Trigger on hover exit
    });

    // CLEANUP FUNCTION
    // This runs when the component unmounts or dependencies change
    // Prevents memory leaks by removing event listeners
    return () => {
      projectRefs.current.forEach((card) => {
        if (card && card.parentNode) {  // Safety check - ensure element still exists
          // Remove event listeners using the stored references
          card.removeEventListener('mouseenter', card._mouseenterHandler);
          card.removeEventListener('mouseleave', card._mouseleaveHandler);
        }
      });
    };
  }, []); // Empty dependency array - only run once on mount

  // REF COLLECTION HELPER FUNCTION
  // This function collects DOM element references as they're created
  // React calls this for each project card element
  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {  // Avoid duplicates
      projectRefs.current.push(el);  // Add to our collection
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
