"use client" //This makes it client side

import Link from "next/link"
import styles from "./navLink.module.css"
import { usePathname } from "next/navigation"

//Remember to make reusable snippets like this



const NavLink = ({item})=>{
    //Use the path name hook
    const pathName = usePathname()

    return(
        // <div className=   {` ${styles.container}  ${pathName === item.path ? styles.active : ''} `} >
        //     <Link href={item.path} > {item.title} </Link>

        // </div>
      
            <Link href={item.path} className={`${styles.container} 
            ${pathName === item.path && styles.active }`} >
                {item.title}
                </Link>
      

    )
}
export default NavLink