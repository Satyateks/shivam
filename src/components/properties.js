import Navbar from "./navbar"
import { PropertyContact } from "./property"

export const Property =()=>{
    return (
        <>
            <Navbar navClass="defaultscroll sticky" menuClass="navigation-menu nav-left" />

        <PropertyContact  />
        </>
    )
}