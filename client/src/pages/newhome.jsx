import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube';
export default class NewHome extends Component {
    
    constructor(props) {
        
        super(props);
      } 
  render() {
    
    return (
      <div style={{height:'100%'}}>
        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' muted controls={false} style={{zIndex:'-1',position:'absolute'}} width={'100vw'} height={'100vh'} playing={'true'}/>
        <div style={{backgroundColor: 'rgba(11,11,11,0.5)', width:'60vw',height:'10vh', position:'absolute', zIndex:'0',marginLeft:'20vw',marginTop:'30vh'}}>
        <h1 className='navheader' style={{color:'#ffffff',textAlign:'center',marginTop:'10px'}}>Header Text</h1>
    </div>
      </div>
    )
  }
}