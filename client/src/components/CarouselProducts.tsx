import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface Product {
    id: number;
    name?: string;
    description?: string;
    price?: number;
    image?: string;
    brand?: string;
}

interface ProductCarouselProps {
    products: Product[];
}

//TODO: Hay que mejorar este carrusel porque no queda como quisiera y que pueda tener la opción de girar solo por las brands

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackMouse: true,
    });

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div
                {...handlers}
                className="flex justify-center items-center overflow-hidden"
            >
                <div
                    className="flex transition-transform duration-300"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="w-full flex-shrink-0 p-4"
                        >
                            <div className="max-w-xs mx-auto justify-center items-center flex flex-col">
                                {product.image && (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-56 h-48 object-cover"
                                    />
                                )}
                                <h2 className="text-xl mt-4 text-left font-semibold">
                                    {product.name}
                                </h2>
                                <h3>{product.brand}</h3>
                                <p className="text-gray-600 text-left">
                                    {product.description}
                                </p>
                                {product.price && (
                                    <p className="text-center font-bold mt-2">
                                        $
                                        {product.price.toLocaleString("en-US", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;
