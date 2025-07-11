import React from "react";

export default function Video() {
    return (
        <div className="max-w-4xl mx-auto my-12">
             <h2 className="text-2xl font-bold text-center mb-4">Cómo usar tu nuevo Kindle</h2>
             <div className="aspect-w-16 aspect-h-9">
                <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/6nLiLp7W-Bw"
                title="Cómo usar tu nuevo Kindle"
                allowFullScreen
                >
                </iframe>
             </div>
        </div>
           
    );
}