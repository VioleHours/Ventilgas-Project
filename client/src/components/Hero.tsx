import { useEffect, useState } from "react";
import { renderButton, renderIconButton } from "./RenderButton";
import Modal from "./Modal";
import { calefactor } from "../assets";

export const Hero = () => {
    const [showModal, setShowModal] = useState(false);
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
                <section className="flex flex-col items-center w-full bg-gradient-to-b from-neutral-500/40 to-neutral-500/25 py-8">
                    <h1 className="text-[9vw] mt-16 mb-5 text-zinc-100 font-semibold text-center">
                        Repuestos para calefactores
                    </h1>
                    <div className="flex flex-wrap justify-center mb-8">
                        {renderButton({
                            text: "Caja TBU",
                            variant: "primary",
                            onClick: () => alert("Caja TBU"),
                        })}
                        {renderButton({
                            text: "Tiraje Balanceado",
                            variant: "primary",
                            onClick: () => alert("Tiraje Balanceado"),
                        })}
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex flex-row -space-x-4">
                            {renderButton({
                                text: <span className="px-2">Necesito un repuesto</span>,
                                variant: "secondary",
                                onClick: () => setShowModal(true),
                            })}
                            {renderIconButton({
                                variant: "secondary",
                                onClick: () => setShowModal(true),
                                arrowFill: "white",
                            })}
                            <Modal
                                showModal={showModal}
                                setShowModal={setShowModal}
                            />
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
                        <br />
                    </div>
                </section>
            ) : (
                <section className="flex flex-col items-center w-full bg-gradient-to-b from-neutral-500/40 to-neutral-500/25 relative">
                    <h1 className="text-[9vw] text-zinc-100 font-bold text-center tracking-wide">
                        VENTILACIONES R.C
                    </h1>
                    <h2 className="text-[2vw] lg:-mt-8 md:-mt-4 text-zinc-100 font-medium text-left w-[87vw]">
                        Repuestos para calefactores
                    </h2>
                    <div className="flex flex-col relative -top-24 md:-top-[4.7rem] xl:-top-[7.7rem]">
                        <img
                            src={calefactor}
                            alt="Calefactor"
                            className="mx-28"
                            style={{ width: "70vw" }}
                        />
                        <div className="flex flex-row-reverse w-full justify-around mx-auto">
                            <div className="flex flex-wrap justify-center md:w-1/4">
                                {renderButton({
                                    text: "Caja TBU",
                                    variant: "primary",
                                    onClick: () => alert("Caja TBU"),
                                })}
                                {renderButton({
                                    text: "Tiraje Balanceado",
                                    variant: "primary",
                                    onClick: () => alert("Tiraje Balanceado"),
                                })}
                            </div>
                            <div className="flex lg:flex-row items-center ">
                                <div className="flex flex-row -space-x-4">
                                    {renderButton({
                                        text: <span className="px-2">Necesito un repuesto</span>,
                                        variant: "secondary",
                                        onClick: () => setShowModal(true),
                                    })}
                                    {renderIconButton({
                                        variant: "secondary",
                                        onClick: () => setShowModal(true),
                                        arrowFill: "white",
                                    })}
                                    <Modal
                                        showModal={showModal}
                                        setShowModal={setShowModal}
                                    />
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
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};
