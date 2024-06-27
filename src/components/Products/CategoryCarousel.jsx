import Carousel from "react-multi-carousel"; 
import mb from '../../assets/category/motherboard.png';
import ram from '../../assets/category/ram.png';
import power from "../../assets/category/power.png";
import cooling from "../../assets/category/watercooling.png"
import processor from "../../assets/category/processor.png"
import img from "../../assets/category/case.png"
import {responsive } from "../carou/data";
import ssd from "../../assets/category/ssd.png"
const CarouselCategoryItem=({img, name})=>{

}


const ProductCategoiesCarousel=()=>{
    const list=[
        {
        category:"CPU",
        img:processor
        },
        {
            category:"RAM",
            img:ram
            },
        {
            category:"Mother Board",
            img:mb
            },
            {
                category:"Cooler",
                img:cooling
                },
                {
                    category:"Power",
                    img:power
                    },
                    {
                        category:"Case",
                        img:img
                        },
                        {
                            category:"SSD",
                            img:ssd
                            },



]
    const categorylist = list.map((item) => (
        <div className="relative h-[80%] flex flex-col
        justify-center items-center 
        max-sm:w-[100vw] w-[248.199px] h-[67.415px]">
            
        <img src={item.img} alt="gaming zone brands" 
      className="z-10 w-[100px] m-5"/>
      <p>{item.category}</p>
      </div>
        ));
    return(
        <div className="w-full flex justify-center items-center ">
            {list.length}
        <Carousel className="w-1/2 flex items-center  justify-center"
        showDots={false} autoPlay draggable={true}   responsive={responsive}>
              {categorylist}
            
            
      </Carousel>
      </div>)
}
export default ProductCategoiesCarousel;