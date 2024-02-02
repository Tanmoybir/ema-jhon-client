import Container from "../../components/util/Container";
import AllProducts from "./AllProducts";
import HomeSlider from "./HomeSlider";
const Home = () => {

    return (
        <Container>
            <HomeSlider />
            <AllProducts />
        </Container>
    );
};

export default Home;