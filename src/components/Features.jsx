import React from "react";

export default function Features () {
    const features  = [
        "Pantalla de alta resolución de 6”. ",
        "Luz cálida ajustable para leer de noche.",
        "Almacenamiento gratuito en la nube para todo el contenido de Amazon.",
        "Se carga completamente en menos de 2 horas.",
        "16 GB, con espacio para miles de libros."
    ];

    return (
        <section id="features" className="mt-12 bg-gray-100 rounded-lg shadow p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Características del producto</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                {features.map((feature,index) => (
                    <li key={index}> {feature}</li>
                ))}
            </ul>

        </section>
    );

}