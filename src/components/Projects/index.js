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

function Projects() {
  return (
    <div className="projects">
      {/* <div className="projects-header" id='projects'>Projects</div> */}
      <div className="projects-container">
        {/* SnkrMrkt CARD */}
        <div className="project-card snkr-mrkt-card">
          <div className="project-image snkr-mrkt-image">
            <img src="https://imgur.com/KOgkPYD.png" alt="project" />
          </div>
          <div className="project-page snkr-mrkt-page">
            <img src={"https://i.imgur.com/nWhSavf.png"} alt="project page" />
          </div>
          <div className="project-description snkr-mrkt-description">
          We are a team of sneaker enthusiasts who are passionate about bringing the best selection of sneakers to our customers.
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
            <div>
              - StockX API<br></br>
              <br></br>- Post Sneakers to sell<br></br>
              <br></br>- Shopping Cart<br></br>
              <br></br>- Sneaker Review & Comment<br></br>
              <br></br>- Dynamic Search Bar<br></br>
              <br></br>- AWS S3 Image uploads<br></br>
            </div>
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
              <div className="project-tech">
                <img src={postgresql} alt="tech logo" />
                <div>PostgreSQL</div>
              </div>
              <div className="project-tech">
                <img src={express} alt="tech logo" />
                <div>Express</div>
              </div>
              <div className="project-tech flask-tech">
                <img src={css} alt="tech logo" />
                <div>CSS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Spud-Hub Card */}
        <div className="project-card">
          <div className="project-image farm2fork-image">
            <img src="https://imgur.com/qOywlWk.png" alt="project" />
          </div>
          <div className="project-page farm2fork-project-page">
            <img src="https://imgur.com/kc1SbA6.png" alt="project page" />
          </div>
          <div className="project-description farm2fork-description">
          Farm2Fork is a site where people can buy locally grown produce from
          farmers who have excess goods to share.
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
            <div>
              - Create an Artist Page<br></br>
              <br></br>- Product Listings<br></br>
              <br></br>- Shopping Cart<br></br>
              <br></br>- Reviews on products<br></br>
              <br></br>- Sign up / in with email<br></br>
            </div>
          </div>
          <div className="project-techs">
            <div className="project-techs-top">
              <div className="project-tech js-tech">
                <img src={js} alt="tech logo" />
                <div>JavaScript</div>
              </div>
              <div className="project-tech">
                <img src={python} alt="tech logo" />
                <div>Python</div>
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
              <div className="project-tech flask-tech">
                <img src={flask} alt="tech logo" />
                <div>Flask</div>
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
            Discover your new favorite playlists and create your own.
          </div>
          <div className="project-links goodTunes-links">
            <a href="https://good-tunes.herokuapp.com">
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
            <div>
              <br></br>- Create Shelves to add albums<br></br>
              <br></br>- Search by artist or album<br></br>
              <br></br>- Leave reviews for albums<br></br>
              <br></br>- Discover music videos<br></br>
              <br></br>- Sign up / in with email<br></br>
            </div>
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
            {/* <img src="https://i.imgur.com/2y2FmRJ.png" alt="project" /> */}
            <img src="https://imgur.com/a9oTqbS.png" alt="project page" />
          </div>
          <div className="project-page beachitt-page">
            <img src="https://imgur.com/LZ8DYx3.png" alt="project page" />
          </div>
          <div className="project-description beachitt-description">
            Find Find your next international beach getaway.
          </div>
          <div className="project-links">
            <a href="https://beachitt-surfers.herokuapp.com/">
              Live App
              <i class="fas fa-globe"></i>
            </a>
            <a href="https://github.com/owiwamasa/beachitt-surfer-proj">
              GitHub
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="project-features-list beachitt-features">
            <div className="project-features-title">Features List</div>
            <div>
              - Google Map w/ Skate Spots<br></br>
              <br></br>- Create a Rental listing<br></br>
              <br></br>- AWS S3 Image uploads<br></br>
              <br></br>- Comment on listings<br></br>
              <br></br>- Google Maps API<br></br>
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
              <div className="project-tech">
                <img src={css} alt="tech logo" />
                <div>CSS3</div>
              </div>
              <div className="project-tech flask-tech">
                <img src={postgresql} alt="tech logo" />
                <div>PostgreSQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
