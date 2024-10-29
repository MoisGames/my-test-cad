import { Outlet } from "react-router-dom";
import Header from "./UI/header/Header";
import Footer from "./UI/footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;