import { create  } from "zustand";
import image1 from "../../assets/home/section1/home-featured-cat-periph_0.png";
import image2 from '../../assets/home/section1/home-featured-cat-composants.png';
import image3 from '../../assets/home/section1/home-featured-cat-gaming.png';
import image4 from '../../assets/home/section1/home-featured-cat-image-son.png';
import image5 from '../../assets/home/section1/home-featured-cat-pc_0.png';
import newProdimg1 from '../../assets/home/section1/nouveaute/mhw100_960x960.png'
import newProdimg2 from '../../assets/home/section1/nouveaute/mh222_960x960.png'
import newProdimg3 from '../../assets/home/section1/nouveaute/mcneo_960x960.png'
import newProdimg4 from '../../assets/home/section1/nouveaute/mcex_640x640.png'
import newProdimg5 from '../../assets/home/section1/nouveaute/mc777_640x640.png'
import newProdimg6 from '../../assets/home/section1/nouveaute/marm2-color-1_480x600_edited.png'
import processor from '../../assets/products/viewProduct/processor.png';
import processor2 from '../../assets/products/processor2.png'
import mb1 from '../../assets/products/motherboard2.png'
import mb2 from '../../assets/products/motherboard-removebg-preview.png'
import mb3 from '../../assets/products/mb2.png'
import ram from '../../assets/products/ram.png'
import ca from '../../assets/products/case.png'
import cooler from '../../assets/products/cooler.png'
import graphic from '../../assets/products/graphic.png'

