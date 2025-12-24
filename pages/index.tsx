import Head from "next/head";

export default function Home() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Head>
        <title>Roti Ijabah</title>
        <meta
          name="description"
          content="Roti Ijabah — roti yang sehat dan enak di lidah."
        />
      </Head>

      <main className="wrapper">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="logo">
            <img src="/logo-roti-ijabah.png" alt="Logo Roti Ijabah" />
            <span>Roti Ijabah</span>
          </div>

          <ul className="nav-links">
            <li>
              <a onClick={() => scrollToSection("rumah")}>Rumah</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("produk")}>Produk</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("tentang")}>
                Tentang Kami
              </a>
            </li>
          </ul>
        </nav>

        {/* HERO */}
        <section className="hero" id="rumah">
          <div className="pattern" />

          <div className="hero-content">
            <h1>
              Roti yang <br />
              <span className="highlight glow">Sehat</span> dan{" "}
              <span className="highlight glow">Enak di Lidah</span>
            </h1>

            <p>
              Dibuat dari bahan pilihan dengan proses yang terjaga,
              menghadirkan roti berkualitas untuk dinikmati setiap hari.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("produk")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Lihat Produk
            </button>
          </div>

          <div className="hero-image">
            <div className="image-pattern" />
            <div className="image">
              <img src="/kumpulanroti.jpeg" alt="Roti Ijabah" />
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="products" id="produk">
          <h2 className="section-title">
            <span className="highlight glow">Produk</span> Favorit
          </h2>

          <div className="cards">
            <div className="card">
              <div className="card-image">
                <img src="/coklat.jpg" alt="Roti Cokelat" />
              </div>
              <h3 style={{ fontWeight: 700, marginBottom: "8px" }}>
                Roti Cokelat
              </h3>
              <p>Lembut dengan isian cokelat manis yang lumer.</p>
            </div>

            <div className="card">
              <div className="card-image">
                <img
                  src="/coklatpisang.jpg"
                  alt="Roti Cokelat Pisang"
                />
              </div>
              <h3 style={{ fontWeight: 700, marginBottom: "8px" }}>
                Roti Cokelat Pisang
              </h3>
              <p>
                Perpaduan cokelat dan pisang dengan rasa manis seimbang.
              </p>
            </div>

            <div className="card">
              <div className="card-image">
                <img src="/pizza.jpg" alt="Roti Sosis Keju" />
              </div>
              <h3 style={{ fontWeight: 700, marginBottom: "8px" }}>
                Roti Sosis Keju
              </h3>
              <p>
                Isian sosis dan keju gurih dengan cita rasa pizza yang
                khas.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="tentang">
          <div className="about-image">
            <img
              src="/tempat-produksi.png"
              alt="Tempat Produksi Roti Ijabah"
              style={{
                width: "50%",
                height: "auto",
                marginLeft: "100px",
              }}
            />
          </div>

          <div className="about-content">
            <h2 className="about-title">
              Tentang <span className="highlight glow">Roti Ijabah</span>
            </h2>

            <p>
              Roti Ijabah lahir dari keinginan sederhana yaitu
              menghadirkan roti yang jujur, sehat, dan dibuat dengan niat
              baik. Kami percaya bahwa makanan yang baik berasal dari
              proses yang bersih, bahan yang terpilih, dan berkah yang
              menyertai setiap adonan.
            </p>

            <div className="social-buttons">
              <a
                href="https://wa.me/6285398225083"
                target="_blank"
                className="btn wa"
              >
                WhatsApp
              </a>
              <a
                href="https://instagram.com/roti_ijabah"
                target="_blank"
                className="btn ig"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">© 2025 Roti Ijabah</footer>
      </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .wrapper {
          font-family: system-ui, sans-serif;
          color: #2b2b2b;
          overflow-x: hidden;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3rem;
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          z-index: 10;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-weight: 700;
          font-size: 1.15rem;
        }

        .logo img {
          width: 34px;
          height: 34px;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 3rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #2b2b2b;
          position: relative;
          padding-bottom: 4px;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: #d97706;
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        /* HERO */
        .hero {
          position: relative;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          padding: 4rem 3rem;
          background: #fdf6ee;
        }

        .pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
              rgba(217, 119, 6, 0.12) 1px,
              transparent 1px
            ),
            radial-gradient(
              rgba(217, 119, 6, 0.08) 1px,
              transparent 1px
            );
          background-size: 26px 26px, 64px 64px;
          background-position: 0 0, 30px 30px;
          opacity: 0.45;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          align-self: center;
        }

        .hero h1 {
          font-size: 3.2rem;
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }

        .hero p {
          max-width: 420px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 2rem;
        }

        .hero button {
          padding: 0.9rem 2rem;
          border-radius: 999px;
          border: none;
          background: #2b2b2b;
          color: white;
          cursor: pointer;
        }

        .highlight {
          color: #d97706;
          font-weight: 800;
        }

        .glow {
          text-shadow: 0 0 6px rgba(217, 119, 6, 0.6),
            0 0 18px rgba(217, 119, 6, 0.35);
        }

        /* IMAGE */
        .hero-image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }

        .image-pattern {
          position: absolute;
          width: 420px;
          height: 420px;
          background: radial-gradient(
              circle at 30% 30%,
              #fde68a,
              transparent 60%
            ),
            radial-gradient(
              circle at 70% 70%,
              #facc15,
              transparent 65%
            );
          filter: blur(50px);
          z-index: 0;
        }

        .image {
          width: 320px;
          height: 420px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.18);
          z-index: 1;
        }

        .image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* PRODUCTS */
        .products {
          padding: 5rem 3rem;
        }

        .section-title {
          font-size: 2.6rem;
          text-align: center;
          margin-bottom: 3rem;
          line-height: 1.2;
        }

        .cards {
          display: flex;
          gap: 2rem;
          justify-content: center;
        }

        .card {
          background: #fafafa;
          padding: 2rem;
          border-radius: 20px;
          width: 300px;
          transition: transform 0.4s ease;
        }

        .cards:hover .card {
          transform: translateX(-10px) scale(0.96);
        }

        .cards .card:hover {
          transform: scale(1.05);
          z-index: 2;
        }

        .card-image {
          height: 180px;
          margin-bottom: 1rem;
          overflow: hidden;
          border-radius: 14px;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ABOUT */
        .about {
          padding: 5rem 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          background: #fffaf3;
        }

        .about-title {
          font-size: 2.8rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .about-image img {
          width: 100%;
          border-radius: 24px;
        }

        .social-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .btn {
          padding: 0.8rem 1.6rem;
          border-radius: 999px;
          text-decoration: none;
          color: white;
          font-weight: 600;
        }

        .wa {
          background: #25d366;
        }

        .ig {
          background: #e1306c;
        }

        .footer {
          text-align: center;
          padding: 2rem;
          color: #777;
        }

        @media (max-width: 768px) {
          @media (max-width: 768px) {
  /* GLOBAL PADDING */
  .hero,
  .products,
  .about {
    padding: 3rem 1.5rem;
  }

  /* NAVBAR */
  .nav-links {
    gap: 1.5rem;
    font-size: 0.95rem;
  }

  /* HERO */
  .hero {
    grid-template-columns: 1fr;
    text-align: left;
  }

  .hero h1 {
    font-size: 2.3rem;
    line-height: 1.25;
  }

  .hero p {
    font-size: 0.95rem;
  }

  .hero-image {
    margin-top: 3rem;
  }

  .image {
    width: 260px;
    height: 360px;
  }

  /* PRODUCTS */
  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 340px;
  }

  /* ABOUT */
  .about {
    grid-template-columns: 1fr;
  }

  .about-image {
    display: flex;
    justify-content: center;
  }

  .about-image img {
    width: 90%;
    margin-left: 0;
  }

  .about-title {
    font-size: 2.2rem;
  }
}

      `}</style>
    </>
  );
}
