import React from 'react';

const PlayBar =(props)=> {
  
const {
  handlePause, 
  isPlaying, 
  handlePrev,
  handleNext,
  currentTime,
  duration,
  progress,
  handleProgress,
  songName
  
}= props;


  return (

      <div className="footer wrap container">     
        <div className="playbarinfo">
          <div className="no-wrap" >
            {songName}
          </div>
          <div>
            <img width='20px' className=" invert" onClick={()=>handlePrev()} src="svg/backward.svg"/>
            <img  width='24px' className="invert" onClick={()=>handlePause()} src={`svg/${isPlaying? 'pause':'play'}.svg`} />                 
            <img width='20px' onClick={()=>handleNext()} className="navbtn invert" src="svg/forward.svg"/>
          </div>
                          
          <div className="songTime"> 
          <p>{currentTime}/{duration}</p>
          </div>
        </div>
        <div className='progressCont'>
          <div className="progressBar" onClick={handleProgress}>   
          </div>    
          <div className="circle" style={{ left: `${progress}%` }}>
          </div>
        </div>

      </div>
  );
}

export default PlayBar;
