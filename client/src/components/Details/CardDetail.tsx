import { renderButton, renderIconButton } from "../RenderButton";

const CardDetail = () => {
    return (
        <div className="mx-auto flex flex-col w-[80vw]">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <div className="bg-gray-300 w-full h-64 rounded-lg flex items-center justify-center">
                        <img
                            src="image-url"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Caja TBU</h2>
                        <p className="text-gray-700 mb-4">
                            Este producto es de la marca tanto y te permiteEste
                            producto es de la marca tanto y te permiteEste
                            producto es de la marca tanto y te permiteEste
                            producto es de la marca tanto y te permiteEste
                            producto es de la marca tanto y te permiteEste
                            producto es de la marca tanto y te permiteEste
                            producto es de la marca tanto y te permiteEste
                            producto es de la marca tanto y te permiteEste
                            producto es de la marca tanto y te permite
                        </p>
                        <p className="text-3xl font-semibold text-custom-blue mb-6">
                            $ 30.000,00
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:gap-4">
                        <div className="flex flex-row -space-x-4">
                            {renderButton({
                                text: <span className="px-2">Consultar</span>,
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
                                text: (
                                    <span className="px-4">MercadoLibre</span>
                                ),
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
            <div className="flex flex-row">
                <div className="mt-6 lg:w-2/3">
                    <h3 className="text-xl font-semibold text-custom-blue mb-4">
                        Características del producto
                    </h3>
                    <h6 className="mb-2">Medidas</h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border p-4 rounded-lg">
                            <p>
                                <span className="font-regular">
                                    Dimensiones:
                                </span>{" "}
                                30 cm
                            </p>
                            <p>
                                <span className="font-regular">
                                    Diámetro Interno:
                                </span>{" "}
                                30 cm
                            </p>
                            <p>
                                <span className="font-regular">
                                    Diámetro Externo:
                                </span>{" "}
                                30 cm
                            </p>
                            <p>
                                <span className="font-regular">
                                    Materiales:
                                </span>{" "}
                                Caucho, Acero
                            </p>
                        </div>
                        <div className="border p-4 rounded-lg flex flex-col items-start">
                            <p>
                                <span className="font-regular">Centrado:</span>{" "}
                                ✔
                            </p>
                            <p>
                                <span className="font-regular">
                                    Desplazado:
                                </span>{" "}
                                ✘
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;
