import React, {useState, useRef } from 'react'
import ArrowKeysReact from 'arrow-keys-react';
import './game.css'

function Game(props) {
    const aud = useRef()
    const volume = useRef()
    const [rotation, setRotation] = useState(600)
    const [anima, setAnimation] = useState(true)
    const [count,setCount] = useState(0)
    const [thumb, setThumb] = useState(true)
    const [plus, setplus] = useState(true)
    const [arr, setArr] =useState( [{image:'./images/people-target.jpg', class:'down'},
                                    {image:'./images/people-target.jpg', class:'down'},
                                    {image:'./images/people-target.jpg', class:'up'},
                                    {image:'./images/people-target.jpg', class:'down'},
                                    {image:'./images/people-target.jpg', class:'down'},
                                    {image:'./images/people-target.jpg', class:'down'},
                                    {image:'./images/people-target.jpg', class:'down'},
                                    {image:'./images/people-target.jpg', class:'down'},
                                    {image:'./images/people-target.jpg', class:'down'},
                                    {image:'./images/people-target.jpg', class:'down'}])
        
    const changes=()=>{
        let division = rotation/100
        
        if(arr[parseInt(division)].class==='up'){
            setCount((old)=>{
                return old+1
            })
            setplus(false)
            let brr = arr.map((val, i)=>{
                if(val.class==='up'){
                    val.image ="./images/boom.png"
                }
                else{
                    val.image = './images/people-target.jpg'
                    
                }
                return val
            })
            setArr(brr)
        }
        else{
            setThumb(false)
        }
        
        let temp = Math.floor(Math.random()*10)
        setTimeout(()=>{
            
            let brr =arr.map((val, i)=>{
                if(i===temp){
                    val.class= 'up'
                    val.image = './images/people-target.jpg'
                }
                else{
                    val.class='down'
                    val.image = './images/people-target.jpg'
                }
                return val
            })
            setArr(brr)
            setAnimation(true)
            setplus((old)=>true)
            setThumb((old)=>true)
        }, 2000)
        
       
        
    }
   
    
    ArrowKeysReact.config({
        left: () => {
            if(rotation>=200){
                setRotation((old)=>{
                    return old - 10
                  })
            }
          
        },
        right: () => {
            if(rotation<1200){
                setRotation((old)=>{
                    return old + 10
                  })
            }
          
        },
        up: () => {
          setAnimation(!anima)
            changes()
        },
        down: () => {
          console.log('down key detected.');
        }
      });
    return (
        <div className='mainConatiner'>
            <div className='arrContainer'>
                {arr.map((val, i)=>{
                    return(
                        <img className={val.class} key={i} src={require(""+val.image)} alt="images"/>
                    )
                    
                })}
            </div>
            
            <div className='gunBullet-conatainer'  {...ArrowKeysReact.events} tabIndex="1" style={{left:`${rotation}px`}}>
            <img className={anima?'bullet2' :'bullet2 anim'} src={require("./images/bullet.png")} alt='png'/>
            <img className='gunInGame' src={require("./images/gunTopView.jpg")} alt="gunTop" />
        </div>
        <div className='btnContainer'>
            <h1 className={plus?'inActiveplus':"plus1"}>+1</h1>
            <img className={thumb?'inActivethumb':"thumb"} src={require("./images/thumbdown.jpg")} alt="thumb down"/>
            <h1>{count }</h1>
        <audio ref={volume} loop autoPlay>
                <source src={require("./gameTheme.mp3")} type="audio/mpeg"/>
            </audio>
            <audio ref={aud} >
                <source src={require("./9mm.mp3")} type="audio/mpeg"/>
            </audio>
            <div>
            <button onClick={()=>{if(rotation>=0){
                setRotation((old)=>{
                    return old - 50
                  })
            }}}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
            <button onClick={()=>{
                setAnimation(!anima)
                changes();
                aud.current.play()
            }}><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
            <button onClick={()=>{
                if(rotation<1000){
                    setRotation((old)=>{
                        return old + 50
                      })
                };
                
                
            }}><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
        </div> 
        
        </div>
        
    );
}

export default Game;