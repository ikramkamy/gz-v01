const FilterObject=({filter})=>{
    console.log(filter?.brands)
    return(
    <div className="flex w-full text-[10px]">
    <div className="ww-fit h-[25px]  m-[2px]  border-[1px] border-bluePrimary">{filter?.brands}</div>
    <div  className="w-fit h-[25px]  m-[2px]  border-[1px] border-bluePrimary">{filter?.model}</div>
    <div className="w-fit h-[25px] m-[2px] border-[1px] border-bluePrimary">
  {filter?.support && filter.support.trim() !== '' && (
    <div>{filter.support}</div>
  )}
 ici : { filter?.support.trim()}
</div>
   
    <div  className="w-fit  h-[25px] m-[2px]  border-[1px] border-bluePrimary">{filter?.platform}</div>
    <div  className="w-fit  h-[25px] m-[2px]  border-[1px] border-bluePrimary">{filter?.capacity}</div>
    <div  className="w-fit h-[25px]  m-[2px]  border-[1px] border-bluePrimary">{filter?.frequency}</div>
    <div  className="w-fit h-[25px]  m-[2px]  border-[1px] border-bluePrimary">{filter?.chipset}</div>
    <div  className="w-fit h-[25px]  m-[2px]  border-[1px] border-bluePrimary">{filter?.memoryType}</div>
    <div  className="w-fit h-[25px]  m-[2px]  border-[1px] border-bluePrimary">{filter?.UNIT_TYPE}</div>
    <div  className="w-fit h-[25px]  m-[2px]  border-[1px] border-bluePrimary">{filter?.PROCESSOR_SUPPORT}</div>
    <div  className="w-fit h-[25px]  m-[2px]  border-[1px] border-bluePrimary">{filter?.MATERIAL}</div>
    <div  className="w-fit h-[25px]  m-[2px]  border-[1px] border-bluePrimary">{filter?.KIT}</div>
    <div  className="w-fit  h-[25px] m-[2px]  border-[1px] border-bluePrimary">{filter?.GPU_brand}</div>
    <div  className="w-fit h-[25px]  m-[2px]  border-[1px] border-bluePrimary">{filter?.Graphics_chipset}</div>
    <div  className="w-fit  h-[25px]  m-[2px] border-[1px] border-bluePrimary">{filter?.Video_memory_size}</div>
    <div  className="w-fit h-[25px]   m-[2px] border-[1px] border-bluePrimary">{filter?.Cooling_type}</div>
    <div  className="w-fit h-[25px]  m-[2px]  border-[1px] border-bluePrimary">{filter?.Hard_drive_format}</div>
    </div>)
}
export default FilterObject;

   
  