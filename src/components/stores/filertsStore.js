import {create} from 'zustand'
import axios from 'axios'

export const useFiltersStor=create((set,get)=>({
cathegories: [
    {category:"Processor",
     codeCategory:1,
     FilterIsActive:false,
     filtersList:[
     {filterName:'brands', filtersItems:['','all','AMD', 'intel']},
     {filterName:'model', filtersItems:['','all','AMD Ryzen 3','AMD Ryzen 5','AMD Ryzen 5 Pro','AMD Ryzen 7','Intel Core i3','Intel Core i3-10100','Intel Pentium']},
     {filterName:'support', filtersItems:['','all','AMD sTR5','AMD sWRX8','Intel 1200','Intel 1700', 'Intel 1900']},
     {filterName:'platform',filtersItems:['all','AMD Zen 2','AMD Zen 3','AMD Zen 4','Intel Alder Lake-S',"Intel Comet Lake-S"]}
    ],
    filterGeneral:{
    brands:['all','AMD', 'intel','ASRock', 'ASUS','Gigabyte','MSI','Corsair', 'Crucial','Fox Spirit','G.Skill','Kingston','Lenovo','Micron','Textorm','LEXAR','Antec', 'Arctic','ASUS','Barrow','BARROWCH','be quiet !','BitFenix','Cooler Master Ltd','Corsair'],
    }
    
    },
    
    {category: "Mother board",
    codeCategory:2,
    FilterIsActive:false,
    filtersList:[
      {filterName:'brands', filtersItems:['all','ASRock', 'ASUS','Gigabyte','MSI']},
      {filterName:'support', filtersItems:['all','AMD Ryzen 3','AMD AM5','AMD sTR5','AMD sWRX8','Intel 1200','Intel 1700','Intel LGA4677']},
      {filterName:'format', filtersItems:['all','ATX','E-ATX','Micro ATX','Mini ITX','Specific','SSI CEB','SSI EEB']},
      {filterName:'chipset',filtersItems:['all','AMD A520','AMD A620','AMD B450','AMD B550','AMD B650','AMD B650E','AMD TRX50','AMD WRX80','AMD WRX90','AMD X670','AMD X670E','Intel B660 Express','Intel B760 Express']},
      {filterName:'memorytype', filtersItems:['all','DDR4','DDR4 ECC','DDR5','DDR5 ECC']},
    
    ]
    },
    {category: "RAM",
    codeCategory:3,
    FilterIsActive:true,
    filtersList:[
      {filterName:'brands', filtersItems:['all','Corsair', 'Crucial','Fox Spirit','G.Skill','Kingston','Lenovo','Micron','Textorm','LEXAR']},
      {filterName:'MEMORY FREQUENCY', filtersItems:['all','DDR2 800 MHz','DDR3 1066 MHz','DDR3 1333 MHz','DDR3 1600 MHz','DDR3 1866 MHz','DDR3 2133 MHz','DDR5 5600 MHz']},
      {filterName:'format', filtersItems:['all','DIMM 240-pin (DDR2)','DIMM 240-pin (DDR3)','DIMM 288 pins (DDR5)']},
      {filterName:'capacity',filtersItems:[0,2,4,8,16,32,64,256]},
      {filterName:'type', filtersItems:['all','DDR2','DDR3','DDR3L (1.35V)','DDR5']},
    
    ]
    },
    {category: "CPU COOLERS",
    codeCategory:4,
    FilterIsActive:false,
    filtersList:[
      {filterName:'brands', filtersItems:['all','Antec', 'Arctic','ASUS','Barrow','BARROWCH','be quiet !','BitFenix','Cooler Master Ltd','Corsair']},
      {filterName:'UNIT_TYPE', filtersItems:['all','1/4 plug','6.4mm connector','Backplane','Bending kit','Liquid']},
      {filterName:'PROCESSOR_SUPPORT', filtersItems:['all','AMD AM2','AMD AM2+','AMD AM3 ','AMD AM3+']},
      {filterName:'MATERIAL',filtersItems:['all','Acrylic','Aluminum','Brass','Chromium','Copper','Copper/Aluminu']},
      {filterName:'KIT', filtersItems:['','yes','no']},
    
    ]
    },
    {category: "Graphics Processing Unit",
    codeCategory:5,
    FilterIsActive:false,
    filtersList:[
      {filterName:'brands', filtersItems:['all','ASRock', 'ASUS','Gainward','Gigabyte','MSI','PNY']},
      {filterName:'GPU_brand', filtersItems:['all','AMD','NVIDIA']},
      {filterName:'Graphics_chipset', filtersItems:['all','AMD Radeon RX 550','AMD Radeon RX 6400','AMD Radeon RX 6500 XT','AMD Radeon RX 6600']},
      {filterName:'Video_memory_size',filtersItems:[0,2,4,6,8,12,16,20,24]},
      {filterName:'Cooling_type', filtersItems:['all','Active (fansink)','Passive (fanless)','Water cooling']},
    
    ]
    },
    {category: "Storage",
    codeCategory:6,
    FilterIsActive:false,
    filtersList:[
      {filterName:'brands', filtersItems:['all','Corsair', 'Crucial','Fox Spirit','Intel','KIOXIA','Kingston']},
      {filterName:'Hard_drive_format', filtersItems:['all','2" 1/2','M.2','mSATA']},
      {filterName:'capacity',filtersItems:[0,120,240,250,256,480,500,512,960]},

    
    ]
    
    },
    {category: "Power supply",
    codeCategory:7,
    FilterIsActive:false,
      filtersList:[
      {filterName:'brands', filtersItems:['all',' Aerocool', 'Antec','ASUS','Intel','be quiet!','Chieftec']},
      {filterName:'Power_format', filtersItems:['all','ATX/EPS', 'External','  Pico PSU',' TFX']},
      {filterName:'power',filtersItems:[0,80,300,350,400,500,600,1000,1600]},

    
    ]
    },
    {category: "Case",
    codeCategory:8,
    FilterIsActive:false,

    filtersList:[
      {filterName:'brands', filtersItems:['all','Aerocool', 'Antec','ASUS','Azza','be quiet!','BitFenix']},
      {filterName:'MotherBoard_format', filtersItems:['all','ATX', ' DTX',' E-ATX',' EE-ATX',' Micro ATX','Mini DTX']},
      {filterName:'case_cooler',filtersItems:['Anthracite','Black','Blue','Bronze','Chromium','Graphite','Gray','Green','Multicolored','Orange','Red','Silver','White']},
    ]
    }, 
    {category: "Case Cooler",
    codeCategory:9,
    FilterIsActive:false,  
    filtersList:[
      {filterName:'brands', filtersItems:['all','Aerocool', 'Antec','ASUS','Azza','be quiet!','BitFenix']},
      {filterName:'MotherBoard_format', filtersItems:['all','ATX', ' DTX',' E-ATX',' EE-ATX',' Micro ATX','Mini DTX']},
      {filterName:'case_cooler',filtersItems:['Anthracite','Black','Blue','Bronze','Chromium','Graphite','Gray','Green','Multicolored','Orange','Red','Silver','White']},
    ]
    },
    {category: "Extras",
    codeCategory:10,
    FilterIsActive:false,
    filtersList:[
      {filterName:'brands', filtersItems:['all','MARS GAMING', 'AOC','MSI']},
   
     ],
    },

],
Filters:[{
FiltersList:[
  {brands:['all','AMD', 'intel']},
  {model:['AMD Ryzen 3','AMD Ryzen 5','AMD Ryzen 5 Pro','AMD Ryzen 7']},
  {support:['AMD sTR5','AMD sWRX8','Intel 1200','Intel 1700']},
  {platfom:['AMD Zen 2','AMD Zen 3','AMD Zen 4','Intel Alder Lake-S']},
  {frequency:true},
]}

],
ProductsList:[],





getProducts: async ()=>{
    //console.log("we are in the get banner function")
    try{
let response = await axios.get('/product_pages.json',
    {
      headers: {
        Authorization:
          "pkrz3obauvMROPUqPm23X1qo6pFVQkjeK34WzNMbavyTToosZhorSTpJ",
      },
    }
  )
 // console.log('data', response.data)
  set ({ProductsList: response.data})
    } catch (err) {
console.error(err)
    }

},

SetFilterIsActive: async (category,isActive)=>{
  //cathegories.indexOf(category).FilterIsActive: (!cathegories.indexOf(category).FilterIsActive)
      //set ({cathegories : })
  
  
  set ({ cathegories:category})
  console.log('we are setting new value for is active',category)
  },





}))