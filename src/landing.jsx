import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'
function Landing(props) {
    
    return (
        <div className='landingPage'>
            <h1>GAME OF SHOOT</h1>
            <div className='gun-Container'>
                
                <img className='gun' src={require("./images/gunTopView.jpg")} alt="gunTop"/>
                <img className='bullet' src={require("./images/bullet.png")} alt='png'/>
                <img className='bullet1' src={require("./images/bullet.png")} alt='png'/>
                <h1 className='link'><Link className="linkBtn" to='gameplay'>LET'S PLAY</Link></h1>
            </div>
            <div>
                <img className='target' src={require('./images/people-target.jpg')} alt='people-carry- target board'/>
                <img className='target1' src={require('./images/people-target.jpg')} alt='people-carry- target board'/>
                
            </div>
            <audio autoPlay loop>
                <source src={require("./theme.mp3")} type="audio/mpeg"/>
            </audio>
            
            
        </div>
    );
}

export default Landing;