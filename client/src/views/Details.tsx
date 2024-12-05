import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import PATHROUTES from "../helpers/PathRouthes";
import BrandsDetail from "../components/Details/BrandsDetail";
import CardDetail from "../components/Details/CardDetail";

const Details = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

    return (
        <div>
            <div className="bg-waves bg-cover bg-left-top">
                <Nav />
                {isMobile ? (
                    <section className="flex flex-col items-center w-full bg-gradient-to-b from-neutral-500/40 to-neutral-500/25 py-8">
                        <h1 className="text-[9vw] text-zinc-100 font-bold text-center tracking-wide">
                            VENTILACIONES R.C
                        </h1>
                        <div className="flex flex-col relative -top-5 bg-neutral-100 w-[93vw] h-full rounded-xl -mb-6">
                            <div className="p-8">
                                <p className="font-semibold text-[#474747] text-xs mb-4">
                                    Productos / Repuestos / Producto
                                </p>
                                <Link
                                    className="flex gap-1 text-custom-blue font-bold mb-8 text-sm items-center"
                                    to={PATHROUTES.HOME}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="16px"
                                        fill="#1f0061"
                                    >
                                        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                                    </svg>
                                    Atrás
                                </Link>
                                <h1 className="text-2xl font-bold">Producto</h1>
                                <p className="font-semibold mb-4 text-[#474747]">
                                    Detalle
                                </p>
                                <CardDetail />
                                <h6 className="mt-4">Marcas compatibles</h6>
                                <BrandsDetail />
                            </div>
                        </div>
                    </section>
                ) : (
                    <section className="flex flex-col items-center w-full bg-gradient-to-b from-neutral-500/40 to-neutral-500/25 relative">
                        <h1 className="text-[9vw] text-zinc-100 font-bold text-center tracking-wide">
                            VENTILACIONES R.C
                        </h1>
                        <div className="flex flex-col relative -top-24 md:-top-[3.3rem] xl:-top-[5.5rem] bg-white w-[93vw] h-full rounded-xl md:-mb-[2rem] xl:-mb-[3.5rem]">
                            <div className="p-8">
                                <p className="font-bold text-[#474747] text-xs mb-4">
                                    Productos / Repuestos / Producto
                                </p>
                                <Link
                                    className="flex gap-1 text-custom-blue font-bold mb-8 items-center"
                                    to={PATHROUTES.HOME}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill="#1f0061"
                                    >
                                        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                                    </svg>
                                    Atrás
                                </Link>
                                <h1 className="text-2xl font-bold">Producto</h1>
                                <p className="font-semibold mb-4 text-[#474747]">
                                    Detalle
                                </p>
                                <CardDetail />
                                <h5 className="mt-4">Marcas compatibles</h5>
                                <BrandsDetail />
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default Details;
