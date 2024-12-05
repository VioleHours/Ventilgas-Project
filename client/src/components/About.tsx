import { useEffect, useState } from "react";
import { renderButton, renderIconButton } from "./RenderButton";
import { Logo } from "./Icons";

export const About = () => {
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
                <section className="flex flex-col items-center w-full py-8">
                    <h3 className="flex w-full justify-start pl-8 text-xs font-medium text-custom-blue">
                        SOBRE NOSOTROS
                    </h3>
                    <h1 className="flex w-full justify-start pl-8 text-2xl font-medium">
                        Repuestos para tu calefactor
                    </h1>
                    <div className="flex w-full justify-start px-8 text-sm py-8">
                        <p>
                            En{" "}
                            <span className="font-bold text-md text-custom-blue">
                                Ventilaciones R.C
                            </span>
                            , somos líderes en la venta de repuestos de alta
                            calidad para calefactores en todo el país. Con años
                            de experiencia en el mercado, nos hemos consolidado
                            como la opción confiable y preferida por miles de
                            clientes que buscan soluciones efectivas y duraderas
                            para sus sistemas de calefacción de agua.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex flex-row -space-x-4">
                            {renderButton({
                                text: "Necesito un repuesto",
                                variant: "secondary",
                                onClick: () => alert("Necesito un repuesto"),
                            })}
                            {renderIconButton({
                                variant: "secondary",
                                onClick: () => alert("Necesito un repuesto"),
                                arrowFill: "white",
                            })}
                        </div>
                        <div className="flex flex-row -space-x-4">
                            {renderButton({
                                text: "Contáctanos",
                                variant: "tertiary",
                                onClick: () => alert("Contáctanos"),
                            })}
                            {renderIconButton({
                                variant: "tertiary",
                                onClick: () => alert("Contáctanos"),
                                arrowFill: "text-indigo-950",
                            })}
                        </div>
                    </div>
                </section>
            ) : (
                <section
                    id="about"
                    className="flex flex-row justify-center items-center w-[92vw] py-8 mx-auto"
                >
                    <div className="flex flex-wrap w-full">
                        <div className="flex flex-col w-1/2 justify-center">
                            <h3 className="flex w-full justify-start pl-12 text-xs font-medium text-custom-blue">
                                SOBRE NOSOTROS
                            </h3>
                            <h1 className="flex w-full justify-start pl-12 text-2xl font-medium">
                                Repuestos para tu calefactor
                            </h1>
                            <div className="flex w-full justify-start px-12 text-sm py-8">
                                <p>
                                    En{" "}
                                    <span className="font-bold text-md text-custom-blue">
                                        Ventilaciones R.C
                                    </span>
                                    , somos líderes en la venta de repuestos de
                                    alta calidad para calefactores en todo el
                                    país. Con años de experiencia en el mercado,
                                    nos hemos consolidado como la opción
                                    confiable y preferida por miles de clientes
                                    que buscan soluciones efectivas y duraderas
                                    para sus sistemas de calefacción de agua.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-1/2 justify-center items-center md:pr-4">
                            <Logo width="90" height="98" />
                            <span className="text-2xl lg:text-4xl font-bold mt-4 text-black">
                                Ventilaciones R.C
                            </span>
                        </div>
                        <div className="flex flex-row w-full justify-start items-center gap-2 px-8 mt-4">
                            {renderButton({
                                text: "Necesito un repuesto",
                                variant: "secondary",
                                onClick: () => alert("Necesito un repuesto"),
                            })}
                            <div className="flex flex-row -space-x-4">
                                {renderButton({
                                    text: "Consultar",
                                    variant: "tertiary",
                                    onClick: () => alert("Consultar"),
                                })}
                                {renderIconButton({
                                    variant: "tertiary",
                                    onClick: () => alert("Consultar"),
                                    arrowFill: "text-indigo-950",
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};
