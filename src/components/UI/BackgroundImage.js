import React from 'react'
import footballImg from "../../assets/bg-football.jpg";
import logoImg from "../../assets/logo.footbal.png";


const BackgroundImage = () => {
  return (
    <div>   <div className="h-72 ioi">
    <img src={footballImg} alt="background" className="object-cover h-full w-full" />
    <div className="flex justify-center">
      <img src={logoImg} alt="background" className="-mt-60" />
    </div>
  </div></div>
  )
}

export default BackgroundImage