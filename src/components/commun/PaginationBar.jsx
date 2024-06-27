




const PaginationBar=({list})=>{
    
return(<div className="flex w-8/12 max-sm:w-full mt-20 mb-20 justify-between items-center
 relative bg-bgpaginationBar bg-no-repeat bg-center bg-cover px-5">
                  

        <div className="flex justify-center items-center z-10 h-full " >
         <h1  className="uppercase text-[10px] mr-2">Total number of products</h1>
         <h1 className="uppercase text-[10px] ml-2">{list.length}</h1>
       </div>
  
         <div className="flex w-1/4 justify-between items-center z-10 ">
        <div id="btnPagination" className="bg-bgpaginationBtn1 bg-no-repeat bg-center bg-contain w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-bgpaginationBtn2 transition ease-in-out delay-500">
           
             <div className="z-10">1</div>
        </div>
        <div id="btnPagination" className="bg-bgpaginationBtn1 bg-no-repeat bg-center bg-contain w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-bgpaginationBtn2 transition ease-in-out delay-500">
           
             <div className="z-10">2</div>
        </div>
        <div id="btnPagination" className="bg-bgpaginationBtn1 bg-no-repeat bg-center bg-contain w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-bgpaginationBtn2 transition ease-in-out delay-500">
           
             <div className="z-10">3</div>
        </div>
        <div id="btnPagination" className="bg-bgpaginationBtn1 bg-no-repeat bg-center bg-contain w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-bgpaginationBtn2 transition ease-in-out delay-500">
           
             <div className="z-10">4</div>
        </div>
        <div id="btnPagination" className="bg-bgpaginationBtn1 bg-no-repeat bg-center bg-contain w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-bgpaginationBtn2 transition ease-in-out delay-500">
           
             <div className="z-10"><span className="mx-2 font-bold">&#62;</span></div>
        </div>
         </div>
</div>)
}
export default PaginationBar;