import React from 'react';

interface Pregunta {
    pregunta: string;
    respuesta: string;
}

const preguntas: Pregunta[] = [

{
    pregunta: '1. ¿En qué se diferencia la pantalla del Kindle de la de los tablets?',
    respuesta: 'Nuestros dispositivos Kindle están diseñados para que puedas leer cómodamente durante horas. Los Kindle cuentan con una pantalla en blanco y negro sin reflejos que se puede leer como si fuera papel impreso, incluso bajo la luz solar directa. Debido a las características propias de la tecnología de tinta electrónica, a veces pueden apreciarse sombras de la imagen o el texto de la página anterior. Por ello, la pantalla se recarga de vez en cuando para eliminar estas sombras y ofrecer una percepción de imagen superior.',
},

{
    pregunta: '2. ¿Es necesario tener una suscripción a Kindle Unlimited para leer con el Kindle?',
    respuesta: 'No, no hace falta suscribirse a Kindle Unlimited para leer con el Kindle. Todos los dispositivos Kindle cuentan con acceso inmediato a la mejor librería de e-books del mundo. La Tienda Kindle tiene disponibles millones de títulos en todo el mundo, incluidos los títulos más vendidos del momento.',
},

{
    pregunta: '3. ¿Cómo se configura el Kindle?',
    respuesta: 'Puedes configurar el Kindle siguiendo las instrucciones en pantalla o desde la app Kindle de tu móvil. Si quieres configurarlo desde tu móvil, abre la app Kindle y activa la opción Configuración sencilla del dispositivo Amazon antes de encender el Kindle. Si al comprarlo elegiste la opción de Vincular dispositivo a tu cuenta de Amazon para facilitar la instalación, el Kindle ya estará registrado a tu nombre.',
},
];

export default function PreguntasFrecuentes() {
    return (
        <section className='max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-8'>
            <h2 className='text-3xl font-bold mb-8 text-center'>Preguntas Frecuentes</h2>
            {preguntas.map((item, index) => (
                <div key={index} className='mb-6'>
                    <h3 className='text-xl font-semibold mb-2 text-800'>{item.pregunta}</h3>
                    <p className='tex-gray-700 leading-relaxed'>{item.respuesta}</p>
                </div>
            ))}
        </section>
    );
}