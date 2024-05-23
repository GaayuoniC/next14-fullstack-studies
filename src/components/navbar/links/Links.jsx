
import Link from "next/link"
import "./linkscss/links.css"
const Links = ()=>{

    //Create an array of links here:
    const links =[
        {
            title:"Homepage",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Blog",
            path:"/blog"
        }
    ]

//Map the array for the links below in the return part
    return( <div className="container"  >
        
        {

            links.map((link=> <Link href={link.path} key={link.title}  >{link.title} </Link>))
        }
    </div>)
}
export default Links