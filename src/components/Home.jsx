import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import './Global.css';
import './Home.css';

import bannerImg from '../assets/img-2.jpg';

// import { useAnimation } from '../hooks/useCustomHooks';


export default function Home() {
  // Initialize animation hook
  // useAnimation();

  useEffect(() => {
    AOS.init();
  }, []);

  return(
    <>
      <div className="banner img-container">
        <img src={bannerImg} alt="banner" />
        <div className="container" data-aos="fade-up">
          <h1 data-aos="fade-up">Sean Gowans</h1>
        </div>
      </div>

      <div className="intro">
        <div className="container" data-aos="fade-up">
          <p>“Hi, I’m Sean Gowans, a Web Developer and Software Engineering Student living in Germany. With over 7 years of professional experience building custom WordPress solutions for an Australian company, I’ve honed my craft in remote, independent work environments. My passion lies in creating scalable, user-focused digital experiences and pushing myself to grow across modern technologies.”</p>
          <p>Mission Statement: “I believe in learning by doing, adapting quickly, and delivering high-quality code that helps businesses thrive. Whether it’s a custom WordPress theme, an eCommerce solution, or a React-powered app, I bring discipline, creativity, and reliability to every project.”</p>
        </div>
      </div>
    </>
  );
}