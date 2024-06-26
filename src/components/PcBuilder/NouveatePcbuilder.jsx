import ProductItem from "../Products/ProductItem";
import {UseProductsStore} from "../stores/ProductsStore";
const NouveatePcBuilder=()=>{
  const {NewProducts}=UseProductsStore((state)=>state)  
    return(
        <div 
         className=" w-7/12 flex flex-wrap items-center justify-center mb-20 ">
    
{NewProducts.map((e)=><ProductItem 
 urlImage={e.urlImage} name={e.name} typeProduct={e.typeProduct} 
 descreption={e.descreption} price={e.price} btn={e.btn}


/>)}

    </div>
    )
}
export default NouveatePcBuilder;