 import Navbar from "../navbar";
 import Footer from '../footer';
 import HeaderPages from "../commun/HeaderPages";
 import AnimatedFragments from "../commun/AnimatedFragments";
 import AnimatedFragments2 from "../commun/AnimatedFragments2";
 import { UsePrebuiltComputersStore } from "../stores/PrebuiltComputers";
import { useState } from "react";
import SideBarItem from "./SideBarItem";
import { usePcbuilderStore } from "../stores/PcbuilderStore";
import { UseProductsStore } from "../stores/ProductsStore";
import PcComponent from "./PcComponent";
import FilterBarPcBuilder from "./FilterBar";
import LowerBar from "./LowerBar";
import NouveatePcBuilder from "./NouveatePcbuilder";
import './pcbuilder.css';
     const Pcbuilder=()=>{
     const {CurrentConfig}=usePcbuilderStore((state)=>state)
     const {AllProducts}=UseProductsStore((state)=>state)
     const {technicalSpecification}=UsePrebuiltComputersStore((state)=>state)
     const [selectedCategory, setSelectedCategory] = useState(technicalSpecification[0])
     const [bw , setBw]=useState('grayscale')
     const [bw2 , setBw2]=useState('grayscale')
     const [textcolor, setTextcolor]=useState('hover:text-redPrimary')
     const handelBlackWhite=()=>{
      setBw2('grayscale')
      setBw('grayscale-0')
      setTextcolor('hover:text-redPrimary')
      
       }
  const handelBlackWhite2=()=>{
      setBw2('grayscale-0')
      setBw('grayscale')
      setTextcolor('hover:text-bluePrimary')
      console.log(textcolor)
  }
  const handelNewconfig=()=>{
    console.log(CurrentConfig.motherBoard)
  }
  const handelSelectedCategory=(e)=>{

setSelectedCategory(e)
  }
    return(
<div className="w-full flex flex-col justify-center items-center">
     <Navbar/>
     <HeaderPages title="pc builder"/>


{/**********first part: images to switch between intel and AMD***********/}
<div className="w-7/12  flex mt-10 max-md:w-full">
    <div className="w-1/2 h-fit ">
    <AnimatedFragments bw={bw} handelBlackWhite={handelBlackWhite}/>
     </div>
    <div className="w-1/2 h-fit ">
    <AnimatedFragments2 bw2={bw2} handelBlackWhite={handelBlackWhite2}/>
    </div>
<div>

</div>

</div>
<div className="bg-[#0F0F0F] w-7/12 max-md:w-full flex flex-col
 items-end justify-end mt-10">
<FilterBarPcBuilder selectedCategory={selectedCategory} icon={selectedCategory.urlImage} length={AllProducts.length} /> 
     
<div className=" w-full  flex justify-between items-cenetr   h-[60vh]">
     <div className="h-full w-[15%] flex flex-col ">
     <div className="pb-4  h-full w-full flex flex-col
      justify-between items-center   
      max-sm:translate-x-[-90%] hover:max-sm:translate-x-[0%]">
     {technicalSpecification.map((e)=>
     <SideBarItem textcolor={textcolor} icon={e.urlImage} name={e.name} specifcation={e.specifcation}
     btnFill={textcolor}
     handelSelectedCategory={()=>handelSelectedCategory(e)}
     />)}
     </div>
     </div>
 
     
     <div className="w-10/12 flex flex-col  overflow-y-auto">
     {AllProducts.map((e)=>
  <div className="pb-4 w-full flex flex-col justify-center items-center">
<PcComponent name={e.name} price={e.price} filter={e.filter} 
urlImage={e.urlImage} textcolor={textcolor} />
</div>
)} 
    

    </div> 
     

</div>


<LowerBar textcolor={textcolor} />
</div>
<div className="w-full flex justify-center items-center  ">
<NouveatePcBuilder />
</div>
<Footer/>
</div>)
 }
 export default Pcbuilder;