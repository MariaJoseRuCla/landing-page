import React, { useState } from "react";
import StarRating from "./StarRating";

export default function ReviewButton() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  function handleWriteReview(): void {
    setShowForm(true);
    setMessage("");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (userName.trim() === "" || review.trim() === "" || rating === 0) return;


    console.log("Enviando:", { userName, review, rating });

    fetch("http://localhost:4321/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, review, rating }),
    })
      .then((res) => {
        if (res.ok) {
          setUserName("");
          setReview("");
          setShowForm(false);
          setMessage("Gracias por tu opinión");
        } else {
          setMessage("Error al enviar la opinión");
        }
      })
      .catch(() => setMessage("Error al enviar la opinión"));
  }

  return (
    <section className="max-w-md mx-auto mt-12 p-6 bg-gray-50 rounded-lg shadow text-center">
      <h2 className="text-2xl font-semibold mb-2">Valorar el producto</h2>
      <p className="text-gray-700 mb-6">Comparte tu opinión con otros clientes</p>

      {!showForm && !message && (
        <button
          onClick={handleWriteReview}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
        >
          Escribir mi opinión
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full mb-4 border rounded p-2"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <StarRating rating={rating} setRating={setRating} />

          <textarea
            className="w-full mb-4 border rounded"
            rows={4}
            placeholder="Escribe tu opinión..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
          >
            Enviar Opinión
          </button>
        </form>
      )}

      {message && (
        <>
          <p className="mt-4 text-green-700 font-semibold">{message}</p>
          <button
            onClick={handleWriteReview}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Escribir otra opinión
          </button>
        </>
      )}
    </section>
  );
}
