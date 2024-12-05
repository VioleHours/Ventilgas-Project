import { useEffect, useState } from "react";
import { renderButton, renderIconButton } from "./RenderButton";
import { Logo } from "./Icons";

export const Nav = () => {
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
        <>
            {isMobile ? (
                <nav className="flex w-full h-[30vw] items-center justify-center bg-white">
                    <div className="flex justify-center">
                        <Logo height="10vw" />
                        <span className="text-[6vw] ml-[9px] mt-1 text-black font-bold">
                            Ventilaciones R.C
                        </span>
                    </div>
                </nav>
            ) : (
                <nav className="flex w-full items-center justify-between px-12 pt-6 pb-2 md:px-8 bg-neutral-500/40">
                    <div className="flex items-center mt-2 bg-white rounded-full px-3 py-1">
                        <Logo width="40" height="48" />
                        <span className="text-md lg:text-lg mr-2 mt-1 font-bold text-black">
                            Ventilaciones R.C
                        </span>
                    </div>
                    <div className="hidden md:flex space-x-4 mt-4">
                        <a href="#about" className="text-white font-light">
                            Sobre nosotros
                        </a>
                        <a href="#products" className="text-white font-light">
                            Productos
                        </a>
                        <a href="#contact" className="text-white font-light">
                            Contacto
                        </a>
                    </div>
                    <div className="flex flex-row -space-x-4">
                        {renderButton({
                            text:"Ver Productos", 
                            variant: "aux", 
                            onClick: () =>
                            alert("Ver Productos")}
                        )}
                        {renderIconButton(
                           { variant: "aux",
                            onClick: () => alert("Ver Productos"),
                            arrowFill: "text-indigo-950"}
                        )}
                    </div>
                </nav>
            )}
        </>
    );
};
