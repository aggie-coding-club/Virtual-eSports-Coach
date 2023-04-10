import React from 'react';
import glass from "../../assets/searchglass.png";
import { useGlitch } from 'react-powerglitch'
import { Cards } from '../../components';
import { ParallaxProvider,useParallax, Parallax} from 'react-scroll-parallax';
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import './style.css'


const StepsCard = ({
    index,
    name,
    description,
    tags,
    number
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
        <Tilt
          options={{
            max: 45,
            scale: 1.05,
            speed: 450,
          }}
          className='bg-tertiary p-4 rounded-3xl sm:w-[360px] w-full h-full'
        >
            <div className='row'>
            <div className="circles col-3">
            <div className="circle">
                <p className="circle-text">{number}</p>
            </div></div><h3 className='text-white font-bold text-[24px] col-9 mt-2'>{name}</h3></div>
          <div className='mt-1'>
            
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
  
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  };

const HomeTitle = () => {
    const glitch = useGlitch();
    const { rotateanimation }  = useParallax<HTMLDivElement>({
        rotate: [0, 360],
      });
    return (
        
        <div className="hometitle section__padding align-middle d-flex justify-content-center" id="home">
            <div className="hometitle-content " >

                {/* Big gradient text */}
                {/*<GlitchClip duration={"2s"}>*/}
                <span ref={glitch.ref}><h1 className="gradient__text pb-4">Improve your skills at various competitive shooter titles</h1></span>
                {/*</GlitchClip>*/}
                {/* VeC description */}
                <div className='flex flex-wrap gap-7 '>
        {projects.map((project, index) => (
          <StepsCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

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
    );
}

export default HomeTitle