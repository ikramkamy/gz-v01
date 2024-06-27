import ProductItem from "../Products/ProductItem";
import {UseProductsStore} from "../stores/ProductsStore";
const NouveatePcBuilder=()=>{
  const {NewProducts}=UseProductsStore((state)=>state)  
    return(
      <div  className="w-full mt-10 flex flex-col justify-center items-center">
         <h1 className="uppercase text-[28px]">new arrivals</h1>
        <div 
         className=" w-7/12  h-[60vh] flex flex-wrap items-center
          overflow-y-auto justify-center mb-20 ">
   
{NewProducts.map((e)=><ProductItem 
 urlImage={e.urlImage} name={e.name} typeProduct={e.typeProduct} 
 descreption={e.descreption} price={e.price} btn={e.btn}


/>)}

        </div>
    </div>
    )
}
export default NouveatePcBuilder;