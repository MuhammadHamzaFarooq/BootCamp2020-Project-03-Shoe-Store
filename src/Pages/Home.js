import Announcement from "../Components/Announcement";
import Category from "../Components/Category";
import Footer from "../Components/Footer";
import FooterCopyWrite from "../Components/FooterCopyWrite";
import Navbar from "../Components/Navbar"
import Products from "../Components/Products";
import Slider from '../Components/Slider'
const Home = () => {
    return (
        <>
            <Announcement />
            <Navbar />
            <Slider />
            <Category/>
             {/* <Products /> */}
            <Footer/>
            <FooterCopyWrite/>
        </>
    )
}

export default Home;
