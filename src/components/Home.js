import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="home">
      <div className="home-left">
        <img src="https://i.imgur.com/o8oMm9i.jpg" alt="Riley Slayden Headshot"/>
        <div className="social">
          <h2>Riley Slayden</h2>
          <p>Missoula, MT</p>
          <hr className="line"/>
          <h3><a target="_blank" rel="noreferrer" href="https://github.com/slaydenriley">GitHub</a> | <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/riley-slayden-9a82b8193/">LinkedIn</a></h3>
        </div>
      </div>

      <div className="home-right">
        <h1>Biography</h1>
        <hr className="line"/>
        <p>
          Hello, my name is Riley Slayden! I am a software test engineer based out of Missoula, MT. I graduated from Flatiron
          School's software engineering course in 2021, where I learned a multitude of technologies including Ruby on Rails, HTML/CSS/Javascript,
          React/Redux, and SQL.
        </p>

        <p>
          In my current position as a test engineer at Submittable, I write automated UI tests using TestCafe and JS and manage
          our smoke test project. These automated tests run daily with deployments. In addition to this, I frequently utilize
          AWS ECS Fargate containers for running automated UI tests and load tests on the Submittable's application. Other duties include
          deploying daily, manual testing, writing tickets in Jira, and PR reviews for other test engineers.
        </p>

        <p>
          Aside from coding, I am a huge outdoor enthusiast and musician. Being raised in Montana, I was exposed
          to skiing, fly-fishing, hiking, and camping. For a while, I toured the country as a professional banjo player
          with the band "National Park Radio."
        </p>
        <hr className="line"/>
        <div className="home-cards">
          <Link className="home-card" to="/projects">Projects</Link>
          <Link className="home-card" to="/posts">Blog</Link>
          <Link className="home-card" to="/resume">Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
