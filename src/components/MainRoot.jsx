import { Outlet } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";


const MainRoot = () => {
    return (
        <main>
            <header>
                <Header></Header>
            </header>
            <div>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </main>
    );
};

export default MainRoot;