import React, { useState,useEffect } from 'react'
import './Nav.css';
function Nav() {

const [show,setShow]=useState(false)

useEffect(() => {
  window.addEventListener('scroll',()=>{
    if(window.scrollY>100){
      setShow(true)
    }else{
      setShow(false)
    }
    //cleanup code
    return()=>{
      window.removeEventListener("scroll",()=>{

      })
    }
}, [])

 
 }


 )
 
  return (

    <div className={`nav ${show &&'nav__black'}`}>
    <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='netflix logo' ></img> 

    </div>




  )
}

export default Nav