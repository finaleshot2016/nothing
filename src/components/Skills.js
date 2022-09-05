import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">            

                    <div className="skill-bx wow zoomIn">       
                    <TrackVisibility>
              {({ isVisible }) =>
                        <h2 className={isVisible ? "animate__animated animate__lightSpeedInRight" : ""}>THE UNOWNED TAX</h2>}
                        </TrackVisibility>
                        <TrackVisibility>
              {({ isVisible }) =>
                        <p className={isVisible ? "animate__animated animate__lightSpeedInLeft" : ""}><br></br>Reasonable 4/4 tax, to prevent MEV bots stealing our ETH.<br />
Start of 0.2% max buy and max bag, to prevent snipers holding the bottom.<br />
Lastly for those who will snipe too early, will get rewarded.</p>}
                        </TrackVisibility>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider justify-content-center">
                            <div className="item">
                                <img src={meter1} alt="Image3" />
                                <h5>Buy Tax</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image1" />
                                <h5>Sell Tax</h5>
                            </div>
                        </Carousel>
                    </div>     
                </div>
            </div>
        </div>   
        <img className="background-image-left" src={colorSharp} alt="Image2" />
    </section>
  )
}
