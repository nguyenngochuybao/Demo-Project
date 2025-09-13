import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";
import SmartBandBanner from "../../components/SmartBandBanner ";
import Testimonials from "../../components/Testimonials";


const HomePage = () =>
{
    return (
        <div>
            <Banner />
            <ProductList title="Featured Products" />
            <ProductList title="Latest Products" />
            <SmartBandBanner />
            <Testimonials />
        </div>
    )
}

export default HomePage;