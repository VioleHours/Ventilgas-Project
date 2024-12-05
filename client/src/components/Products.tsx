import { ArrowDown } from "./Icons";
import ProductCarousel from "./CarouselProducts";
import { renderButton, renderIconButton } from "./RenderButton";
import { Link } from "react-router-dom";
import PATHROUTES from "../helpers/PathRouthes";

const products = [
    {
        id: 1,
        name: "Caja TBU",
        description:
            "Optimiza tu calentador de agua con nuestro repuesto premium.",
        image: "src/assets/product/Caja.png",
        price: 300000,
    },
    {
        id: 2,
        name: "Caja TBU",
        description:
            "Optimiza tu calentador de agua con nuestro repuesto premium.",
        image: "src/assets/product/Caja.png",
        price: 300000,
    },
    {
        id: 3,
        name: "Caja TBU",
        description:
            "Optimiza tu calentador de agua con nuestro repuesto premium.",
        image: "src/assets/product/Caja.png",
        price: 300000,
    },
];

export const Products = () => {
    const scroll = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <>
            <section
                id="products"
                className="flex flex-col items-center w-full py-8"
            >
                <div className="flex w-20 h-20 rounded-full bg-white justify-center items-start p-2 relative bottom-16">
                    <ArrowDown fillC="text-indigo-950" />
                </div>
                <h1 className="flex w-full justify-start pl-4 text-lg font-medium relative bottom-16">
                    Ver Productos
                </h1>
                <ProductCarousel products={products} />
            </section>
            <div className=" flex flex-col justify-end items-end pr-4 gap-2">
                <div className="flex flex-row -space-x-4">
                    {renderButton({
                        text: (
                            <Link to={PATHROUTES.PRODUCTS} className="px-2">
                                VER MÁS
                            </Link>
                        ),
                        variant: "secondary",
                        onClick: scroll,
                    })}
                    {renderIconButton({
                        variant: "secondary",
                        onClick: () => alert("VER MÁS"),
                        arrowFill: "white",
                    })}
                </div>
                <div className="flex flex-row -space-x-4">
                    {renderButton({
                        text: <span className="px-4">MercadoLibre</span>,
                        variant: "tertiary",
                        onClick: () => alert("MercadoLibre"),
                    })}
                    {renderIconButton({
                        variant: "tertiary",
                        onClick: () => alert("MercadoLibre"),
                        arrowFill: "text-indigo-950",
                    })}
                </div>
            </div>
            <br />
        </>
    );
};
