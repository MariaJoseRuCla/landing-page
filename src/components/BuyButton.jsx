import React from "react";

export default function BuyButton ({price}) {
    function handleClick() {
        alert ('Gracias por la compra');
    }
    return (
        <button onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded transition-colors duration-300">
            Comprar ahora por {price}
        </button>
    );
}