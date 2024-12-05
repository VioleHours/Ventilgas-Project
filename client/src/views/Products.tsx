import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import Modal from "../components/Modal/Main";

const Products = () => {
    return (
        <div>
            <div className="bg-waves bg-cover bg-left-top m-0 relative">
                <Nav />
                <Hero />
            </div>
            <Modal></Modal>
        </div>
    )
}

export default Products;