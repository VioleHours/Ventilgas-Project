import {
    bgBrand,
    york,
    bgh,
    carrier,
    goodman,
    longvie,
    surrey,
} from "../assets/index";
import { useState } from "react";

export const Brands = () => {
    const [search, setSearch] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const handleBrands = (event: any) => {
        setSearch(event.target.value);
        setCurrentIndex(0);
    };

    const filteredBrands = brands.filter((brand) =>
        brand.name.toLowerCase().includes(search.toLowerCase())
    );

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === Math.ceil(filteredBrands.length / 4) - 1
                ? 0
                : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? Math.ceil(filteredBrands.length / 4) - 1
                : prevIndex - 1
        );
    };

    return (
        <section
            className="flex flex-col items-center w-full bg-neutral-500 bg-bottom bg-cover"
            style={{ backgroundImage: `url(${bgBrand})` }}
        >
            <div className="flex flex-col gap-4 w-[95%] bg-transparent py-5 rounded-3xl lg:bg-white lg:h-[250px] lg:my-8 lg:p-8">
                <p className="font-bold hidden lg:block">
                    Marcas con las que trabajamos
                </p>
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
                    {/* {search === "" ? (
            brands.map((item) => (
              <div key={item.id} className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20" />
              </div>
            ))
          ) : (
            filteredBrands.map((item) => (
              <div key={item.id} className="flex items-center">
                <img src={item.image} alt={item.name} className="w-20" />
              </div>
            ))
          )} */}
                    {filteredBrands
                        .slice(currentIndex * 4, currentIndex * 4 + 4)
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
                    {filteredBrands.length === 0 && (
                        <p>No se encontró la marca ingresada</p>
                    )}
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
                <p className="hidden lg:block">
                    No estás encontrando tu marca?
                </p>
                <div className="hidden border-solid border-2 rounded-full px-4 py-3 lg:flex">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                            fill="#bbbdc8"
                        />
                    </svg>
                    <input
                        type="text"
                        name="name"
                        onChange={handleBrands}
                        value={search}
                        className="focus:outline-none w-[100%] pl-3"
                        placeholder="Cómo es la marca de tu calefactor?"
                    />
                </div>
            </div>
        </section>
    );
};
