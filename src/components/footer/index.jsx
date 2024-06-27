import UserIcon from "../../assets/home/section1/icons/user.png";
import Arrow from "../../assets/home/section1/icons/ARROW 48.png";
import FaceBookIcon from "../../assets/home/section1/icons/Icon awesome-facebook-f.png";
import InstagramIcon from "../../assets/home/section1/icons/Icon feather-instagram.png";
import TwitterIcon from "../../assets/home/section1/icons/Icon awesome-twitter.png";
import YoutubeBookIcon from "../../assets/home/section1/icons/Icon awesome-youtube.png";
import Iconsearch from "../../assets/home/section1/icons/Icon feather-search.png";
import { useState } from "react";
const Footer=()=>{
    return(
<div className="flex flex-col  justify-center items-center bg-secondary text-[10px] z-10  relative w-full">
   
    
 
      {/**upper footer*/}


           <div className="flex max-sm:flex-col justify-between align-middle bor w-10/12 max-sm:w-full border-b-secondary border-b-2 p-4">
    
                      <div className="flex justify-start items-center w-3/12 max-sm:w-full ">
                    <a href="/"   className="mx-2">HOME</a>
                    <a href="/affiliate"  className="mx-2 uppercase">affiliate</a>
                    <a href="/faq"  className="mx-2">FAQ</a>
                    <a href="/contact"  className="mx-2 uppercase">contact us</a>
    
    
                      </div>
    
                     <div>
        {/**Social media section */}
                <div className="flex justify-between items-center max-sm:w-fit max-sm:mt-10" >
            <div className="flex justify-center items-center p-l-2">FOLLOW </div>
        

                   <a href="/facebook.com">
                       <div className="allIcon flex justify-center items-center mr-2 cursor-pointer relative ">
                       <svg xmlns="http://www.w3.org/2000/svg" width="33.498" height="27.867" viewBox="0 0 33.498 27.867" 
                       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                       <path id="Tracé_31" data-name="Tracé 31" d="M5.367,0H33.5L27.867,27.867H0Z" fill="#2d2d2d"/>
                        </svg>
                        <img src={TwitterIcon} alt="gaming zone twitter " className="mb-4 mt-3 mx-3   
                      w-[12] h-[12px] z-10"/></div>
                    </a>

                     <a href="/facebook.com">
                        <div className="allIcon flex  mr-2 cursor-pointer  relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33.498" height="27.867" viewBox="0 0 33.498 27.867" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                         <path id="Tracé_31" data-name="Tracé 31" d="M5.367,0H33.5L27.867,27.867H0Z" fill="#2d2d2d"/>
                         </svg>
                          <img src={FaceBookIcon} alt="gaming zone facebook  " className="mb-4 mt-3 mx-3 w-[12] h-[12px] z-10"/> </div> </a>
                     <a href="/facebook.com">
                          <div className="allIcon flex justify-center items-center mr-2 cursor-pointer relative ">
                         <svg xmlns="http://www.w3.org/2000/svg" width="33.498" height="27.867" viewBox="0 0 33.498 27.867" 
                         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                         <path id="Tracé_31" data-name="Tracé 31" d="M5.367,0H33.5L27.867,27.867H0Z" fill="#2d2d2d"/>
                         </svg>
                        <img src={InstagramIcon} alt="gaming zone twitter " className="mb-4 mt-3 mx-3   
                        w-[12] h-[12px] z-10"/></div>
                    </a>

                     <a href="/facebook.com">
                         <div className="allIcon flex justify-center items-center mr-2 cursor-pointer relative ">
                              <svg xmlns="http://www.w3.org/2000/svg" width="33.498" height="27.867" viewBox="0 0 33.498 27.867" 
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              <path id="Tracé_31" data-name="Tracé 31" d="M5.367,0H33.5L27.867,27.867H0Z" fill="#2d2d2d"/>
                              </svg>
                             <img src={YoutubeBookIcon} alt="gaming zone twitter " className="mb-4 mt-3 mx-3   
                             w-[12] h-[12px] z-10"/></div> 
                     </a>

      
        
                </div>  


                 </div>
      
    
    </div>



    <div className="flex justify-start text-left w-10/12 p-4 opacity-35 text-[14px] uppercase">
      © gaming zone – All rights reserved</div>


    </div>)
}
export default Footer;