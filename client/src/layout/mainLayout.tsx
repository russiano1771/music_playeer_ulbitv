import NavBar from "@/components/navBar";
import Player from "@/components/player";


export default function MainLayout({children}){
    return (
        <>
            <NavBar/>
        <main>{children}</main>
            <Player/>
        </>
    )
}