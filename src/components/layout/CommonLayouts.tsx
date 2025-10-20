import type { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"


interface IProps { children: ReactNode }

export default function CommonLayouts({ children }: IProps) {
    return (
        <div>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}