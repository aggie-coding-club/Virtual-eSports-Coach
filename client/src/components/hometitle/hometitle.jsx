import React from 'react';
import './style.css';
import glass from "../../assets/searchglass.png";
import { useGlitch } from 'react-powerglitch'
import { ParallaxProvider,useParallax, Parallax} from 'react-scroll-parallax';


const HomeTitle = () => {
    const glitch = useGlitch();
    const { rotateanimation }  = useParallax<HTMLDivElement>({
        rotate: [0, 360],
      });
    return (
        <div ref={glitch.ref}className="hometitle section__padding" id="home" style={{marginTop : -950, paddingBottom:1000}}>
            <Parallax speed={10}>
            <div className="hometitle-content" >

                {/* Big gradient text */}
                {/*<GlitchClip duration={"2s"}>*/}
                <span><h1 className="gradient__text">Improve your skills at various competitive shooter titles</h1></span>
                {/*</GlitchClip>*/}
                {/* VeC description */}
                <p>The primary goal of Virtual eSports Coach is to serve as a website that helps gamers improve their skills in various popular competitive shooter titles, such as VALORANT, Overwatch 2, and more. First, gamers will enter their username, platform, and other information required to identify them. Then, the program will retrieve their statistics, determine which skills need the most improvement, and offer advice and mentorship. By providing customized training, practice routines, and other guidance for each client, Virtual eSports Coach will allow even casual gamers to make significant progress and advance to the next level of gaming.</p>

                {/* Username input searchbar */}
                <div className="hometitle-username__input">
                    <input type="text" placeholder="Enter your Riot ID"/>

                    {/* Enter button */}
                    <button type="button">
                        <img src={glass} alt="searchglass" />
                    </button>
                </div>

            </div>
            </Parallax>
        </div>
    );
}

export default HomeTitle