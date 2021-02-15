import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../images/ProfilePic.jpeg'

const Home = (props) => {
  return (
    <div className="home">
      <div className="home-left">
        <img src={picture} alt="Headshot"/>
        <div className="social">
          <h2>Riley Slayden</h2>
          <p>Missoula, MT</p>
          <hr className="line"/>
          <h3><a target="_blank" href="https://github.com/slaydenriley">GitHub</a> | <a target="_blank" href="https://www.linkedin.com/in/riley-slayden-9a82b8193/">LinkedIn</a></h3>
        </div>
      </div>

      <div className="home-right">
        <h1>Biography</h1>
        <hr className="line"/>
        <p>
          Hello, my name is Riley Slayden! I am an (almost) graduate of
          Flatiron School's software engineering course. The technologies I use include
          Ruby on Rails, React/Redux. HTML/CSS/Javascript.</p>
        <p>
          Aside from coding, I am a huge outdoor enthusiast. Being raised in Montana, I was exposed
          to skiing, fly-fishing, hiking, camping, to mention a few.
        </p>
        <hr className="line"/>
        <div class="home-cards">
          <Link className="home-card" to="/projects">Projects</Link>
          <Link className="home-card" to="/posts">Blog</Link>
          <Link className="home-card" to="/resume">Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
