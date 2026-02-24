import Link from "next/link";
import "./globals.css";
import { FaShoppingCart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Footer from "./components/footer";
// import { useState } from "react";
import { TextField } from "@mui/material";


export default function RootLayout({ children }) {

  return (
    <html>
      <body>
        <div className="page-wrapper">
          <nav className="nav">
            <Link href="/about">
              <img src="/logo.png" alt="" />
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/women">Women</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="icon">
              <Link href="/cart"><FaShoppingCart size={22} /></Link>
              <FiUser size={22} className="cursor-pointer" />
            </div>
          </nav>
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html >
  );
}