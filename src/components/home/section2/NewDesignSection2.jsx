import back from "../../../assets/home/section2/back.jpg";
import manette from "../../../assets/home/section2/manette.png";
import config from "../../../assets/home/section2/config2.png";
import mouse from "../../../assets/home/section2/mouse.png";
import headphone from "../../../assets/home/section2/headphone.png";
import Flicking from "@egjs/react-flicking";
import { Perspective,  AutoPlay } from "@egjs/flicking-plugins";
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import BuildIcon from '@mui/icons-material/Build'; 
import {Link }from "react-router-dom";
const NewdesignSection2=()=>{
    const plugins = [
        new Perspective({ rotate: -1, scale: 4, perspective: 600 }),
        new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: false })
      ];
    return(
    <div className="relative my-10 w-full h-screen flex justify-center items-center px-10">
    
    <div className="absolute w-full h-full">
     <img src={back} alt="pc building" className="w-full h-full opacity-30"/>
    </div>
    <div className="py-2 px-2 flex  justify-center items-center max-sm:flex-col  z-10 ">
    <div className="w-1/4 h-full  ">
    <Flicking  circular={true} plugins={plugins}>
    <img src={manette} alt='' className="z-10  rotate-[45deg] "/>
    <img src={config} alt="pc config" />
    <img src={mouse} alt="mouse"/>
    <img src={headphone} alt="headphone"/>
    </Flicking>
    </div>
    <div className="bg-gradient-to-b from-redPrimary rounded-3xl  py-10 px-4 flex w-1/4 items-center  flex-col justify-start">

    <div className="uppercase w-fit ml-4 max-sm:w-full 
         text-[37px] mb-2 text-center  max-lg:text-[20px] max-sm:text-[18px] fontNeuropol">
          build your dream pc</div>
          <h2>Gaming experience</h2>
          <h3 className="text-[18px] ml-10 my-10 w max-lg:text-[12px] max-sm:text-center  text-left max-sm:w-full max-sm:p-5">
            Grow your empire as you learn to repair, build and customize PCs at the next level.<br/> Experience deeper
             simulation, an upgraded career mode,<br/> and powerful new customisation features. <br/>
             Use realistic parts from 40+ hardware brands to bring your ultimate PC to life.</h3>
             <Stack direction="row" spacing={2} className="my-10">
      <Button variant="outlined" startIcon={<BuildIcon className="text-redPrimary"/>} className="" 
      sx={{
        
        borderColor: '#CA2026', // custom outline color
        color: '#FFFFFF', // custom text color
    '&:hover': {
         
          borderColor: '#CA2026', // custom hover outline color
        },
      }}
      
      
      
      >
       <Link to="/pcbuilder">PC BUILDER</Link> 
      </Button>
      <Button variant="contained" endIcon={<SendIcon className="text-greyPrimary"/>} className="text-redPrimary"
      sx={{
        backgroundColor: '#CA2026', // custom background color
        borderColor: '#FFC080', // custom outline color
        color: '#FFFFFF', // custom text color
        '&:hover': {
          backgroundColor: '#00000000', // custom hover background color
          borderColor: '#FFA07A', // custom hover outline color
        },
      }}
      
      >
        <Link to="/products">Shop </Link>
      </Button>
            </Stack>
    </div>
    </div>
    </div>)
}
export default NewdesignSection2;