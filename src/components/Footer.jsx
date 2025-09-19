// import { useAnimation } from '../hooks/useCustomHooks';


// import { ExperienceTimer } from './EffectsManager'




// Initialize animation hook
  // useAnimation();




export default function Footer() {
  return(
    <>
      <footer className="footer">
        <div className="container">
          <p>Copyright &copy; Sean Gowans | 301509124 | Images from <a href="https://pexels.com" target="_blank">Pexels</a></p>
          <ExperienceTimer />
        </div>
      </footer>
    </>
  );
}