import Navbar from "../navbar";
import Footer from "../footer";
import HeaderPages from "../commun/HeaderPages";
import img from '../../assets/contact/NoPath - Copy 19.svg';
import {BtnLogin, Textzone, BtnLogin66, BtnLogin55 , BtnLogin5 ,BtnLogin9, BtnLogin7,BtnLogin11} from "../commun/BtnLogin";
import { UseBrandssStore } from "../stores/BrandsStore";
import ItemContact from "./ItemContect";
const ContactUs=()=>{
    const {services}=UseBrandssStore((state)=>state)
    return(
    
  <div className="relative w-full flex justify-center items-center flex-col">
          <img src={img} alt="gaming zone partners" className="absolute  top-0   h-full w-full opacity-10"/>
        <Navbar/>
        <HeaderPages title="contact us"/>
<div className=" w-10/12 flex flex-col justify-center items-center ">
       


<div className=" max-sm:w-full  relative px-52 max-sm:px-0 py-10 max-sm:py-0 flex    flex-col jutify-between items-center">


<div className="z-10 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-full px-52 max-sm:px-0 max-sm:py-0 py-20  bg-bglogin max-sm:bg-none bg-center bg-no-repeat bg-contain">
    <div className="flex max-sm:flex-col justify-center  items-center max-sm-w-full ">
          <div className="flex flex-col w-1/2 max-sm:w-full">
           <BtnLogin5/>
           <BtnLogin9/>
          </div>
          <div className="flex flex-col mx-2 items-center max-sm:hidden">
           <svg xmlns="http://www.w3.org/2000/svg" width="2" height="85.277" viewBox="0 0 2 85.277">
             <line id="Ligne_206" data-name="Ligne 206" y2="85.277" transform="translate(1)" fill="none" stroke="rgba(255,255,255,0.41)" stroke-width="2"/>
           </svg>


                 <svg xmlns="http://www.w3.org/2000/svg" width="2" height="85.277" viewBox="0 0 2 85.277">
               <line id="Ligne_206" data-name="Ligne 206" y2="85.277" transform="translate(1)" fill="none" stroke="rgba(255,255,255,0.41)" stroke-width="2"/>
             </svg>

          </div>
          <div className="flex flex-col w-1/2 max-sm:w-full">

          <BtnLogin55/>
          <BtnLogin66/>

          </div>
          <div className="max-sm:w-full bg-re-500 sm:hidden">
          <BtnLogin11/>
            </div> 
    </div>
          
   <div className="max-sm:w-full max-sm:hidden">
   <Textzone/>
   </div> 
   
    <div className="justify-center items-center">
         <BtnLogin7 btn="send" />
    </div>     
          
</div>
        
</div>
</div>
<div className="flex max-sm:flex-col w-7/12 justify-between mb-20 max-sm:mt-20">
{services.map((e)=><ItemContact img={e.urlImage} title={e.title} subtitle={e.subtitle} phone={e.phone} email={e.email}/>)}
</div>
         <Footer/>
    </div>)
}
export default ContactUs;