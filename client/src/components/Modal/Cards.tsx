const products = [
    {
        id: 1,
        name: "Caja TBU",
        price: 30000,
        image: "https://http2.mlstatic.com/D_NQ_NP_852346-MLA75276225884_032024-O.webp",
    },
    {
        id: 2,
        name: "Caja TBU",
        price: 30000,
        image: "https://http2.mlstatic.com/D_NQ_NP_852346-MLA75276225884_032024-O.webp",
    },
    {
        id: 3,
        name: "Caja TBU",
        price: 30000,
        image: "https://http2.mlstatic.com/D_NQ_NP_852346-MLA75276225884_032024-O.webp",
    },
    {
        id: 4,
        name: "Caja TBU",
        price: 30000,
        image: "https://http2.mlstatic.com/D_NQ_NP_852346-MLA75276225884_032024-O.webp",
    },
    {
        id: 4,
        name: "Caja TBU",
        price: 30000,
        image: "https://http2.mlstatic.com/D_NQ_NP_852346-MLA75276225884_032024-O.webp",
    },
    {
        id: 4,
        name: "Caja TBU",
        price: 30000,
        image: "https://http2.mlstatic.com/D_NQ_NP_852346-MLA75276225884_032024-O.webp",
    },
    {
        id: 4,
        name: "Caja TBU",
        price: 30000,
        image: "https://http2.mlstatic.com/D_NQ_NP_852346-MLA75276225884_032024-O.webp",
    },
    {
        id: 4,
        name: "Caja TBU",
        price: 30000,
        image: "https://http2.mlstatic.com/D_NQ_NP_852346-MLA75276225884_032024-O.webp",
    },
    {
        id: 4,
        name: "Caja TBU",
        price: 30000,
        image: "https://http2.mlstatic.com/D_NQ_NP_852346-MLA75276225884_032024-O.webp",
    },
];

const Cards = () => {
    return (
        <div className="mt-10 flex gap-12 min-w-[70%] flex-wrap overflow-y-auto max-h-[400px]">
            {products.map((p) => {
                return (
                    <div className="flex flex-col w-[20%] cursor-pointer">
                        <img
                            src={p.image}
                            alt=""
                            className="w-[150px] h-[150px]"
                        />
                        <p>{p.name}</p>
                        <p>${p.price}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;
