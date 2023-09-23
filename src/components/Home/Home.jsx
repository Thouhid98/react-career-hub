import Banner from "../Banner/Banner";
import Categorylist from "../CategoryList/Categorylist";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categorylist></Categorylist>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;