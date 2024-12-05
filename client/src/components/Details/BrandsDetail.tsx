import { useEffect, useState } from "react";
import { bgh, carrier, goodman, longvie, surrey, york } from "../../assets";

const BrandsDetail = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [search ] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    const brands = [
        { id: 1, name: "York", image: york },
        { id: 2, name: "BGH", image: bgh },
        { id: 3, name: "Carrier", image: carrier },
        { id: 4, name: "Goodman", image: goodman },
        { id: 5, name: "Longvie", image: longvie },
        { id: 6, name: "Surrey", image: surrey },
        { id: 7, name: "Longvie", image: longvie },
        { id: 8, name: "Surrey", image: surrey },
    ];

    const filteredBrands = brands.filter((brand) =>
        brand.name.toLowerCase().includes(search.toLowerCase())
    );

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === Math.ceil(filteredBrands.length / 6) - 1
                ? 0
                : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? Math.ceil(filteredBrands.length / 6) - 1
                : prevIndex - 1
        );
    };

    return (
        <div>
            {isMobile ? (
                <div className="flex flex-col gap-4 w-full bg-transparent py-1 rounded-3xl">
                    <div className="flex justify-between items-center">
                        <button
                            className="flex items-center justify-center bg-[#002064] rounded-full p-3 w-8 h-8"
                            onClick={prevSlide}
                        >
                            <svg
                                className="rotate-[-135deg]"
                                width="16"
                                height="16"
                                viewBox="0 0 12 12"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.724572 10.791C0.529309 10.9862 0.529309 11.3028 0.724572 11.4981C0.919834 11.6933 1.23642 11.6933 1.43168 11.4981L0.724572 10.791ZM11.6439 1.07871C11.6439 0.802568 11.4201 0.57871 11.1439 0.57871L6.64395 0.57871C6.3678 0.57871 6.14395 0.802568 6.14395 1.07871C6.14395 1.35485 6.3678 1.57871 6.64395 1.57871L10.6439 1.57871L10.6439 5.57871C10.6439 5.85485 10.8678 6.07871 11.1439 6.07871C11.4201 6.07871 11.6439 5.85485 11.6439 5.57871L11.6439 1.07871ZM1.43168 11.4981L11.4975 1.43226L10.7904 0.725157L0.724572 10.791L1.43168 11.4981Z"
                                    fill="white"
                                ></path>
                            </svg>
                        </button>
                        {filteredBrands
                            .slice(currentIndex * 3, currentIndex * 3 + 3)
                            .map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center h-10 mx-2 lg:mx-0"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-10"
                                    />
                                </div>
                            ))}
                        <button
                            className="flex items-center justify-center bg-[#002064] rounded-full p-3 w-8 h-8"
                            onClick={nextSlide}
                        >
                            <svg
                                className="rotate-[45deg]"
                                width="16"
                                height="16"
                                viewBox="0 0 12 12"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.724572 10.791C0.529309 10.9862 0.529309 11.3028 0.724572 11.4981C0.919834 11.6933 1.23642 11.6933 1.43168 11.4981L0.724572 10.791ZM11.6439 1.07871C11.6439 0.802568 11.4201 0.57871 11.1439 0.57871L6.64395 0.57871C6.3678 0.57871 6.14395 0.802568 6.14395 1.07871C6.14395 1.35485 6.3678 1.57871 6.64395 1.57871L10.6439 1.57871L10.6439 5.57871C10.6439 5.85485 10.8678 6.07871 11.1439 6.07871C11.4201 6.07871 11.6439 5.85485 11.6439 5.57871L11.6439 1.07871ZM1.43168 11.4981L11.4975 1.43226L10.7904 0.725157L0.724572 10.791L1.43168 11.4981Z"
                                    fill="white"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-4 w-full bg-transparent py-2 rounded-3xl lg:my-1 lg:p-4">
                    <div className="flex justify-between">
                        <button
                            className="flex items-center justify-center bg-[#002064] rounded-full p-3 w-[40px] h-[40px]"
                            onClick={prevSlide}
                        >
                            <svg
                                className="rotate-[-135deg]"
                                width="18"
                                height="20"
                                viewBox="0 0 12 12"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.724572 10.791C0.529309 10.9862 0.529309 11.3028 0.724572 11.4981C0.919834 11.6933 1.23642 11.6933 1.43168 11.4981L0.724572 10.791ZM11.6439 1.07871C11.6439 0.802568 11.4201 0.57871 11.1439 0.57871L6.64395 0.57871C6.3678 0.57871 6.14395 0.802568 6.14395 1.07871C6.14395 1.35485 6.3678 1.57871 6.64395 1.57871L10.6439 1.57871L10.6439 5.57871C10.6439 5.85485 10.8678 6.07871 11.1439 6.07871C11.4201 6.07871 11.6439 5.85485 11.6439 5.57871L11.6439 1.07871ZM1.43168 11.4981L11.4975 1.43226L10.7904 0.725157L0.724572 10.791L1.43168 11.4981Z"
                                    fill="white"
                                ></path>
                            </svg>
                        </button>
                        {filteredBrands
                            .slice(currentIndex * 6, currentIndex * 6 + 6)
                            .map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center h-10 mx-2 lg:mx-0"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-30 h-12"
                                    />
                                </div>
                            ))}
                        <button
                            className="flex items-center justify-center bg-[#002064] rounded-full p-3 w-[40px] h-[40px]"
                            onClick={nextSlide}
                        >
                            <svg
                                className="rotate-[45deg]"
                                width="18"
                                height="20"
                                viewBox="0 0 12 12"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.724572 10.791C0.529309 10.9862 0.529309 11.3028 0.724572 11.4981C0.919834 11.6933 1.23642 11.6933 1.43168 11.4981L0.724572 10.791ZM11.6439 1.07871C11.6439 0.802568 11.4201 0.57871 11.1439 0.57871L6.64395 0.57871C6.3678 0.57871 6.14395 0.802568 6.14395 1.07871C6.14395 1.35485 6.3678 1.57871 6.64395 1.57871L10.6439 1.57871L10.6439 5.57871C10.6439 5.85485 10.8678 6.07871 11.1439 6.07871C11.4201 6.07871 11.6439 5.85485 11.6439 5.57871L11.6439 1.07871ZM1.43168 11.4981L11.4975 1.43226L10.7904 0.725157L0.724572 10.791L1.43168 11.4981Z"
                                    fill="white"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BrandsDetail;
