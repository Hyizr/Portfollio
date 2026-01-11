export default function Portfolio() {
  return (
    <>
      {/* ===== BANNIÈRE ===== */}
      <section
        className="portfolio-hero"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      />

      {/* ===== TITRE ===== */}
      <section className="container text-center my-5">
        <h2 className="fw-bold">Portfolio</h2>
        <p className="text-muted">
          Voici quelques-unes de mes réalisations.
        </p>

        <div className="portfolio-line mx-auto mt-4"></div>
      </section>

      {/* ===== GRILLE ===== */}
      <section className="container mb-5">
        <div className="row g-4">

          {/* CARD 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/portfolio/fresh-food.jpg"
                className="card-img-top"
                alt="Fresh Food"
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">Fresh Food</h5>
                <p className="text-muted mb-2">
                  Site de vente de produits frais en ligne
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Voir le site
                </a>
              </div>
              <div className="card-footer text-center text-muted small">
                Site réalisé avec PHP et MySQL
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/portfolio/restaurant-japonais.jpg"
                className="card-img-top"
                alt="Restaurant japonais"
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">Restaurant Akira</h5>
                <p className="text-muted mb-2">
                  Site de vente de produits frais en ligne
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Voir le site
                </a>
              </div>
              <div className="card-footer text-center text-muted small">
                Site réalisé avec WordPress
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/portfolio/espace-bien-etre.jpg"
                className="card-img-top"
                alt="Espace bien-être"
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">Espace bien-être</h5>
                <p className="text-muted mb-2">
                  Site de vente de produits frais en ligne
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Voir le site
                </a>
              </div>
              <div className="card-footer text-center text-muted small">
                Site réalisé avec Laravel
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/portfolio/seo.jpg"
                className="card-img-top"
                alt="SEO"
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">SEO</h5>
                <p className="text-muted mb-2">
                  Amélioration du référencement d’un site e-commerce
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Voir le site
                </a>
              </div>
              <div className="card-footer text-center text-muted small">
                Utilisation des outils SEO
              </div>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/portfolio/coder.jpg"
                className="card-img-top"
                alt="Création API"
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">Création d'une API</h5>
                <p className="text-muted mb-2">
                  Création d’une API RESTFULL publique
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Voir le site
                </a>
              </div>
              <div className="card-footer text-center text-muted small">
                PHP – Symfony
              </div>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/portfolio/screens.jpg"
                className="card-img-top"
                alt="Maquette site web"
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">Maquette d’un site web</h5>
                <p className="text-muted mb-2">
                  Création du prototype d’un site
                </p>
                <a href="#" className="btn btn-primary btn-sm">
                  Voir le site
                </a>
              </div>
              <div className="card-footer text-center text-muted small">
                Réalisé avec Figma
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
