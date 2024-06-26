import RangeSlider from "./Slider";
import { UseProductsStore } from "../../components/stores/ProductsStore";
import { useState } from "react";

const FiltersProducts=({filtersActive,handeldetailedFilters,transormFilterStructure})=>{
const [fillColor, setFillColor]=useState("#707070")
const {setFiltersofEachCategory, FiltersofEachCategory}=UseProductsStore((state)=>state)
const [list, setList]=useState([])
const [filterStructure, setFilterStructure]=useState({
  brands:[],
  model:[],
  support:[],
  platform:[],
})
const getThefilterdetails=(e,p)=>{
 var elem={
    [e]:p
 }

var index = list.some((el) => JSON.stringify(el) === JSON.stringify(elem));

 if (index === false || list.length === 0) {
  list.push(elem)
 setList([...list])

setFiltersofEachCategory(list);
//update the structure of the filter with each change
//transormFilterStructure()
} else{
var array=list.filter((el) => JSON.stringify(el) !== JSON.stringify(elem))
setFiltersofEachCategory(array);
setList(array)
  //update the structure of the filter with each change
  //transormFilterStructure()

}

var array=[];
var array1=[];
var array2=[];
var array3=[];

   
    FiltersofEachCategory.forEach((el)=>{
        if(Object.keys(el)[0] === 'brands'){
          array.push(Object.values(el)[0])
          
              setFilterStructure({
                      brands:array,
                      support:array1,
                      model:array2,
                      platform:array3,
             
              })
        
         } else if (Object.keys(el)[0] ==='support'){
              array1.push(Object.values(el)[0])
           setFilterStructure({
              
              brands:array,
              support:array1,
              model:array2,
              platform:array3,
              
           })
         } else if(Object.keys(el)[0] ==='model'){
              array2.push(Object.values(el)[0])
              setFilterStructure({
                   brands:array,
                   support:array1,
                   model:array2,
                   platform:array3,
                  
                })
         }else if(Object.keys(el)[0] ==='platform'){
              array3.push(Object.values(el)[0])
              setFilterStructure({
                   brands:array,
                   support:array1,
                   model:array2,
                   platform:array3,
                })
         }
    })
   console.log(filterStructure)
   console.log(FiltersofEachCategory)
}





const handelclear=()=>{
   setList([])
   setFiltersofEachCategory([])
   handeldetailedFilters()
     //update the structure of the filter with each change
  //transormFilterStructure()
}
    return(
 
 
   <div className="z-10">
      <div className="flex justify-between max-sm:justify-center w-full   items-center ">
      <h1 className="">Filters</h1>
    <div>
    <div  onClick={()=>handelclear()} className=" p-2 mt-20 bg-redPrimary max-sm:bg-black  " >Clear</div>
    <div  onClick={handeldetailedFilters} className=" p-2 mt-2 max-sm:mt-2 bg-redPrimary max-sm:bg-black  " >Validate</div>
    </div>
    </div>
    <div className="w-1/2 ">
    
    {FiltersofEachCategory.map((e)=>
    <div className="flex  text-[11px] items-center">
    <p className="mr-2 "> {Object.values(e)[0]}</p>
    <p className="" onClick={()=>getThefilterdetails(Object.keys(e)[0], Object.values(e)[0]  )}>
   

      <svg 
      onMouseEnter={()=>setFillColor('#CA2026')} onMouseLeave={()=>setFillColor('#fff')}
      xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 29 29">
               <g id="Groupe_1226" data-name="Groupe 1226" transform="translate(-0.411 -0.412)">
                 <g id="Ellipse_137" data-name="Ellipse 137" transform="translate(0.411 0.412)" fill={fillColor} stroke="#707070" stroke-width="1" opacity="0.27">
                   <circle cx="14.5" cy="14.5" r="14.5" stroke="none"/>
                   <circle cx="14.5" cy="14.5" r="14" fill="none"/>
                 </g>
                 <g id="Groupe_416" data-name="Groupe 416" transform="translate(11.181 9.55)">
                   <line id="Ligne_279" data-name="Ligne 279" x2="9.885" y2="9.885" fill="none" stroke="#d6d6d6" stroke-width="1"/>
                   <line id="Ligne_280" data-name="Ligne 280" x1="8.473" y2="9.885" fill="none" stroke="#d6d6d6" stroke-width="1"/>
                 </g>
               </g>
             </svg>
   </p>
   
    </div>)}
    </div>
    {filtersActive.filtersList?.map((filter)=> 
   <div className="w-full flex-col pb-4 border-b-2 border-b-secondary">
   <h1 className="uppercase text-[14px]  text-redPrimary mb-4 mt-4">{filter.filterName}</h1>
   <select className="bg-black text-white w-[200px] focus:outline-0" 
   option={filter.filtersItems} 
   value={filter.filterName} 
   onChange={(e)=>getThefilterdetails(filter.filterName,e.target.value )} >
  {filter.filtersItems.map((item)=>
  
     <option value={item}>{item}
    
   {/* <input type="checkbox" className="mr-4" 
              value={item}
              
              checked={item.FilterIsActive}  
              onClick={()=>getThefilterdetails(filter.filterName, item)}/>
  <label className="text-[14px] w-full">{item}</label>*/}
  </option>
   ) }
   </select>
        </div>)}
   
             {/****Filter by Price*****/}
                           <div className="flex flex-col mt-2">
                            <h1 className="uppercase tex-[28px] mt-2">filter by price</h1>
                             <RangeSlider/>
                           </div>

                  
                  
                   </div>
   )
}
export default FiltersProducts;