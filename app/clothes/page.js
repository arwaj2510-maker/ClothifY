"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Clothes() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/category/mens-shirts")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            });
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Men Shirts</h1>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {products.map((item) => (
                    <div key={item.id} style={{ width: "200px" }}>
                        <Image
                            src={item.thumbnail}
                            width={200}
                            height={200}
                            alt={item.title}
                        />
                        <h3>{item.title}</h3>
                        <p>₹ {item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}