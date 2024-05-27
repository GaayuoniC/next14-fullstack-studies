
import Link from "next/link"
import styles from "./linkscss/links.module.css"
import NavLink from "./navLink/navLink"

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
    return( <div className={styles.links} >
        
        {

            links.map((link=>(<NavLink item= {link} key={link.title} />) ))
        }
    </div>)
}
export default Links