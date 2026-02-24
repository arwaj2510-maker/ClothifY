"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import "./SeasonSlider.css";
import Link from "next/link";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const winter: Product[] = [
    { id: 1, name: "Jacket", price: 2499, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf" },
    { id: 2, name: "Hoodie", price: 1499, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27" },
    { id: 3, name: "Sweater", price: 1799, image: "https://images.unsplash.com/photo-1542060748-10c28b62716f" },
    { id: 4, name: "Coat", price: 2999, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b" },
    { id: 5, name: "Coat", price: 2999, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b" },
    { id: 6, name: "Coat", price: 2999, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b" },
    { id: 7, name: "Coat", price: 2999, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b" },
    { id: 8, name: "Hoodie", price: 1499, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27" },
];

const summer: Product[] = [

    { id: 9, name: "Shorts", price: 999, image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7" },
    { id: 10, name: "Shirt", price: 1299, image: "https://images.unsplash.com/photo-1603252109303-2751441dd157" },
    { id: 11, name: "Cap", price: 499, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" },
    { id: 12, name: "T-Shirt", price: 799, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
    { id: 13, name: "Shorts", price: 999, image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7" },
    { id: 14, name: "Shirt", price: 1299, image: "https://images.unsplash.com/photo-1603252109303-2751441dd157" },
    { id: 15, name: "Cap", price: 499, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" },
    { id: 16, name: "T-Shirt", price: 799, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
];

export default function SeasonSlider() {
    // const [selectedProduct, setSelectedProduct] = useState<any>(null);


    const [season, setSeason] = useState<"winter" | "summer">("winter");
    const sliderRef = useRef<HTMLDivElement>(null);

    const products = season === "winter" ? winter : summer;

    const scroll = (direction: "left" | "right") => {
        if (!sliderRef.current) return;

        const slider = sliderRef.current;
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

        if (direction === "right") {
            if (slider.scrollLeft >= maxScrollLeft - 10) {
                slider.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                slider.scrollBy({ left: 400, behavior: "smooth" });
            }
        }

        if (direction === "left") {
            if (slider.scrollLeft <= 10) {
                slider.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
            } else {
                slider.scrollBy({ left: -400, behavior: "smooth" });
            }
        }
    };



    return (
        <>
            <div className="premium-container">

                {/* Season Buttons */}
                <div className="season-switch">
                    <button
                        className={season === "winter" ? "active" : ""}
                        onClick={() => setSeason("winter")}
                        id="season-btn"
                    >
                        Winter
                    </button>

                    <button
                        className={season === "summer" ? "active" : ""}
                        onClick={() => setSeason("summer")}
                        id="season-btn"
                    >
                        Summer
                    </button>
                </div>

                {/* Slider */}
                <div className="premium-wrapper">
                    <button className="premium-arrow left" onClick={() => scroll("left")}>
                        ‹
                    </button>

                    <div className="premium-slider" ref={sliderRef}>
                        {products.map((item) => (
                            <div className="premium-card" key={item.id}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={367}
                                    height={350}
                                />
                                <div className="card-info">
                                    <h3>{item.name}</h3>
                                    <p>₹{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="premium-arrow right" onClick={() => scroll("right")}>
                        ›
                    </button>
                </div>
            </div>
            <Link href="/about">
                <button className="btn">view more products </button>
            </Link>

        </>
    );
}