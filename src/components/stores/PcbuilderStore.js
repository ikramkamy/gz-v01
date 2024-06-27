import { Category } from "@mui/icons-material";
import { create } from "zustand";

export const usePcbuilderStore=create((set, get)=>({
//the state of the config that the user is about to create
 


CurrentConfig : {
   motherBoard:{},
   cpu:{},
   gpu:{} ,
   ram:{},
   hdd:{},
   ssd:{},
   cooler:{},
   powerSupply:{},
   case:{},
  
}

//function to add new config to shopping cart 




}))