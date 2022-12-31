import Link from "next/link"
import { NextRouter, useRouter } from "next/router"
export default function NavBar(){
    const router:NextRouter=useRouter();
    //현재 있는 페이지의 라우터 정보를 가져올 수 있다. 
    return(
        <nav>
            <Link href="/">
           <span style={{color:router.pathname==="/"?"red":"blue"}}>Home</span>
           </Link>

           <Link href="/about">
           <span  style={{color:router.pathname==="/about"?"red":"blue"}}>About</span>
           </Link>
           
        </nav>
    )
}