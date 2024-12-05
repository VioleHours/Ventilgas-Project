import React, { useEffect, useState } from "react";
import { renderButton, renderIconButton } from "./RenderButton";
import logo from "../assets/footer/logo.png";

interface ModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (showModal) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [showModal]);

    const handleSendMessage = () => {
        alert(`Enviando mensaje: ${message}`);
    };

    if (!showModal) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-neutral-100 p-12 rounded-lg shadow-lg relative w-[85vw] md:w-[75vw]">
                <button
                    className="absolute top-8 left-8 text-custom-blue font-semibold"
                    onClick={() => setShowModal(false)}
                >
                    🡐 Atrás
                </button>
                <div className="flex flex-col mt-8 w-full">
                    <div className="flex flex-col-reverse justify-between mb-6 md:flex-row">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-xl font-bold">
                                ¿Cómo te podemos ayudar?
                            </h2>
                            <p className="font-medium">
                                ¿Qué producto necesitas?
                            </p>
                            <div className="flex flex-wrap justify-start">
                                {renderButton({
                                    text: "Tiraje", 
                                    variant: "black", 
                                    onClick: () =>
                                        alert("Tiraje Balanceado")
                                })}
                                {renderButton({
                                    text: "Caja TBU", 
                                    variant: "black", 
                                    onClick: () =>
                                    alert("Caja TBU")
                                    })}
                            </div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <img
                                src={logo}
                                alt="Ventilaciones R.C"
                                className="object-cover h-[5vh] lg:h-[8vh]"
                            />
                            <h1 className="text-base mt-3 lg:text-3xl lg:mt-5 font-bold">
                                Ventilaciones R.C
                            </h1>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">
                            Medio de comunicación
                        </h2>
                        <p className="font-medium">Contactanos</p>
                        <textarea
                            placeholder="👋 Hola, quiero pedir precio e información para un @Producto para mi calefactor."
                            className="w-full md:w-[48vw] px-2 border border-gray-300 rounded-3xl text-sm bg-neutral-100"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {message &&
                            renderButton({
                                text: <span className="px-4">Enviar</span>,
                                variant: "black",
                                onClick: handleSendMessage

                            })}
                        <div className="flex flex-row -space-x-4 mt-4">
                            {renderButton(
                                {
                                    text: <span className="px-4">Mail</span>,
                                variant: "secondary",
                                onClick: () => alert("Enviar Mail")}
                            )}
                            {renderIconButton(
                                {variant: "secondary",
                                onClick: () => alert("Enviar Mail"),
                                arrowFill: "white"}
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
