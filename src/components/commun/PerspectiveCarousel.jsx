
import Flicking from "@egjs/react-flicking";
import { Perspective,  AutoPlay } from "@egjs/flicking-plugins";
import img from '../../assets/home/section1/nouveaute/marm2-color-1_480x600_edited.png';
import CarouselItem from "../../components/home/NouveauteSection/CarouselItem";
import { UseProductsStore } from "../../components/stores/ProductsStore";
import newProdimg5 from '../../assets/home/section1/nouveaute/mc777_640x640.png'
import newProdimg6 from '../../assets/home/section1/nouveaute/marm2-color-1_480x600_edited.png'
import ram from '../../assets/products/ram.png';
import processeor from '../../assets/products/processor2.png';
import { Link } from "react-router-dom";
 const CarouselPerspective =()=> {
    const {NewProducts}=UseProductsStore((state)=>state)
    const plugins = [
      new Perspective({ rotate: -1, scale: 2, perspective: 2600 }),
      new AutoPlay({ duration: 1000, direction: "NEXT", stopOnHover: false })
    ];
 
//map function does not work properly with flicking carousel
    return (<Flicking 
     circular={true} plugins={plugins}
     
     className="flex justify-center items-center  pt-2">
      <div className="card-panel " > 
     
      {/*NewProducts.map((e)=><CarouselItem 
                 
                key={NewProducts}
                 urlImage={e.urlImage} name={e.name} typeProduct={e.typeProduct} 
                 descreption={e.descreption} price={e.price} btn={e.btn}/>
                 ) */}
     <CarouselItem 
  urlImage={ram} name="Textorm 16 GB DDR4" typeProduct="RAM" 
                 descreption="3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
                 d'aération avant Diamond offrent un refroidissement exceptionnel.
                  Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2"
                   price="25 000 DZD" btn="view"/>
      </div>
      <div className="card-panel"> <CarouselItem 
  urlImage={processeor} name="ASUS TUF GAMING " typeProduct="mother Board" 
                 descreption="3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
                 d'aération avant Diamond offrent un refroidissement exceptionnel.
                  Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2"
                   price="25 000 DZD" btn="view"/>
      </div>
      <div className="card-panel">
      
      <CarouselItem 
  urlImage={ram} name="LEXAR ARES RGB 32GB" typeProduct="case" 
                 descreption="3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
                 d'aération avant Diamond offrent un refroidissement exceptionnel.
                  Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2"
                   price="25 000 DZD" btn="view"/>
      
      </div>
      <div className="card-panel"> <CarouselItem 
  urlImage={ram} name="Corsair Dominator Platinum DDR5" typeProduct="case" 
                 descreption="3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
                 d'aération avant Diamond offrent un refroidissement exceptionnel.
                  Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2"
                   price="25 000 DZD" btn="view"/>
      </div>
     
      <div className="card-panel"> <CarouselItem 
  urlImage={newProdimg5} name="MCEX" typeProduct="case" 
                 descreption="3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
                 d'aération avant Diamond offrent un refroidissement exceptionnel.
                  Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2"
                   price="25 000 DZD" btn="view"/>
      </div>
      <div className="card-panel"> <CarouselItem 
  urlImage={newProdimg6} name="MCEX" typeProduct="case" 
                 descreption="3 ventilateurs CHROMA RGB extra larges de 140 mm et une grille 
                 d'aération avant Diamond offrent un refroidissement exceptionnel.
                  Structure E-ATX pour une amplitude maximale. Spectacle total avec ses 2"
                   price="25 000 DZD" btn="view"/>
      </div>
    </Flicking>);
  }
  export default CarouselPerspective;
