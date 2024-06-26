import FreeSoloCreateOption from "../commun/InputAutoComplete";
import BasicSelect from "../commun/SelectDropdown";
import { UseProductsStore } from "../stores/ProductsStore";

const FilterBarPcBuilder=({selectedCategory,icon , length})=>{
// length is the number of item selected of each category 
const {Allproducts}=UseProductsStore((state)=>state)
    return(
    <div className="flex w-10/12  items-center justify-between px-8 ">
    <div className="flex items-center">
    <img src={icon} alt=""  className="w-[25px] h-[25px] mx-2"/>
    <p>{selectedCategory.name}</p>
    <p className="mx-2">{length}</p>
    </div>
    <div className="flex items-center">
    <h1 className="mx-2">filtering </h1>
    <svg xmlns="http://www.w3.org/2000/svg" width="12.547" height="11.392" viewBox="0 0 12.547 11.392">
    <path id="Icon_feather-filter" data-name="Icon feather-filter" d="M14.547,4.5H3L7.619,9.962v3.776l2.309,1.155V9.962Z" transform="translate(-2.5 -4)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    </svg>
    </div>

    <FreeSoloCreateOption/>
    <h1 className="mx-2">Sort by </h1>
    <BasicSelect/>
    </div>)
}
export default FilterBarPcBuilder;