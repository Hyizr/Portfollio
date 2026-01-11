import { FaPaintBrush, FaCode, FaSearch } from "react-icons/fa"

export default function Services() {
  return (
    <>
      {/* ===== BANNIÈRE ===== */}
      <section
        className="banner"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      />

      {/* ===== TITRE ===== */}
      <section className="container text-center my-5">
        <h2 className="fw-bold">Mon offre de services</h2>
        <p className="text-muted">
          Voici les prestations sur lesquelles je peux intervenir
        </p>

        <div className="services-line mx-auto mt-4"></div>
      </section>

      {/* ===== CARTES ===== */}
      <section className="container mb-5">
        <div className="row g-4">

          {/* UX DESIGN */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <div className="d-flex justify-content-center mb-3">
                <FaPaintBrush className="services-icon" />
              </div>
              <h5 className="fw-bold mb-3">UX Design</h5>
              <p>
                L'UX Design est une discipline qui consiste à concevoir des
                produits (sites web, applications mobiles, logiciels, objets
                connectés, etc.) en plaçant l'utilisateur au centre des
                préoccupations. L'objectif est de rendre l'expérience utilisateur
                la plus fluide et agréable possible.
              </p>
            </div>
          </div>

          {/* DÉVELOPPEMENT WEB */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <div className="d-flex justify-content-center mb-3">
                <FaCode className="services-icon" />
              </div>
              <h5 className="fw-bold mb-3">Développement web</h5>
              <p>
                Le développement de sites web consiste à créer des sites internet
                en utilisant des langages de programmation (HTML, CSS,
                JavaScript, PHP, etc.) et des frameworks (Bootstrap, React,
                Angular, etc.).
              </p>
            </div>
          </div>

          {/* RÉFÉRENCEMENT */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <div className="d-flex justify-content-center mb-3">
                <FaSearch className="services-icon" />
              </div>
              <h5 className="fw-bold mb-3">Référencement</h5>
              <p>
                Le référencement naturel (SEO) est une technique qui consiste à
                optimiser un site web pour le faire remonter dans les résultats
                des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif
                est d'attirer un maximum de visiteurs qualifiés sur le site.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
