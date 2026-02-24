"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Snackbar, Alert } from "@mui/material";

const productsData = [
    {
        id: 1,
        name: "Classic T-Shirt",
        price: 799,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
        id: 2,
        name: "Denim Jacket",
        price: 2499,
        image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923",
    },
    {
        id: 3,
        name: "Summer Dress",
        price: 1599,
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    },
    {
        id: 4,
        name: "Classic T-Shirt",
        price: 799,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
];

const MoreproductsData = [
    {
        id: 5,
        name: "Classic T-Shirt",
        price: 799,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
        id: 6,
        name: "Denim Jacket",
        price: 2499,
        image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923",
    },
    {
        id: 7,
        name: "Summer Dress",
        price: 1599,
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    },
];

export default function Home() {

    const [cart, setCart] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    const addToCart = (product) => {

        const existingCart = [...cart];

        const existingProductIndex = existingCart.findIndex(
            (item) => item.id === product.id
        );

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += 1;
        } else {
            existingCart.push({ ...product, quantity: 1 });
        }

        setCart(existingCart);
        localStorage.setItem("cart", JSON.stringify(existingCart));

        setOpen(true); // 🔥 Toast show
    };

    const handleClose = () => {
        setOpen(false);
    };

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    return (
        <div className="about-main">
            {/* Navbar */}
            <nav className="about-nav">
                <h1 className="">ClothifY Fashion Store</h1>
                <div>
                    <span className="">Cart: {cart.length}</span>
                    <span>Total: ₹{totalPrice}</span>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="latest">
                <h2 className="">Latest Collection 2026</h2>
                <p className="">Trendy and Stylish Clothes Just For You</p>
            </section>

            {/* Products */}
            <section className="box">
                {productsData.map((product) => (
                    <div key={product.id} className="">
                        <div className="">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={280}
                                className=""
                            />
                        </div>
                        <div className="price">
                            <h3 className="">{product.name}</h3>
                            <p className="">₹{product.price}</p>
                        </div>
                        <button
                            onClick={() => addToCart(product)}
                            className="cart-btn"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </section>

            <section className="box2">
                {MoreproductsData.map((product) => (
                    <div key={product.id} className="">
                        <div className="img">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={340}
                                height={300}
                                className=""
                            />
                        </div>
                        <div className="price">
                            <h3 className="">{product.name}</h3>
                            <p className="">₹{product.price}</p>
                        </div>
                        <button
                            onClick={() => addToCart(product)}
                            className="cart-btn"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </section>
            {/* ✅ Toast Snackbar */}
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert onClose={handleClose} severity="success" variant="filled">
                    Product added to cart successfully!
                </Alert>
            </Snackbar>

        </div>
    );

};