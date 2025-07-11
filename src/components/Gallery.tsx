import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
	const images: string[] = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.png"];

	return (
		<section
			id="gallery"
			className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-xl shadow"
		>
			<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
				Galería de imágenes
			</h2>

			<Swiper
			modules={[Navigation, Pagination]}
			spaceBetween={20}
			slidesPerView={2}
			navigation
			pagination={{ clickable: true}}
			loop
			>
				{images.map((src, index) => (
					<SwiperSlide key ={index}>
						<img 
						src={src}
						alt={`Imagen ${index + 1}`}
						className="w-full  h-80 rounded-lg object-cover shadow-md"
						/> 
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
