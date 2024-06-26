
import svg from '../../assets/pcbuilder/rectangle.svg';
const SideBarItem=({icon,name, specifcation , textcolor, btnFill, handelSelectedCategory})=>{
    return(
    <div className={`relative group h-fit  
         hover:border-2 border-[${btnFill}] flex justify-center items-center w-full px-2
    justify-between items-center bg-bgSidBarPcBuilder bg-no-repeate bg-center bg-cover 
    py-2 
    max-md:flex-col 
   
    `}
    onClick={handelSelectedCategory}
    >
     
      <img src={icon} alt="pc builder icon" className='w-[30px] h-[30px] mr-2 '/>
      <div className='flex  flex-col justify-start items-start w-3/4 z-10 '>
      
      <h1 className={`uppercase cursor-pointer font-bold  ${textcolor}`}>{name}</h1>
      <p className='text-[7px]  '>{specifcation}</p>
      
     </div>
    </div>)
}
export default SideBarItem;