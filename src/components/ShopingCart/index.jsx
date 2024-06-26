import { useEcommerceStore } from "../stores/EcommerceStore";
import CartItem from "./CartItem";
import Navbar from "../navbar";
import Footer from "../footer";
import HeaderPages from "../commun/HeaderPages";
import { useState } from "react";
import TotalPrice from "./TotalPrice";
import img1 from "../../assets/shopingcart/LD0005773556_1_0005773565_0005773569-removebg-preview.png"
import img2 from "../../assets/shopingcart/pngwing.com (27).png"
const ShopingCart=()=>{
    const {productsList,total, couponCode,dispatch,totalWithtaxes, product}=useEcommerceStore((state)=>state);
    const [fillColor, setFillColor]=useState('#ffff');
    const [fillColor2, setFillColor2]=useState('#ffff');
  const [achats,setAchat]=useState([ {
    productName:"Samsung SSD 870 EVO 1TB",
    quantity:2,
    price:20000,
    subTotal:0,
    urlImage:img2,
   
},  {
    productName:"ELITE DDR4 ",
    quantity:0,
    price:20000,
    subTotal:0,
    urlImage:img1,
},
{
    productName:"Samsung SSD 870 EVO 1TB",
    quantity:3,
    price:3500,
    subTotal:0,
    urlImage:img2,
},
{
    productName:"ELITE DDR4 ",
    quantity:4,
    price:4900,
    subTotal:0,
    urlImage:img1,
}])
console.log("products list in the shoping cart",productsList)
    const add=(e)=>{
      console.log(e)
      var index =productsList.findIndex(el => JSON.stringify(el) === JSON.stringify(e));
      if(index === -1){
        achats.push(e)
        setAchat(achats)
        console.log(achats)
      }else{
        const elem =achats.find((el)=> JSON.stringify(el) === JSON.stringify(e))
        if(elem){
          elem.quantity++;
          console.log(achats)
        }
      }

    }
  
    return(
<div className="flex w-full flex-col justufy-center items-center w-full bg-[#141414]">
    <Navbar/>
    <HeaderPages title="shoping cart"/>
    {/*****************shoping cart header *************/}
    <div className="flex w-7/12 max-sm:w-full  flex-col mt-20 justify-center items-center ">
       <div className="flex w-full justify-center items-center">
                  <div className="w-full py-2 flex justify-between items-center border-t-2 border-t-[#C2C2C2]">
                          <div className="flex items-center justify-start "></div>
                          <div className="flex items-center justify-start "></div>
                          <div className="flex items-center justify-start w-1/6 max-lg:text-[11px]  max-sm:text-[10px] uppercase">product</div>
                          <div className="flex items-center justify-start w-1/6 max-lg:text-[11px]  max-sm:text-[10px] uppercase">price</div>
                          <div className="flex items-center justify-start w-1/6 max-lg:text-[11px]  max-sm:text-[10px] uppercase">quantity</div>
                          <div className="flex items-center justify-start w-1/6 max-lg:text-[11px]  max-sm:text-[10px] uppercase">sub-total</div>
                          </div>
                </div>
   {/*****************end shoping cart header *************/}
{productsList.map((e)=>
<CartItem 

products={achats}
product={e}
img={e.urlImage} 
productName={e.productName} price={e.price} 
quantity={e.quantity} subTotal={total}
/>)}
    </div>
  {/***********shoping cart btns**************/} 
<div className="w-10/12 flex  justify-start items-center mt-20">
<div className="flex max-sm:w-full  max-sm:flex-col">
<div className="relative flex justify-center items-center cursor-pointer" 
onMouseEnter={()=>setFillColor('#CA2026')}
onMouseLeave={()=>setFillColor("#ffff")}
>
    <p className="uppercase absolute z-10 text-black">apply coupon code</p>
<svg xmlns="http://www.w3.org/2000/svg" width="237.889" 
height="47.098" viewBox="0 0 237.889 47.098">
  <g id="Tracé_20775" data-name="Tracé 20775" 
  transform="translate(4.223)" fill={fillColor}>
    <path d="M -2.929373979568481 46.3455696105957 
    L 23.11957359313965 0.7504976987838745 
    L 232.4902954101562 0.990592360496521 
    
    L 211.5876159667969 45.94303894042969 L -2.929373979568481 46.3455696105957 Z" 
    stroke="none"/>
    <path d="M 23.55458068847656 
    1.500995635986328 L -1.6357421875 45.59313583374023
     L 211.1088256835938 45.19391632080078 
     L 231.3150482177734 1.739242553710938 
     L 23.55458068847656 1.500995635986328 
     M 22.6845703125 -3.814697265625e-06 
     L 233.66552734375 0.2419357299804688
      L 212.06640625 46.69212341308594
       L -4.2230224609375 47.09799957275391 
       L 22.6845703125 -3.814697265625e-06 Z" stroke="none" fill={fillColor}/>
  </g>
</svg>
</div>
<div className="relative flex justify-center items-center mt-2 cursor-pointer"

onMouseEnter={()=>setFillColor2('#CA2026')}
onMouseLeave={()=>setFillColor2("#ffff")}
>
<svg 

xmlns="http://www.w3.org/2000/svg" width="237.889" height="47.098" viewBox="0 0 237.889 47.098">
  <g id="Tracé_20775" data-name="Tracé 20775" transform="translate(4.223)" fill={fillColor2}>
    <path d="M -2.929373979568481 46.3455696105957 
    L 23.11957359313965 0.7504976987838745 
    L 232.4902954101562 0.990592360496521 
    L 211.5876159667969 45.94303894042969 
    L -2.929373979568481 46.3455696105957 Z" stroke="none"/>
    <path d="M 23.55458068847656 1.500995635986328
     L -1.6357421875 45.59313583374023 L 211.1088256835938 
     45.19391632080078 L 231.3150482177734 1.739242553710938 
     L 23.55458068847656 1.500995635986328 M 22.6845703125
      -3.814697265625e-06 L 233.66552734375 0.2419357299804688 
      L 212.06640625 46.69212341308594 L -4.2230224609375 
      47.09799957275391 L 22.6845703125 -3.814697265625e-06 Z" stroke="none" fill={!fillColor2}/>
  </g>
</svg>
<p className="uppercase  absolute z-10 text-black">
  enter your code</p>
</div>
</div>
</div>
  {/***********end shoping cart btns**************/} 



<div className="flex w-10/12 justify-end"> 


<TotalPrice total={total} dispatch={dispatch}/>
</div>



<Footer/>
    </div>)
}
export default ShopingCart;