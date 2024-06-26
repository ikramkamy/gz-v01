import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterObject from "./FilterObject";
const PcComponent=({name,filter, price , urlImage, textcolor})=>{
  const [btnFill, setBtnFill]=useState('none')
  const [dynamicColor, setDynamicColor]=useState('')
  useEffect(()=>{
    if(textcolor === "hover:text-redPrimary"){
      setBtnFill('#CA2026')
      //dynamic class with tailwind doesn't work correctly
      setDynamicColor('dynamicredText')
    }else{
      setBtnFill('#05C7FD')
      setDynamicColor('dynamicblueText')
    }
  },[textcolor])
  console.log(`filter`, filter)

    return(
  <div className={`relative w-full  
   h-fit  flex  items-center justify-end
     hover:border-2 border-[${btnFill}] bg-gradient-to-r from-greyPrimary`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="absolute hidden top-0" 
    xlink="http://www.w3.org/1999/xlink" width="675" height="134.1" viewBox="-60.363 0 675 134.1">
  <defs>
    <linearGradient id="linear-gradient" x1="0.068" y1="0.644" x2="1" y2="0.622" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#2e2e2e"/>
      <stop offset="1" stop-color="#101010"/>
    </linearGradient>
    <filter id="Tracé_355" x="0" y="0" width="675" height="134.1" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Tracé_355)">
    <path id="Tracé_355-2" data-name="Tracé 355" d="M-14294.535-2217.959l-60.363,133.974h675v-134.1Z" transform="translate(14363.9 2224.08)" fill="url(#linear-gradient)"/>
  </g>
</svg>


<div className="flex z-10 w-full">
 <div className="w-1/6 ">
  <img src={urlImage} alt="pc builder" className="w-full "/>
  </div>
      <div className="flex w-5/6  flex-col items-end justify-center px-2">
           <p className="w-9/12">{name}</p>
           {/* <FilterObject filter={filter}/> */}
           {/* {filter.map((e)=><div className="w-1/6 border-2 border-bluePrimary">{e}</div>)} */}
           <div className="flex w-1/2 justify-between items-center">
           <p 
            className={`${dynamicColor} `}
           
           >{price} DZD</p>
           <div className="flex">
           <p className={`${textcolor.split('hover:')[1]}`}>
            <Link className={`${textcolor.split('hover:')[1]} mx-2`} to="/viewproduct/:id">learn more</Link>
            </p>
           <div className="relative w-1/2 flex justify-center items-center">
            <p className={`uppercase text-[8px] absolute cursor-pointer hover:font-bold`}>select</p>
           <svg xmlns="http://www.w3.org/2000/svg" width="106.952"
            height="30.598" viewBox="0 0 106.952 30.598">
                 <g id="Tracé_357" data-name="Tracé 357" transform="translate(4.223)"
                 fill={btnFill}>
                   <path d="M 92.36032867431641 29.84799766540527 
                   L -3.224924802780151 29.84799766540527 L 5.204265117645264 0.7499978542327881 L 101.7008438110352 0.7499978542327881 L 92.36032867431641 29.84799766540527 Z" stroke="none"/>
                   <path d="M 5.767837524414062 1.499998092651367 
                   L -2.226821899414062 
                   29.09799766540527 L 91.81339263916016 29.09799766540527
                    L 100.6724014282227 1.499998092651367 L 5.767837524414062 
                    1.499998092651367 M 4.64068603515625 -1.9073486328125e-06 
                    L 102.7292861938477 -1.9073486328125e-06 L 92.90727233886719 
                    30.59799766540527 L -4.2230224609375 30.59799766540527
                     L 4.64068603515625 -1.9073486328125e-06 Z"
                      stroke="none" fill={btnFill}/>
                 </g>
           </svg>
            
            </div>
           </div>
           </div>
           </div>
           </div>
    </div>)
}
export default PcComponent;