export const UseProductsStore= create((set, get)=>({
OurProductsTypes :[{
    name:'pc sur-mesure',
    urlImage:image1,
},
{
    name:'pc pré-conçu',
    urlImage:image2,
},{
    name:'périphériques',
    urlImage:image3,
},{
    name:'Composants',
    urlImage:image4,
},{
    name:'audio & screens',
    urlImage:image5,

}
],
NewProducts :[{
    name:'Textorm 16 GB DDR4 2666 MHz CL19',
    typeProduct:'PC componenet',
    descreption:`Textorm's 16GB DDR4 2666 MHz CL19 RAM is ideal for integration or PC upgrade. This affordable, high-performance RAM operates at a nominal voltage of 1.2 volts and is equipped with heat sinks for better heat dissipation`,
    price:5969,
    urlImage:ram,
    btn:"buy",
    category:3,
    brands:'Textorm',
    capacity:16,
    frequency:"DDR2 800 MHz",
    format:"ATX",
    memoryType:"DDR4",
    filter:{
        brands:"Textorm",
        model:"AMD Ryzen 5 Pro",
        support:"AMD sWRX8",
        platform:"AMD Zen 2",
        capacity:16,
        frequency:"DDR2 800 MHz",
        format:"ATX",
        chipset:"",
        memoryType:"DDR4",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},{
    name:'ASUS TUF GAMING B760-PLUS WIFI',
    typeProduct:'Mother Board',
    descreption:`Motherboard ATX Socket 1700 Intel B760 Express - 4x DDR5 - M.2 PCIe 4.0 - USB 3.2 - PCI-Express 5.0 16x - LAN 2.5 GbE - Wi-Fi 6 AX/Bluetooth 5.2`,
    price:25000,
    urlImage:mb1,
    btn:"buy",
    category:2,
    brands:'ASUS',
    support:"AMD AM4",
    format:"ATX",
    chipset:"AMD A520",
    memoryType:"DDR4",
    filter:{
        brands:"ASUS",
        model:"AMD Ryzen 5 Pro",
        support:"AMD AM4",
        platform:"AMD Zen 2",
        capacity:16,
        frequency:"DDR2 800 MHz",
        format:"ATX",
        chipset:"AMD A520",
        memoryType:"DDR4",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'ASUS DUAL GeForce RTX 3050 OC O6G',
    typeProduct:'PC cpmponent',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:graphic,
    btn:"buy",
    category:5,
    brands:'ASUS',
    GPU_brand:'NVIDIA',
    Graphics_chipset:'AMD Radeon RX 6400',
    Video_memory_size:4,
    Cooling_type:'Passive (fanless)',
    filter:{
        brands:"ASUS",
        model:"AMD Ryzen 5 Pro",
        support:"AMD AM4",
        platform:"AMD Zen 2",
        capacity:16,
        frequency:"DDR2 800 MHz",
        format:"ATX",
        chipset:"AMD A520",
        memoryType:"DDR4",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }


},
{
    name:'AMD Ryzen 5 Pro 4300G Wraith Stealth (3.8 GHz / 4.0 GHz)',
    typeProduct:'processor',
    descreption:`Processor 4-Core 8-Threads socket AM4 Cache L3 4 Mo Radeon Vega Graphics TDP 65W with cooling system (box version - 3-year manufacturer's warranty)`,
    price:13977,
    urlImage:processor,
    btn:"config",
    category:1,
    brands:"AMD",
    model:"AMD Ryzen 5 Pro",
    support:"AMD sWRX8",
    platform:"AMD Zen 2",
    filter:{
        brands:"AMD",
        model:"AMD Ryzen 5 Pro",
        support:"AMD sWRX8",
        platform:"AMD Zen 2",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg5,
    btn:"view",
    category:1,
},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg6,
    btn:"view",
    category:1,
},{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg6,
    btn:"view",
    cathegory:3,
},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg6,
    btn:"view",
    category:1,
},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg6,
    btn:"view",
    category:1,
},
{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg6,
    btn:"view",
    category:1,
}


],
NewConfigs:[{
    name:'MCEX',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:'25 000 DZD',
    urlImage:newProdimg3,
    btn:"config"

}],

AllProducts:[
    {
        name:'Textorm 16 GB DDR4 2666 MHz CL19',
        typeProduct:'PC componenet',
        descreption:`Textorm's 16GB DDR4 2666 MHz CL19 RAM is ideal for integration or PC upgrade. This affordable, high-performance RAM operates at a nominal voltage of 1.2 volts and is equipped with heat sinks for better heat dissipation`,
        price:5969,
        urlImage:ram,
        btn:"buy",
        category:3,
        brands:'Textorm',
        capacity:16,
        frequency:"DDR2 800 MHz",
        format:"ATX",
        memoryType:"DDR4",
        filter:{
            brands:"Textorm",
            model:"",
            support:"",
            platform:"",
            capacity:16,
            frequency:"DDR2 800 MHz",
            format:"ATX",
            chipset:"",
            memoryType:"DDR4",
            UNIT_TYPE:'',
            PROCESSOR_SUPPORT:'',
            MATERIAL:'',
            KIT:"",
            GPU_brand:'',
            Graphics_chipset:'',
            Video_memory_size:2,
            Cooling_type:'',
            Hard_drive_format:2,
    
        }
    
    },
    {
        name:'LEXAR ARES RGB 32GB (2 x 16GB) 6000MHZ CL34',
        typeProduct:'PC componenet',
        descreption:`Lexar® ARES RGB DDR5 Desktop Memory is compatible with the latest INTEL XMP 3.0 and AMD EXPO™. Enjoy blazing-fast overclocking speeds to elevate your gaming experience`,
        price:3969,
        urlImage:ram,
        btn:"buy",
        category:3,
        brands:'LEXAR',
        capacity:32,
        frequency:"DDR2 800 MHz",
        format:"ATX",
        memoryType:"DDR4",
        filter:{
            brands:"LEXAR",
            model:"",
            support:"",
            platform:"",
            capacity:32,
            frequency:"DDR2 800 MHz",
            format:"ATX",
            chipset:"",
            memoryType:"DDR4",
            UNIT_TYPE:'',
            PROCESSOR_SUPPORT:'',
            MATERIAL:'',
            KIT:"",
            GPU_brand:'',
            Graphics_chipset:'',
            Video_memory_size:2,
            Cooling_type:'',
            Hard_drive_format:2,
    
        }

    },{
        name:'Corsair Dominator Platinum DDR5 RGB 64 GB (2 x 32 GB) 5200 MHz CL40',
        typeProduct:"PC componenet",
        descreption:'Push the limits of memory performance with Corsair Dominator Platinum RGB DDR5 optimized for Intel platforms. DDR5 provides higher frequencies and better capacities than the previous generation, helping your system perform complex tasks.',
        price:9969,
        urlImage:ram,
        btn:"buy",
        category:3,
        brands:'Corsair',
        capacity:64,
        frequency:"DDR5 5600 MHz",
        format:"ATX",
        memoryType:"DDR5",
        filter:{
            brands:"Corsair",
            model:"",
            support:"",
            platform:"",
            capacity:64,
            frequency:"DDR5 5600 MHz",
            format:"ATX",
            chipset:"",
            memoryType:"DDR5",
            UNIT_TYPE:'',
            PROCESSOR_SUPPORT:'',
            MATERIAL:'',
            KIT:"",
            GPU_brand:'',
            Graphics_chipset:'',
            Video_memory_size:2,
            Cooling_type:'',
            Hard_drive_format:2,
    
        }
    
    
    
    },
        {
            name:'LEXAR ARES RGB 64GB (2 x 32GB) 6000MHZ CL34',
            typeProduct:'PC componenet',
            descreption:`Lexar® ARES RGB DDR5 Desktop Memory is compatible with the latest INTEL XMP 3.0 and AMD EXPO™. Enjoy blazing-fast overclocking speeds to elevate your gaming experience`,
            price:3969,
            urlImage:ram,
            btn:"buy",
            category:3,
            brands:'LEXAR',
            capacity:64,
            frequency:"DDR2 800 MHz",
            format:"ATX",
            memoryType:"DDR4",
            filter:{
                brands:"LEXAR",
                model:"",
                support:"",
                platform:"",
                capacity:64,
                frequency:"DDR2 800 MHz",
                format:"ATX",
                chipset:"",
                memoryType:"DDR4",
                UNIT_TYPE:'',
                PROCESSOR_SUPPORT:'',
                MATERIAL:'',
                KIT:"",
                GPU_brand:'',
                Graphics_chipset:'',
                Video_memory_size:2,
                Cooling_type:'',
                Hard_drive_format:2,
        
            }
    },
    {
        name:'Corsair Dominator Platinum DDR5 RGB 32 GB (2 x 16 GB) 5200 MHz CL40',
        typeProduct:"PC componenet",
        descreption:'Push the limits of memory performance with Corsair Dominator Platinum RGB DDR5 optimized for Intel platforms. DDR5 provides higher frequencies and better capacities than the previous generation, helping your system perform complex tasks.',
        price:9969,
        urlImage:ram,
        btn:"buy",
        category:3,
        brands:'Corsair',
        capacity:32,
        frequency:"DDR5 5600 MHz",
        format:"ATX",
        memoryType:"DDR5",
        filter:{
            brands:"Corsair",
            model:"",
            support:"",
            platform:"",
            capacity:32,
            frequency:"DDR5 5600 MHz",
            format:"ATX",
            chipset:"",
            memoryType:"DDR5",
            UNIT_TYPE:'',
            PROCESSOR_SUPPORT:'',
            MATERIAL:'',
            KIT:"",
            GPU_brand:'',
            Graphics_chipset:'',
            Video_memory_size:2,
            Cooling_type:'',
            Hard_drive_format:2,
    
        }
    },
{
    name:'ASUS TUF GAMING B760-PLUS WIFI',
    typeProduct:'Mother Board',
    descreption:`Motherboard ATX Socket 1700 Intel B760 Express - 4x DDR5 - M.2 PCIe 4.0 - USB 3.2 - PCI-Express 5.0 16x - LAN 2.5 GbE - Wi-Fi 6 AX/Bluetooth 5.2`,
    price:25000,
    urlImage:mb1,
    btn:"buy",
    category:2,
    brands:'ASUS',
    support:"AMD AM4",
    format:"ATX",
    chipset:"AMD A520",
    memoryType:"DDR4",
    filter:{
        brands:"ASUS",
        model:"",
        support:"AMD AM4",
        platform:"",
        capacity:32,
        frequency:"DDR5 5600 MHz",
        format:"ATX",
        chipset:"AMD A520",
        memoryType:"DDR4",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'MSI B760 GAMING PLUS WIFI',
    typeProduct:'Mother Board',
    descreption:`ATX Socket 1700 Intel B760 Express Motherboard - 4x DDR5 
    - M.2 PCIe 4.0 - USB 3.1 - PCI-Express 4.0 16x - LAN 2.5 GbE + Wi-Fi 6E/Bluetooth 5.3`,
    price:25000,
    urlImage:mb2,
    btn:"config",
    category:2,
    brands:"MSI",
    support:"AMD AM4",
    format:"Micro ATX",
    chipset:"AMD X670E",
    memoryType:"DDR5",
    filter:{
        brands:"MSI",
        model:"",
        support:"AMD AM4",
        platform:"",
        capacity:"",
        frequency:"DDR5 5600 MHz",
        format:"Micro ATX",
        chipset:"AMD X670E",
        memoryType:"DDR5",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'Gigabyte A520 AORUS ELITE',
    typeProduct:'Mother Board',
    descreption:`Motherboard ATX Socket AM4 AMD A520 - 4x DDR4 
    - M.2 PCIe 3.0 - USB 3.1 - PCI-Express 3.0 16x`,
    price:129000,
    urlImage:mb2,
    btn:"buy",
    category:2,
    brands:"Gigabyte",
    support:"AMD AM4",
    format:"Micro ATX",
    chipset:"AMD X670E",
    memoryType:"DDR4",
    filter:{
        brands:"Gigabyte",
        model:"",
        support:"AMD AM4",
        platform:"",
        capacity:"",
        frequency:"DDR5 5600 MHz",
        format:"Micro ATX",
        chipset:"AMD X670E",
        memoryType:"DDR4",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'ASUS DUAL GeForce RTX 3050 OC O6G',
    typeProduct:'PC componenet',
    descreption:`The ASUS DUAL GeForce RTX 3050 OC O6G graphics card comes with 6 GB of GDDR6 video memory. Sublime graphics, remarkable fluidity and incredible realism will let you get the most out of PC games in Full HD.`,
    price:165000,
    urlImage:graphic,
    btn:"buy",
    category:5,
    brands:'ASRock',
    GPU_brand:'AMD',
    Graphics_chipset:'AMD Radeon RX 550',
    Video_memory_size:2,
    Cooling_type:'Active (fansink)',
    filter:{
        brands:"ASRock",
        model:"",
        support:"",
        platform:"",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'AMD',
        Graphics_chipset:'AMD Radeon RX 550',
        Video_memory_size:2,
        Cooling_type:'Active (fansink)',
        Hard_drive_format:"",

    },
    filter:{
        brands:"AMD",
        model:"",
        support:"",
        platform:"",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'AMD',
        Graphics_chipset:'AMD Radeon RX 550',
        Video_memory_size:2,
        Cooling_type:'Active (fansink)',
        Hard_drive_format:"",

    }

    

},{
    name:'ASUS DUAL GeForce RTX 3050 OC O6G',
    typeProduct:'PC cpmponent',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:graphic,
    btn:"buy",
    category:5,
    brands:'ASUS',
    GPU_brand:'NVIDIA',
    Graphics_chipset:'AMD Radeon RX 6400',
    Video_memory_size:4,
    Cooling_type:'Passive (fanless)',
    filter:{
        brands:"ASUS",
        model:"",
        support:"",
        platform:"",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'NVIDIA',
        Graphics_chipset:'AMD Radeon RX 6400',
        Video_memory_size:4,
        Cooling_type:'Active (fansink)',
        Hard_drive_format:"",

    }

},{
    name:'Gigabyte AORUS GeForce RTX 4060 Ti ELITE 8G',
    typeProduct:'PC cpmponent',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:graphic,
    btn:"buy",
    category:5,
    brands:'Gigabyte ',
    GPU_brand:'NVIDIA',
    Graphics_chipset:'AMD Radeon RX 6400',
    Video_memory_size:4,
    Cooling_type:'Passive (fanless)',
    filter:{
        brands:"Gigabyte",
        model:"",
        support:"",
        platform:"",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'NVIDIA',
        Graphics_chipset:'AMD Radeon RX 6400',
        Video_memory_size:4,
        Cooling_type:'Active (fansink)',
        Hard_drive_format:"",

    }
    

},{
    name:'Antec Vortex 240 ARGB',
    typeProduct:'PC componenet',
    descreption:`The Antec Vortex ARGB liquid cooler is a truly efficient cooling solution for your CPU, with unique ARGB lighting. Its Vortex pump head brings a subtle and beautiful colour palette to your entire setup.`,
    price:25000,
    urlImage:cooler,
    btn:"buy",
    category:4,
    brands:'Antec',
    UNIT_TYPE:'1/4 plug',
    PROCESSOR_SUPPORT:'AMD AM2',
    MATERIAL:'Acrylic',
    KIT:"yes"

},
{
    name:'Cooler Master MasterLiquid 240 Atmos',
    typeProduct:'PC componenet',
    descreption:`Cooler Master presents its next-generation AiO with the MasterLiquid 240 Atmos. It boasts improved cooling performance thanks to the use of ARGB SickleFlow Edge fans, a new-generation dual-chamber pump and an enlarged radiator surface.`,
    price:15000,
    urlImage:cooler,
    btn:"buy",
    category:4,
    brands:'Cooler Master Ltd',
    UNIT_TYPE:'1/4 plug',
    PROCESSOR_SUPPORT:'AMD AM2',
    MATERIAL:'Acrylic',
    KIT:"yes"


},
{
    name:'Barrow 3-Way Rotating Mouthpiece - Black (TSNW1803-V1)',
    typeProduct:'PC componenet',
    descreption:'This Barrow TSNW1803-V1 black adapter is a 3 axis 180 rotating nozzle. With its multiple angles, you can easily integrate a hose to make your watercooling system.',
    urlImage:cooler,
    btn:"buy",
    category:4,
    price:45000,
    brands:'Barrow',
    UNIT_TYPE:'6.4mm connector',
    PROCESSOR_SUPPORT:'AMD AM3',
    MATERIAL:'Aluminum',
    KIT:"no"
},

{
    name:'MSI B760 GAMING PLUS WIFI',
    typeProduct:'Mother Board',
    descreption:`ATX Socket 1700 Intel B760 Express Motherboard - 4x DDR5 
    - M.2 PCIe 4.0 - USB 3.1 - PCI-Express 4.0 16x - LAN 2.5 GbE + Wi-Fi 6E/Bluetooth 5.3`,
    price:25000,
    urlImage:mb3,
    btn:"config",
    category:2,
    brands:"MSI",
    support:"AMD AM4",
    format:"Micro ATX",
    chipset:"AMD X670E",
    memoryType:"DDR5",
    filter:{
        brands:"MSI",
        model:"",
        support:"AMD AM4",
        platform:"Micro ATX",
        capacity:32,
        frequency:"DDR5 5600 MHz",
        format:"ATX",
        chipset:"AMD X670E",
        memoryType:"DDR5",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'MSI B760 GAMING PLUS WIFI',
    typeProduct:'Mother Board',
    descreption:`ATX Socket 1700 Intel B760 Express Motherboard - 4x DDR5 
    - M.2 PCIe 4.0 - USB 3.1 - PCI-Express 4.0 16x - LAN 2.5 GbE + Wi-Fi 6E/Bluetooth 5.3`,
    price:25000,
    urlImage:mb2,
    btn:"buy",
    category:2,
    brands:"MSI",
    support:"AMD AM4",
    format:"Micro ATX",
    chipset:"AMD X670E",
    memoryType:"DDR5",
    filter:{
        brands:"MSI",
        model:"",
        support:"AMD AM4",
        platform:"Micro ATX",
        capacity:"",
        frequency:"DDR5 5600 MHz",
        format:"ATX",
        chipset:"AMD X670E",
        memoryType:"DDR5",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:"",
        Cooling_type:'',
        Hard_drive_format:"",

    }
    

},
{
    name:'AMD Ryzen Pro 4100 Wraith Stealth ( 3.8 GHz / 4.0 GHz)',
    typeProduct:'processor',
    descreption:`The AMD Ryzen 3 4100 desktop processor is based on the AMD Zen 2 architecture and features 4 physical cores + 8 logical cores as well as 6 MB cache (L2 + L3). Thanks to its high operating frequencies`,
    price:15977,
    urlImage:processor2,
    btn:"config",
    category:1,
    brands:"AMD",
    model:"AMD Ryzen 3",
    support:"AMD sTR5",
    platform:"AMD Zen 2",
    filter:{
        brands:"AMD",
        model:"AMD Ryzen 3",
        support:"AMD sTR5",
        platform:"AMD Zen 2",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }
},{
    name:'AMD Ryzen 5 Pro 4300G Wraith Stealth ( 3.8 GHz / 4.0 GHz)',
    typeProduct:'processor',
    descreption:`Processor 4-Core 8-Threads socket AM4 Cache L3 4 Mo Radeon Vega Graphics TDP 65W with cooling system (box version - 3-year manufacturer's warranty)`,
    price:18977,
    urlImage:processor,
    btn:"config",
    category:1,
    brands:"AMD",
    model:"AMD Ryzen 5 Pro",
    support:"AMD sTR5",
    platform:"AMD Zen 2",
    filter:{
        brands:"AMD",
        model:"AMD Ryzen 5 Pro",
        support:"AMD sTR5",
        platform:"AMD Zen 2",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'AMD Ryzen 3 4100 Wraith Stealth (3.8 GHz / 4.0 GHz))',
    typeProduct:'processor',
    descreption:`Processor 4-Core 8-Threads socket AM4 Cache L3 4 Mo Radeon
     Vega Graphics TDP 65W with cooling system (box version - 3-year manufacturer's warranty)`,
    price:13977,
    urlImage:processor,
    btn:"buy",
    category:1,
    brands:"AMD",
    model:"AMD Ryzen 3",
    support:"AMD sWRX8",
    platform:"AMD Zen 3",
    filter:{
        brands:"AMD",
        model:"AMD Ryzen 3",
        support:"AMD sWRX8",
        platform:"AMD Zen 3",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'Intel Celeron G5905 ( 3.5 GHz)',
    typeProduct:'processor',
    descreption:`Processor 2-Core 2-Threads Socket 1200 Cache L3 4 MB Intel UHD Graphics 610 0.014 micron (boxed version - 3 years Intel warranty)`,
    price:11977,
    urlImage:processor,
    btn:"buy",
    category:1,
    brands:"intel",
    model:"Intel Core i3",
    support:"Intel 1200",
    platform:"Intel Comet Lake-S",
    filter:{
        brands:"intel",
        model:"Intel Core i3",
        support:"Intel 1200",
        platform:"Intel Comet Lake-S",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }
    

},
{
    name:'Intel Pentium Gold G6400 ( 4.0 GHz)',
    typeProduct:'processor',
    descreption:`Processor 2-Core 2-Threads Socket 1200 Cache L3 4 MB Intel UHD Graphics 610 0.014 micron (boxed version - 3 years Intel warranty)`,
    price:11977,
    urlImage:processor,
    btn:"buy",
    category:1,
    brands:"intel",
    model:"Intel Pentium",
    support:"Intel 1700",
    platform:"Intel Comet Lake-S",
    filter:{
        brands:"intel",
        model:"Intel Pentium",
        support:"Intel 1700",
        platform:"Intel Comet Lake-S",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'Intel Core i3-10100 ( 3.6 GHz)',
    typeProduct:'processor',
    descreption:`Processor 4-Core 8-Threads Socket 1200 Cache L3 6 Mo Intel UHD Graphics 630 0.014 micron (boxed version - 3 years Intel warranty)`,
    price:11977,
    urlImage:processor,
    btn:"buy",
    category:1,
    brands:"intel",
    model:"Intel Core i3",
    support:"Intel 1200",
    platform:"Intel Comet Lake-S",
    tag:[],
    filter:{
        brands:"intel",
        model:"Intel Core i3-10100",
        support:"Intel 1200",
        platform:"Intel Comet Lake-S",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }
    

},
{
    name:'Intel Core i3-10100 ( 4.3 GHz)',
    typeProduct:'processor',
    descreption:`Processor 4-Core 8-Threads Socket 1200 Cache L3 6 Mo Intel UHD Graphics 630 0.014 micron (boxed version - 3 years Intel warranty)`,
    price:11977,
    urlImage:processor,
    btn:"buy",
    category:1,
    brands:"intel",
    model:"Intel Core i3",
    support:"Intel 1900",
    platform:"Intel Alder Lake-S",
    tag:[],
    filter:{
        brands:"intel",
        model:"Intel Core i3-10100",
        support:"Intel 1900",
        platform:"Intel Alder Lake-S",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }
    },






{
    name:'MSI',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg3,
    btn:"buy",
    category:10,
    filter:{
        brands:"AMD",
        model:"AM",
        support:"AMD ",
        platform:"AMD ",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},{
    name:'AMD',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg3,
    btn:"buy",
    category:10,
    filter:{
        brands:"AMD",
        model:"AM",
        support:"AMD ",
        platform:"AMD ",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'MSI',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg3,
    btn:"buy",
    category:9,
    filter:{
        brands:"AMD",
        model:"AM",
        support:"AMD ",
        platform:"AMD ",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'AMD',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg3,
    btn:"buy",
    category:8,
    filter:{
        brands:"AMD",
        model:"AM",
        support:"AMD ",
        platform:"AMD ",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'MSI',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg3,
    btn:"buy",
    category:7,
    filter:{
        brands:"AMD",
        model:"AM",
        support:"AMD ",
        platform:"AMD ",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

}
,
{
    name:'AMD',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg3,
    btn:"buy",
    category:7,
    filter:{
        brands:"AMD",
        model:"AM",
        support:"AMD ",
        platform:"AMD ",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'MSI',
    typeProduct:'case',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:25000,
    urlImage:newProdimg3,
    btn:"buy",
    category:7,
    filter:{
        brands:"AMD",
        model:"AM",
        support:"AMD ",
        platform:"AMD ",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

},
{
    name:'Samsung SSD 870 EVO 1TB',
    typeProduct:'PC componenet',
    descreption:`3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
    d'aération avant Diamond offrent un refroidissement exceptionnel. Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2`,
    price:335000,
    urlImage:graphic,
    btn:"buy",
    category:6,
    brands:'Corsair',
    Hard_drive_format:2,
    capacity:120,
    filter:{
        brands:"AMD",
        model:"AM",
        support:"AMD ",
        platform:"AMD ",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }

}
,
{
    name:'Fox Spirit PM70 PRO M.2 NVMe 1920 GB PCIe 4.0',
    typeProduct:'PC componenet',
    descreption:`The Fox Spirit PM70 PRO is a highly responsive PCIe 4.0 x4 NVMe SSD with transfer rates of up to 7000 MB/s read and 6000 MB/s write. Based on NAND TLC memory, it will boost your system's performance significantly at a reasonable cost.`,
    price:75000,
    urlImage:graphic,
    btn:"buy",
    category:6,
    brands:'Fox Spirit ',
    Hard_drive_format:2,
    capacity:120,

    filter:{
        brands:"AMD",
        model:"AM",
        support:"AMD ",
        platform:"AMD ",
        capacity:0,
        frequency:"",
        format:"",
        chipset:"",
        memoryType:"",
        UNIT_TYPE:'',
        PROCESSOR_SUPPORT:'',
        MATERIAL:'',
        KIT:"",
        GPU_brand:'',
        Graphics_chipset:'',
        Video_memory_size:2,
        Cooling_type:'',
        Hard_drive_format:2,

    }


}],

AutoCompletSearchValue:"",


setAutocomleteSearchValue: async(value)=>{
try {
   set({
    AutoCompletSearchValue: value.title
   }) 
   console.log("state management auto complete", value)
} catch (error) {
    
}
},
ShowcategoryName: async(code)=>{
    //console.log('we are in the show category function')
  switch (code) {
case 1: 
   return 'processor';
case 2: 
   return 'mother board';
case 3: 
   return 'ram';
case 4: 
   return 'CPU COOLERS';
case 5: 
   return 'Graphics Processing Unit';
case 6: 
   return 'Storage';
case 7: 
   return 'Power supply';
case 8: 
   return 'Case';
case 9: 
   return 'Case Cooler';
case 10: 
   return 'Extras';

default: 
    return 'Extras'}
},
FiltersofEachCategory:[],
Priceforfiltering:[0 , 100],
sePriceFilteringFunction: async(arr)=>{
try {
    set({ Priceforfiltering : arr})
    console.log('state management succesfyl', arr)
} catch (error) {
    
}
},

setFiltersofEachCategory: async (list)=>{
   
try {
  set ({
    FiltersofEachCategory: list
  
  }) 
  
} catch (error) {
  
}
  
},
FilterProcessors: async (produit,body )=>{
    console.log('we are in the filter process')
    if(produit.brands){
        console.log('we are in the filter brands')
    }
  },

}))