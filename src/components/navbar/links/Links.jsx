
import Link from "next/link"
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
    return( <div>
        
        {

            links.map((link=> <Link href={link.path} key={link.title} >{link.title} </Link>))
        }
    </div>)
}
export default Links