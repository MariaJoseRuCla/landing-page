import React from "react";

const Table: React.FC = () => {
    return (
        <section className="px-4 py-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-center mb-6">Compara los dispositivos Kindle</h2>
            <table className="w-full table-auto border-collapse bg-white rounded-lg shadow">
                <thead>
                    <tr className="bg-blue-200">
                        <th className="p-4 text-left font-semibold">Dispositivos</th>
                        <th className="p-4 text-center font-semibold">Pantalla</th>
                        <th className="p-4 text-center font-semibold">Resistencia al agua</th>
                        <th className="p-4 text-center font-semibold">Capacidad</th>
                        <th className="p-4 text-center font-semibold">Batería</th>
                        <th className="p-4 text-center font-semibold">Precio</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                    <tr className="border-t bg-white">
                        <td className="p-4 font-medium">Kindle Basic</td>
                        <td className="p-4 text-center">6” 300 ppi</td>
                        <td className="p-4 text-center">No</td>
                        <td className="p-4 text-center">16 GB</td>
                        <td className="p-4 text-center">Hasta 6 semanas</td>
                        <td className="p-4 text-center">119 €</td>
                    </tr>
                    <tr className="border-t bg-white">
                        <td className="p-4 font-medium">Kindle Paperwhite</td>
                        <td className="p-4 text-center">6.8” 300 ppi, luz cálida</td>
                        <td className="p-4 text-center">Sí (IPX8)</td>
                        <td className="p-4 text-center">8 o 16 GB</td>
                        <td className="p-4 text-center">Hasta 10 semanas</td>
                        <td className="p-4 text-center">149 €</td>
                    </tr>
                    <tr className="border-t bg-white">
                        <td className="p-4 font-medium">Kindle Oasis</td>
                        <td className="p-4 text-center">7” 300 ppi, luz automática</td>
                        <td className="p-4 text-center">Sí (IPX8)</td>
                        <td className="p-4 text-center">8 o 32 GB</td>
                        <td className="p-4 text-center">Hasta 6 semanas</td>
                        <td className="p-4 text-center">249 €</td>
                    </tr>

                </tbody>
            </table>
        </section>
    )
}
export default Table;