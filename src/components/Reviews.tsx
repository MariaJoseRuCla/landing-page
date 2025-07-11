import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  nombre: string;
  texto: string;
  rating: number;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("http://localhost:4321/api/reviews")
      .then((res) => res.json())
      .then((data: Review[]) => setReviews(data))
      .catch((err) => console.error("Error al cargar opiniones:", err));
  }, []);

  return (
    <section className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-lg shadow flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="flex-1 space-y-4 max-w-full px-2 md:px-6">
        {reviews.length === 0 ? (
          <p className="text-center text-gray-600">Aún no hay opiniones.</p>
        ) : (
          reviews.map(({ nombre, texto, rating }, i) => (
            <blockquote key={i} className="bg-gray-100 p-4 rounded text-center max-w-full">
              <p className="italic text-gray-700 mb-2">"{texto}"</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <FaStar
                      key={index}
                      size={20}
                      color={starValue <= rating ? "#ffc107" : "#e4e5e9"}
                    />
                  );
                })}
              </div>
              <footer className="font-semibold text-gray-900">- {nombre}</footer>
            </blockquote>
          ))
        )}
      </div>
    </section>
  );
}
