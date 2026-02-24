"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartPage() {
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            const parsed = JSON.parse(savedCart);
            const updated = parsed.map((item) => ({
                ...item,
                quantity: item.quantity || 1,
            }));
            setCart(updated);
            localStorage.setItem("cart", JSON.stringify(updated));
        }
    }, []);

    const updateQuantity = (index, amount) => {
        const updatedCart = [...cart];

        updatedCart[index].quantity += amount;

        if (updatedCart[index].quantity <= 0) {
            updatedCart.splice(index, 1);
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="main-cart">
            <div className="cart-section">
                <h1 className="">Your Cart</h1>
                <Link
                    href="/about"
                    className=""
                >
                    Back to Shop
                </Link>
            </div>

            {cart.length === 0 ? (
                <div className="all-cart">
                    🛒 Your cart is empty.
                </div>
            ) : (
                <div className="cart-count">
                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="c1"
                        >
                            {/* LEFT SIDE */}
                            <div className="cart-sec">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className=""
                                    width={180}
                                    height={150}
                                />
                                <div>
                                    <div>
                                        <h2 className="">{item.name}</h2>
                                        <p className="">₹{item.price}</p>
                                    </div>
                                    {/* Quantity Controls */}
                                    <div className="c1">
                                        <button
                                            onClick={() => updateQuantity(index, -1)}
                                        >
                                            −
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() => updateQuantity(index, 1)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className="c2">
                                        = ₹{item.price * item.quantity}
                                    </div>
                                </div>
                            </div>

                            <hr className="line"></hr>
                        </div>

                    ))}

                    {/* Total Section */}
                    <div className="c3">
                        <span className="">Total Amount:</span>
                        <span className="spn">
                            ₹{totalPrice}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
