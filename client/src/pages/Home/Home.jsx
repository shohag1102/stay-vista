import Rooms from "../../components/Rooms/Rooms.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import {Helmet} from "react-helmet-async";

const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>StayVista | Vacation Homes & Condo Rentals</title>
            </Helmet>
            {/* Categories section */}
            <Categories/>
            {/* Rooms section */}
            <Rooms/>
        </div>
    );
};

export default Home;
