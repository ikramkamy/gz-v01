import trace1 from "../../assets/home/section1/Tracé 47.png";
import trace2 from "../../assets/home/section1/Tracé 41.png";
import trace3 from "../../assets/home/section1/Tracé 46.png";
import trace6 from "../../assets/home/section1/Tracé 45.png";
import trace7 from "../../assets/home/section1/Tracé 43.png";
import trace8 from "../../assets/home/section1/Tracé 44.png";
import { BtnPcBuilder1 } from "../PcBuilder/BtnPCBuilder";
import { useEffect, useState } from "react";
import chipamd from "../../assets/pcbuilder/chip-front.avif"
import { Link } from "react-router-dom";

const AnimatedFragments=({bw , handelBlackWhite})=>{
    const [elem , setElem]=useState(0);
const [classVisible, setClassVisible]=useState('flex');
const [dynamicPosition, setDynamicPosition]=useState({
    postion1:'',
    postion2:'',
    postion3:'',
    postion4:'',
    postion5:'',
    postion6:'',
    postion7:'',
    postion8:'',
    postion9:'',
    postion10:'',
    postion11:'',
  })
const handelDynamicPositionInitial =()=>{
    setDynamicPosition({
      postion1:'',
      postion2:'',
      postion3:'',
      postion4:'',
      postion5:'',
      postion6:'',
      postion7:'',
      postion8:'',
      postion9:'',
      postion10:'',
      postion11:'',
  
    })
  }
const handelDynamicPosition=()=>{
    setDynamicPosition({
      postion1:'translate-x-[100%] translate-y-[100%] rotate-[0deg] transition ease-in-out delay-150 opacity-50',
      postion2:'translate-x-[45%] max-sm:translate-x-[100%] translate-y-[150%] rotate-[0deg] transition ease-in-out delay-150 opacity-0',
      postion3:'-translate-x-[100%] translate-y-[100%] rotate-[0deg]  opacity-50',
      postion4:'-translate-x-[140%] translate-y-[100%] rotate-[0deg] transition ease-in-out delay-150 opacity-50',
      postion5:'translate-x-[410%] transition ease-in-out delay-150 opacity-0',
      postion6:'-translate-x-[45%] transition ease-in-out delay-150 opacity-0',
      postion7:'translate-x-[147%] -translate-y-[35%] rotate-[2deg] transition ease-in-out delay-150 opacity-0',
      postion8:'-translate-x-[30%] -translate-y-[30%] rotate-[0deg] transition ease-in-out delay-150 opacity-0',
 
  
    })
  }

    return( <div className="relative ">
<div id="btnpcbuilder1"
      className={`${bw} absolute w-full h-full flex flex-col 
      justify-between max-sm:w-10/12 max-md:mt-10  
       bg-bgpcbuilder2 bg-cover bg-no-repeat bg-center
        
  `}
onMouseEnter={handelDynamicPosition} onMouseLeave={handelDynamicPositionInitial}/>
<div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black top-0 "/>
        <div className="flex w-full justify-between " >
          
           {/***** image*******/}
                      
                      <img src={trace1} alt="gaming zone" className={` opacity-20 w-[50px] h-[50px] opacity-70  max-sm:translate-y-0 max-lg:w-[24px]  max-lg:h-[24px] animate-spin-slow animate-running ${dynamicPosition.postion1}`}/>
          {/***** image*******/}
                     <img src={trace2} alt="gaming zone" className={`opacity-20 w-[150px] h-[150px] max-w-[80px] ${dynamicPosition.postion2}`}/>
          {/***** image*******/}
                     <img src={trace3} alt="gaming zone" className={`opacity-20  w-[60px] h-[60px]  max-sm:translate-y-0 animate-spin-slow ${dynamicPosition.postion3}`}/>
           
      </div>
           <div className={`flex w-full justify-between w-1/3  h-[1/3] `}>
            {/***** image*******/} 
             <img src={trace1} alt="gaming zone" className={`opacity-20 w-[50px] h-[50px]   rotate-[-135deg] ${dynamicPosition.postion5}`}/>
             {/***** central big size  image*******/} 
             
             
             <img src={trace6} alt="gaming zone" className={`opacity-20  w-[40%] h-full max-lg:w-[91px]  max-lg:h-[93px]  rotate-[313deg] `}/>
           
            {/*****image*******/}          
            <img src={trace1} alt="gaming zone" className={`opacity-20 max-sm:rotate-180w-[24px]  w-[50px] h-[50px] animate-spin-slow ${dynamicPosition.postion4}`}/>
          </div>
          <div className="flex w-full  justify-between m-t-10 ">
            {/***** image*******/} 
             <img src={trace7} 
             alt="gaming zone" 
             className={`opacity-20 max-md:hidden max-sm:ranslate-x-[0%] w-[50px] h-[50px]  rotate-[65deg] ${dynamicPosition.postion7}`}/>
             <BtnPcBuilder1 handelBlackWhite={handelBlackWhite}/>
             
             
             {/***** image*******/} 
              <img src={trace8} alt="gaming zone" className={`max-sm:translate-x-[-35%]  w-[50px] h-[50px]  max-sm:ranslate-y-[35%] max-sm:rotate-[2deg] ${dynamicPosition.postion8}`}/>
           
           </div>

           
  </div> 
)
}
export default AnimatedFragments;