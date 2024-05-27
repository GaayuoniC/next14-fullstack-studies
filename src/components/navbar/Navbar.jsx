 
import Links from "./links/Links"
//styles imported and the css as a module below:
import styles from "../navbar/navbar.module.css"


const Navbar= ()=>{

    return(

            <div className= {styles.container}>
                <div className= {styles.logo}>LOGO</div>              
                                
               
                     <Links/>               
                
            </div>
    )
} 

export default Navbar