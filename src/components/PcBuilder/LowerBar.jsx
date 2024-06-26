import {Link }from 'react-router-dom'
import { useEffect, useState } from 'react'
const LowerBar=({total, textcolor})=>{
    const [btnFill, setBtnFill]=useState('none')
    useEffect(()=>{
        if(textcolor === "hover:text-redPrimary"){
          setBtnFill('#CA2026')
        }else{
          setBtnFill('#05C7FD')
        }
      },[textcolor])
      console.log(`border-[${btnFill}]`)
    return(<div className="w-full py-4 flex justify-between bg-greySecondary">
        <div className="flex ">
            <p className='mx-4'>Total</p>

            <p>{total}</p>
            
            </div>
           <div className={`w-2/12 h-full flex justify-center items-center bg-${btnFill}`}>
           <div className="w-fit mx-2">
                  <svg id="shopping-cart" xmlns="http://www.w3.org/2000/svg" width="23.824" height="20.939" viewBox="0 0 23.824 20.939">
                     <path id="Tracé_320" 
                     data-name="Tracé 320" 
                     d="M7.676,13.96H20.334a.7.7,0,0,0,.671-.506L23.8,3.682a.7.7,0,0,0-.671-.89H6.066L5.567.547A.7.7,0,0,0,4.886,0H.7a.7.7,0,1,0,0,1.4H4.326l2.52,11.34a2.094,2.094,0,0,0,.832,4.015H20.334a.7.7,0,0,0,0-1.4H7.678a.7.7,0,0,1,0-1.4ZM22.2,4.188l-2.393,8.376H8.237L6.376,4.188Zm0,0"
                      transform="translate(0 0)" fill={btnFill}/>
                     <path id="Tracé_321" data-name="Tracé 321" 
                     d="M150,362.094A2.094,2.094,0,1,0,152.094,360,2.1,2.1,0,0,0,150,362.094Zm2.094-.7a.7.7,0,1,1-.7.7A.7.7,0,0,1,152.094,361.4Zm0,0" transform="translate(-143.02 -343.249)" fill={btnFill}/>
                     <path id="Tracé_322" data-name="Tracé 322"
                      d="M362,362.094A2.094,2.094,0,1,0,364.094,360,2.1,2.1,0,0,0,362,362.094Zm2.094-.7a.7.7,0,1,1-.7.7A.7.7,0,0,1,364.094,361.4Zm0,0" transform="translate(-345.156 -343.249)" fill={btnFill}/>
                   </svg>
            </div>
            <p className={`${textcolor}`}>
                <Link to="/shopingcart">Go To Cart</Link>
            </p>


           </div>
    </div>)
}
export default LowerBar;