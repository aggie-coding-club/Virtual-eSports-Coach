
import {SkyboxCanvas} from "../components";


import React, { Component } from 'react';
import glass from "../assets/searchglass.png";
import { useGlitch } from 'react-powerglitch'
import { Cards } from '../components';
import { ParallaxProvider,useParallax, Parallax} from 'react-scroll-parallax';
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import axios from 'axios';
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const StepsCard = ({
    index,
    name,
    description,
    tags,
    number
  }) => {
    return (
      <>
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
                {tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div></>
    );
  };

  export default class Home extends Component {
    
    constructor(props) {
        
        super(props);
        this.state = {id: '',reload: false,matches:[],toggle:'',matchdata:[],pagenumber:0};
        this.onChangeID = this.onChangeID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      } 
      
      getMatches() {
        return this.state.matches
      }
      matchesLen(){
        return this.state.matches.length
      }
      getPage() {
        return this.state.pagenumber
      }
      refresh = () => {
        window.location.reload()
      }
      timeConvert(time){
        const months ={'Jan':1,'Feb':2,'Mar':3,'Apr':4,'May':5,'Jun':6,'Jul':7,'Aug':8,'Sep':9,'Oct':10,'Nov':11,'Dec':12}
        var dateLocal = new Date(time);
        const datestr = dateLocal.toString().split(' ')
        const outstr = months[datestr[1]]+'/'+datestr[2]+'/'+datestr[3]+' '+datestr[4]
        return outstr
      } 
      promisedSetState = (newState) => new Promise(resolve => this.setState(newState, resolve));
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
        axios.post('https://vec.onrender.com/riot/puuid', {
          'user': user,
          'tag': tag
        })
        .then((response) =>{
          axios.get(`https://vec.onrender.com/riot/matches/${response.data.puuid}`)
        .then(async(response) =>{
          await this.promisedSetState({
            matches:response.data.history
          })
          console.log(this.state.matches)})})}catch(err){console.log('input invalid'+err)}
      }
      getMatch(matchid){
        axios.get(`https://vec.onrender.com/riot/match/${matchid}`)
        .then((response) =>{
          console.log(response.data);
          var joined = Object.assign({},this.state.matchdata,{[matchid]:JSON.stringify(response.data)})
          this.setState({toggle:matchid,matchdata:joined});}).catch((err)=>{console.log(err);})
      console.log(this.state.matchdata)
      }
         
  render() {
    
    return (
      <>
      <SkyboxCanvas/>
      <div style={{minHeight:"100vh"}}>
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
      <div className='gradient-bg hometitle-content' style={{width:"100%"}}>
              
      {this.matchesLen()>=1?<div className='mt-3'>
  {this.getMatches().slice(this.getPage()*10,this.getPage()*10+10).map(item => (
    <div className='d-flex bg-tertiary rounded-xl mt-1 justify-content-center pl-3 pr-3 scale-up-center'>
    {this.state.toggle===item.matchId
            ? <div key={item.matchId}>
              <div onClick={() => {this.setState({toggle:''})}}>
              <p style={{cursor:"pointer"}}>Time: {this.timeConvert(item.gameStartTimeMillis)}&nbsp;&nbsp;&nbsp;Game: {item.queueId}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▲</p>
              </div>
            <div className='text-white tinytext'><p className='text-white tinytext'>{this.state.matchdata[item.matchId]}</p></div></div>
            
            : <div key={item.matchId} onClick={() => {this.getMatch(item.matchId)}}><p style={{cursor:"pointer"}}>Time: {this.timeConvert(item.gameStartTimeMillis)}&nbsp;&nbsp;&nbsp;Game: {item.queueId}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼</p></div>}
    </div>
  ))}
      </div>:''}


      {this.matchesLen()>=1?<div className='row'>
      <div className='col mr-5'>
        {this.getPage()>=1?<h1 style={{cursor:"pointer"}} onClick={() => {this.setState({pagenumber:this.getPage()-1})}}>◀</h1>:""}
      </div>
      <div className='col ml-5'>
        {(this.getPage()+1)*10<this.matchesLen()?<h1 style={{cursor:"pointer"}} onClick={() => {this.setState({pagenumber:this.getPage()+1})}}>▶</h1>:""}
      </div>
      </div>:""}</div></div></>
  );
  }
}