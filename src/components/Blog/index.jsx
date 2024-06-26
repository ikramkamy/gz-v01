
import HeaderPages from "../commun/HeaderPages";
import { UseBlogStore } from "../stores/BlogStore";
import BlogItem from "../commun/blogItem";
import Navbar from "../navbar";
import Footer from "../footer";
const BlogPage=()=>{
    const {  bloglist}=UseBlogStore((state)=>state)
    return(
<div className="flex w-full flex-col justify-center items-center">
<Navbar/>
<HeaderPages title='blog' />
<div className=" w-10/12 grid grid-cols-2  max-md:w-full max-md:flex max-md:flex-col max-md:items-center  max-md:jusrify-center gape-0">
{bloglist.map((e)=><BlogItem title={e.title}  subtitle={e.subtitle} img={e.imageURL} date={e.date}/>)}
</div>

<Footer/>
    </div>)
}
export default BlogPage;
///docker build -t myapp .