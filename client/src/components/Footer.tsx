import { footerBG } from "../assets/index";
import FooterSoft from "./FooterSoft";
import logo from "../assets/footer/logo.png";

export const Footer = () => {
    return (
        <div
            className="flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center py-8 gap-8 lg:flex-row px-[5%]"
            style={{ backgroundImage: `url(${footerBG})` }}
        >
            <div className="flex flex-col justify-between w-[90%] h-4/5 bg-white rounded-lg p-8 gap-4 lg:w-[70%] lg:h-[380px] lg:flex-row lg:pb-4">
                <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="flex justify-between w-[100%] lg:flex-col">
                        <div className="flex w-[100%] items-center">
                            <img
                                src={logo}
                                alt=""
                                className="object-cover w-[20%] lg:w-[50px]"
                            />
                            <span className="text-[5vw] text-black font-bold lg:text-[16px]">
                                Ventilaciones R.C
                            </span>
                        </div>
                        <div className="svg_container items-center gap-4 hidden lg:flex">
                            <a
                                href="https://api.whatsapp.com/send?phone=5493875377584&text=Hola%20Violeta%20soy%20..."
                                target="_blank"
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    fill="#7b7a7b"
                                    width="22"
                                    height="22"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>WhatsApp</title>
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com/viiolesool.ariashours"
                                target="_blank"
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    fill="#7b7a7b"
                                    width="22"
                                    height="22"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Facebook</title>
                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between my-6 mb-0 lg:my-0">
                        <div className="flex flex-col justify-between">
                            <p className="info_p mt-0 text-sm font-semibold text-gray-700 my-3 lg:mt-0">
                                INFORMACIÓN
                            </p>
                            <a
                                href="#a"
                                className="a text-gray-800 text-sm transition duration-300 hover:underline"
                            >
                                Sobre Nosotros
                            </a>
                            <a
                                href="#a"
                                className="a text-gray-800 text-sm transition duration-300 hover:underline"
                            >
                                Marcas
                            </a>
                            <a
                                href="#a"
                                className="a text-gray-800 text-sm transition duration-300 hover:underline"
                            >
                                Productos
                            </a>
                            <a
                                href="#a"
                                className="a text-gray-800 text-sm transition duration-300 hover:underline"
                            >
                                Contacto
                            </a>
                        </div>
                        <p className="font-semibold text-sm my-3 mb-0">
                            Dirección - Ciudad - Lugar - Número
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        <a
                            className="bg-[#002064] text-white rounded-lg py-2 px-6 mb-3 text-sm w-min"
                            href="tel:+5493875377584"
                        >
                            Contactarnos
                        </a>
                        <p className="contact_p font-semibold text-sm mb-0 hidden lg:flex">
                            +54 9 xxxxxxx
                        </p>
                        <p className="contact_p font-semibold text-sm mb-0 hidden lg:flex">
                            Ventilgas@gmail.com
                        </p>
                    </div>
                    <div className="contact_bottom_div flex-col items-end max-w-36 hidden lg:flex">
                        <h4 className="contact_h4 text-lg my-1 font-bold">
                            Contáctanos!
                        </h4>
                    </div>
                </div>
            </div>
            <FooterSoft />
        </div>
    );
};
