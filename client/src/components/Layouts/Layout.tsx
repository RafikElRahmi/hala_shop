import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

// type CCC = {
//     children:'ReactElement
// }
function Layout() {
    return (
        <>
            <NavBar />
           <Outlet/>
            <Footer />
        </>
    );
}

export default Layout;
