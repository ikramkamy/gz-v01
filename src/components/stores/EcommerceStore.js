import { create  } from "zustand";
import img1 from "../../assets/shopingcart/LD0005773556_1_0005773565_0005773569-removebg-preview.png"
import img2 from "../../assets/shopingcart/pngwing.com (27).png"
import axios from 'axios';
import { Calculate } from "@mui/icons-material";

export const useEcommerceStore=create((set , get)=>(
{
    productsList:[
        {
            productName:"Samsung SSD 870 EVO 1TB",
            quantity:1,
            price:20000,
            urlImage:img2,
           
        },  {
            productName:"ELITE DDR4 ",
            quantity:5,
            price:20000,
            urlImage:img1,
        },
        {
            productName:"Samsung SSD 870 EVO 1TB",
            quantity:2,
            price:20000,
            urlImage:img2,
        },
        {
            productName:"ELITE DDR4 ",
            quantity:1,
            price:20000,
            urlImage:img1,
        },],

  
        total:0,
        dispatch:"Delivery costs are calculated at checkout",
        totalWithtaxes:0,
        isloading:false,
        
        setTotalfunction: async(val)=>{
         try {
            set({ total: val})
            
            console.log("val value is in the store", val)
         } catch (error) {
            
         }
         },

         setProductListfuntion: async(list)=>{
 
          try {

            set({ productsList: list })
            console.log('the new list of products', list)
          } catch (error) {
            
          }


         },



addQuantity: async(product)=>{
    
try {
    set( {
       product:{
        quantity: product.quantity+1
       },
    })
    console.log(product)
} catch (error) {
    
}
},
    
    //totalPrice: get().productsList.reduce((acc, product) => acc + product.price, 0),
    
    couponCode:
     {  applied:false,
        pourcetage:0,
    },
    
 

getCart: async()=>{
try {
    let response =await axios.get('')
    set ({isloading:true})
    set ({productsList:response.data})
    set ({couponCode:response.data})
} catch (error) {
    
}
    },
 



}))