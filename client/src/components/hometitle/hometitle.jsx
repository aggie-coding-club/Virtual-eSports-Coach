import React from 'react';
import './style.css';
import glass from "../../assets/searchglass.png";
import { useGlitch } from 'react-powerglitch'
import { ParallaxProvider,useParallax, Parallax} from 'react-scroll-parallax';

const Steps = () => (
    <>
        <div className="circles">
            
            <div className="circle">
                <p className="circle-text">1</p>
            </div>

            <p className="circles.text">Enter your Riot ID</p>

            <div className="circle">
                <p className="circle-text">2</p>
            </div>

            <p className="circles.text">Upload a video</p>

             <div className="circle">
                <p className="circle-text">3</p>
            </div>

            <p className="circles.text">Get guidance to improve</p>

        </div>
    </>
)

const HomeTitle = () => {
    const glitch = useGlitch();
    const { rotateanimation }  = useParallax<HTMLDivElement>({
        rotate: [0, 360],
      });
    return (
        <div style={{zIndex: 10}}>
        <Parallax speed={-150} easing={'easeoutCubic'}>
        <div ref={glitch.ref}className="hometitle section__padding" id="home" style={{zIndex: 10, marginTop:-120, position:'absolute'}}>
            <div className="hometitle-content" >

                {/* Big gradient text */}
                {/*<GlitchClip duration={"2s"}>*/}
                <span ref={glitch.ref}><h1 className="gradient__text">Advance to the next level of gaming with Virtual eSports Coach</h1></span>
                {/*</GlitchClip>*/}
                {/* VeC description */}
                <Steps />

                {/* Username input searchbar */}
                <div className="hometitle-username__input">
                    <input type="text" placeholder="Enter your Riot ID"/>

                    {/* Enter button */}
                    <button type="button">
                        <img src={glass} alt="searchglass" />
                    </button>
                </div>

            </div>
        </div>
        </Parallax></div>
    );
}

export default HomeTitle