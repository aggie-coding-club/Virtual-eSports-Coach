import React, { Component } from 'react';
import glass from "../../assets/searchglass.png";
import { useGlitch } from 'react-powerglitch'
import { Cards } from '../../components';
import { ParallaxProvider,useParallax, Parallax} from 'react-scroll-parallax';
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import axios from 'axios';
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

  export default class HomeTitle extends Component {
    
    constructor(props) {
        
        super(props);
        this.state = {data: [],id: '',reload: false};
        this.onChangeID = this.onChangeID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      } 
      List() {
        return this.state.data
      }
      refresh = () => {
        window.location.reload()
      }
      
      onChangeID(e) {
        this.setState({
          id: e.target.value
        })
        /*console.log(this.state.id)*/
      }
      onSubmit(e) {
        e.preventDefault();
        console.log('submitted '+this.state.id)
       try{ 
        const user = this.state.id.split('#')[0]
        const tag = this.state.id.split('#')[1]
        axios.get(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${user}/${tag}?api_key=RGAPI-663a7a7a-8389-473f-b10a-5681c7882f0a`)
    .then((response) => {
      console.log(response);
    });
  }catch(err)
  {
    console.log('input invalid')
  }
  
  }
      
         
  render() {
    return (
          
      <div className="hometitle section__padding align-middle d-flex justify-content-center" id="home">
          <div className="hometitle-content " >

              {/* Big gradient text */}
              {/*<GlitchClip duration={"2s"}>*/}
              <span><h1 className="gradient__text pb-4">Improve your skills at various competitive shooter titles</h1></span>
              {/*</GlitchClip>*/}
              {/* VeC description */}
              <div className='flex flex-wrap gap-7 '>
      {projects.map((project, index) => (
        <StepsCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>

              {/* Username input searchbar */}
              <div className="hometitle-username__input ">
                  <input type="text" placeholder="Enter your Riot ID" onChange={this.onChangeID}/>

                  {/* Enter button */}
                  <button type="button" className='d-flex justify-content-center' onClick={this.onSubmit}>
                      <img src={glass} alt="searchglass" className='mt-2'/>
                  </button>
              </div>

          </div>
      </div>
  );
  }
}