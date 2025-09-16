import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import './Global.css';
import './Header.css';
import './About.css';

import bannerImg from '../assets/img-3.jpg';
import profileImg from '../assets/profile-img.png';

// import { useAnimation } from '../hooks/useCustomHooks';


export default function About() {
    // Initialize animation hook
  // useAnimation();

  useEffect(() => {
    AOS.init();
  }, []);

  return(
    <>
      <section className="banner img-container">
        <img src={bannerImg} alt="banner"/>
        <div className="container">
          <h1 data-aos="zoom-in" data-aos-duration="1000">About</h1>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2 data-aos="zoom-in" data-aos-duration="1000">About Me</h2>

          <div className="flex gap-40">
            <div className="img-container">
              <img src={profileImg} alt="profile"/>
            </div>

            <div className="content">
              <p>I'm a web developer with a passion for creating beautiful and functional websites. I'm a quick learner and I'm always looking to improve my skills.</p>
              <p>I'm a quick learner and I'm always looking to improve my skills.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}