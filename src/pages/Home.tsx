import { useSelector } from "react-redux";
import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = () => {
    const reduxData: any = useSelector((state: any) => state);
    const { toggle } = reduxData.toggle;
    const { deteils } = reduxData.deteils;
    console.log(deteils);
    
    return (
        <div>
            <Hero />
            <Products />
        </div>
    );
};

export default Home;