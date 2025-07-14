import React from "react";

const Table: React.FC = () => {
    return (
        <section className="">
            <h2>Compara los dispositivos Kindle</h2>
            <table>
                <thead>
                    <tr>
                        <th>Dispositivos</th>
                        <th>Pantalla</th>
                        <th>Resistencia al agua</th>
                        <th>Capacidad</th>
                        <th>Batería</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Kindle Basic</td>
                        <td>6” 300 ppi</td>
                        <td>No</td>
                        <td>16 GB</td>
                        <td>Hasta 6 semanas</td>
                        <td>119 €</td>
                    </tr>
                    <tr>
                        <td>Kindle Paperwhite</td>
                        <td>6.8” 300 ppi, luz cálida</td>
                        <td>Sí (IPX8)</td>
                        <td>8 o 16 GB</td>
                        <td>Hasta 10 semanas</td>
                        <td>149 €</td>
                    </tr>
                    <tr>
                        <td>Kindle Oasis</td>
                        <td>7” 300 ppi, luz automática</td>
                        <td>Sí (IPX8)</td>
                        <td>8 o 32 GB</td>
                        <td>Hasta 6 semanas</td>
                        <td>249 €</td>
                    </tr>

                </tbody>
            </table>
        </section>
    )
}
export default Table;