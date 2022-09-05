import { Container} from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import twitter from "../assets/img/twitter-algo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  return (
    <section className="project">
      <Container>
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInBottomRight" : ""}>
                <h2>Be part of the Unowned!</h2>
                <p>Remember, only dead fish follows the current. We will create our own ways, we will create a path for the Unowned, and we will do unusual ways to be successful and that's what makes us, the Unowned, unique.</p>
              </div>}
        </TrackVisibility>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="/"></img>
      <Container>
      <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/hk1MfGPT1ng" title="Youtube Video" allowfullscreen></iframe>
              </div>    <br /><br />
              <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInBottomLeft" : ""}>
                <h2 className="pt-44" id="projects">The Unowned Chart</h2>
              </div>}
        </TrackVisibility>

      <div className="ratio ratio-16x9">
                  <iframe src="https://dexscreener.com/ethereum/0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640" title="dexscreener" allowfullscreen></iframe>
              </div>          <br /><br />

              <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2 className={isVisible ? "animate__animated animate__zoomInRight" : ""} id="exp">The Twitter Expeditionem</h2>           
                 <img  className={isVisible ? "animate__animated animate__rotateInDownLeft" : ""}src={twitter} alt="Logo" />
                <p className={isVisible ? "animate__animated animate__zoomInDown" : ""}>Being Unowned educated me that <i>"what sets us apart is actually helping us succeed,"</i> so being different isn't always a bad thing.
                  My parents and peers thought I'd never be successful believing in something that I knew could change the course of my life, but I proved them wrong.
                  Join us and participate in breaking the <i>amicabiliter interventus</i> algorithm by using the hashtags #unownedERC and $Unowned on Twitter.</p>
              </div>   }
        </TrackVisibility>          
        
         <div className="text-center">
              <a href="https://twitter.com/TheUnownedERC20" target="_blank" rel="noopener noreferrer" class="btn btn-dark btn-lg">Spread the word...</a>             
          </div> 

      </Container>
    </section>
    
  )
}


