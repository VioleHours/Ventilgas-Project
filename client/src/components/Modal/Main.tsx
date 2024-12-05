import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRouthes";
import SearchBar from "./SearchBar";
import Cards from "./Cards";

const Main = () => {
    return (
        <div className="absolute top-[180px] left-[2%] z-50 w-[96%] h-[115%] bg-white rounded-2xl p-8 overflow-hidden">
            <div className="w-[70%]">
                <p className="font-bold text-[#474747] text-xs mb-4">
                    Productos / Repuestos
                </p>
                <Link
                    className="flex gap-1 text-[#1f0061] font-bold mb-8"
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
                <h1 className="text-2xl font-bold">Productos</h1>
                <p className="font-semibold mb-4">Repuestos</p>
                <SearchBar />
                <Cards />
            </div>
        </div>
    );
};

export default Main;
