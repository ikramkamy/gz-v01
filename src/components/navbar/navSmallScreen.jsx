import CustomizedBadges from "../commun/ShopingCartIcon";


const NavSmallScreen=()=>{
    return(<div className="w-full ">
        <div className="flex flex-col justify-start aline-center sticky h-screen bg-black z-20 transition ease-in-out delay-150">
        <a href="/"   className="mx-2 my-4">HOME</a>
        <a href="/products"  className="mx-2 my-4">PRODUCTS</a>
        <a href="/configurations"  className="mx-2 my-4">CONFIGURATIONS</a>
        <a href="/pcbuilder"  className="mx-2 my-4">PC BUILDER</a>
        <a href="/partners"   className="mx-2 my-4">PARTNERS</a>
        <a href="/shopingcart"   className="mx-2 my-4">
        <CustomizedBadges/>
        
        </a>
        <a href="/blog"   className="mx-2 my-4">BLOG</a>
        <a href="/contact"   className="mx-2 my-4">CONTACT</a>

        </div>
    </div>)
}
export default NavSmallScreen;