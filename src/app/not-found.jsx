import Link from "next/link"

const NofFound = ()=>{
    return(
        <div>
            <h2>Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.!</p>
            <Link href="/" >Back to homepage</Link>
        </div>
    )
}
export default NofFound