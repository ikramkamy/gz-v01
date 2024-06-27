
import { useEffect, useState } from "react";
import { useEcommerceStore } from "../stores/EcommerceStore";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem=({product, img, productName,price,quantity,subTotal,products })=>{
 const {addQuantity , productsList,setTotalfunction,setProductListfuntion}=useEcommerceStore((state)=>state)
const [count, setCount]=useState(0) ;
const [sub, setSub]=useState(0);
const [total, setTotal]=useState(0);

const calculateTotal=()=>{
  var t= 0;
  products.forEach(element => {
    setTotal(t += element.subTotal);
    console.log("total",t)
    
  });
  setTotal(t)
  setTotalfunction(t)
  console.log("total",total)
}
const add=()=>{
  var index = products.findIndex(el => JSON.stringify(el) === JSON.stringify(product)); 
  console.log(index)

  if(index > -1){
      setCount(count+1)
      product.quantity = count+ 1
      setSub(product.quantity * product.price)
      product.subTotal = product.quantity * product.price 
      calculateTotal()
     
  }
  else if (index === -1){
    products.push(product)
    console.log("adding product to cart")
  }


}
const minus=()=>{
  if(product.quantity !==0){
    setCount(count-1)
      product.quantity = count- 1
      setSub(product.quantity * product.price)
      product.subTotal = product.quantity * product.price 
      
  }
  calculateTotal()

}
var list=productsList;
const deleteproduct=()=>{
var index= list.findIndex((el)=>JSON.stringify(el) === JSON.stringify(product))

list.splice(index, 1)
console.log('list', list)
setProductListfuntion(list)
}
// useEffect(()=>{
//   var t= total;
//   products.forEach(element => {
//     t=t+element.subTotal;
//     setTotal(t)
//     console.log("sub",element.subTotal)
//     setTotalfunction(total)
//   });
// console.log("total", t)
// },[ count])


    return(
    <div className="w-full py-5 flex justify-between items-center border-t-2 border-t-[#C2C2C2]">
        <div className="flex items-center justify-start  " 
        onClick={()=>deleteproduct()}>
           <Stack spacing={2} direction="row" className="">
          <DeleteIcon color="" fill="none" className="cursor-pointer"/>
          </Stack>
        <svg
        className="cursor-pointer hidden"
        xmlns="http://www.w3.org/2000/svg"
         width="29" height="30" viewBox="0 0 29 30">
               <g id="Groupe_1228" data-name="Groupe 1228" 
               transform="translate(27.589 5.15)">
                 <g id="Ellipse_137" data-name="Ellipse 137" 
                 transform="translate(-27.589 -5.15)" fill="#fff" 
                 stroke="#707070" stroke-width="1" opacity="0.27">
                   <ellipse cx="14.5" cy="15" rx="14.5" ry="15" stroke="none"/>
                   <ellipse cx="14.5" cy="15" rx="14" ry="14.5" fill="none"/>
                 </g>
                 <g id="Groupe_416" data-name="Groupe 416" transform="translate(-16.819 3.944)">
                   <line id="Ligne_279" data-name="Ligne 279" x2="9.885" y2="9.885" fill="none" stroke="#d6d6d6" stroke-width="1"/>
                   <line id="Ligne_280" data-name="Ligne 280" x1="8.473" y2="9.885" fill="none" stroke="#d6d6d6" stroke-width="1"/>
                 </g>
               </g>
        </svg>

         </div>
        <div className="flex items-center">
            <img src={img} className="w-[25px] h-[25px] " alt="shpoing gaming zone products"/>
        </div>
        <div className="flex items-center max-sm:text-[10px] max-lg:text-[11px]   w-1/6">
            {productName}
        </div>
        <div className="flex items-center w-1/6 max-sm:text-[10px]  text-[#ca2026]">{price}<span className="text-white text-[11px] mx-2">DZD</span></div>
        <div className="flex max-sm:flex-col max-sm:justify-center max-sm:text-[10px] items-center w-1/6 max-sm:w-1/12">
        <div className="relative flex 
         justify-center items-center max-sm:w-1/2 max-md:mb-2 cursor-pointer" onClick={()=>minus()}>
          <svg 
          className="hidden"
          xmlns="http://www.w3.org/2000/svg"
           width="" height="" viewBox="0 0 39.815 30.598"> 
          <path id="Tracé_20773" data-name="Tracé 20773"
           d="M-4621.446,2231.9l-8.207,30.6h-31.608l7.734-30.6Z"
           transform="translate(4661.261 -2231.902)" fill="#363636"/>
           </svg>
            <p className="absolute z-10">-</p>
            <Stack spacing={2} direction="row" className=" bg-greyPrimary">
      
                 <Button variant="" color="">-</Button>

            </Stack>              
            </div>

            <div className="relative flex justify-center items-center max-sm:w-1/2 ">
            <svg className="hidden" xmlns="http://www.w3.org/2000/svg"
             width="" height="" viewBox="0 0 39.815 30.598"> <path id="Tracé_20773" data-name="Tracé 20773" d="M-4621.446,2231.9l-8.207,30.6h-31.608l7.734-30.6Z" transform="translate(4661.261 -2231.902)" fill="#ca2026"/></svg>
            {/* <p className=" ">{count}</p> */}
            </div>
            <Stack spacing={2} direction="row" className=" bg-redPrimary">
      
                  <Button variant="" color="">{count}</Button>

                 </Stack>  


            <div className="relative flex justify-center 
            items-center max-sm:w-1/2 max-md:mt-2 cursor-pointer" 
            onClick={()=>add()}><svg 
            className="hidden"
            xmlns="http://www.w3.org/2000/svg" 
            width="" height="" viewBox="0 0 39.815 30.598"> <path id="Tracé_20773" data-name="Tracé 20773" d="M-4621.446,2231.9l-8.207,30.6h-31.608l7.734-30.6Z" transform="translate(4661.261 -2231.902)" fill="#363636"/></svg>
            {/* <p className="absolute " >+</p> */}
            
            <Stack spacing={2} direction="row" className=" bg-greyPrimary">
      
               <Button variant="" color="">+</Button>
      
            </Stack>
            
            
            
            </div>

        </div>
        <div className="flex items-center justify-center w-1/6 text-[#CA2026]">{sub}</div>

    </div>)
}
export default CartItem;