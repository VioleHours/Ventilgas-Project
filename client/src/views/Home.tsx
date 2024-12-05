import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Brands } from "../components/Brands";
import { About } from "../components/About";

const Home = () => {
    return (
        <>
            <div className="bg-waves bg-cover bg-left-top">
                <Nav />
                <Hero />
            </div>
            <Products />
            <Brands />
            <About />
        </>
    )
}

export default Home;