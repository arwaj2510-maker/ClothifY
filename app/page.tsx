
import Link from "next/link";
import SeasonSlider from "./components/SeasonSlider";

async function getProducts() {
}

export default async function Home() {

  return (
    <>
      <div>
        <section className="hero">
          <div className="hero-content">
            <h2>Discover Your Style</h2>
            <p>Premium Fashion for Men & Women</p>
            <Link href="/about">
              <button>Shop Now</button>
            </Link>
          </div>
        </section>


        <section className="products">
          <h2>Featured Products</h2>

          <div className="product-grid">
            <div className="card">
              <img src="https://veirdo.in/cdn/shop/files/Artboard_7_31.jpg?v=1758348679" />
              <h3>Men T-Shirt</h3>
              <p>₹999</p>
            </div>

            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXpbPcXQQT87Jj7s130gIMbtHfWbuMDNh-A&s" />
              <h3>Women Dress</h3>
              <p>₹1499</p>
            </div>

            <div className="card">
              <img src="https://www.soosi.co.in/cdn/shop/products/WhatsAppImage2021-10-31at11.58.18_1200x1200.jpg?v=1635674699" />
              <h3>Jacket</h3>
              <p>₹1999</p>
            </div>
          </div>
        </section>
      </div>
      <SeasonSlider />
    </>
  );
}