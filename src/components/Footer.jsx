import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row">

          {/* ===== COL 1 ===== */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">John Doe</h5>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-2">john.doe@gmail.com</p>

            {/* ICONES ICI */}
            <div className="d-flex gap-3 fs-5">
              <div className="d-flex gap-3 fs-5">
                 <a href="#" className="footer-icon"><FaGithub /></a>
                 <a href="#" className="footer-icon"><FaTwitter /></a>
                 <a href="#" className="footer-icon"><FaLinkedin /></a>
              </div>

            </div>
          </div>

          {/* ===== COL 2 ===== */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Liens utiles</h5>
            <ul className="list-unstyled">
              <li>Accueil</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Me contacter</li>
              <li>Mentions légales</li>
            </ul>
          </div>

          {/* ===== COL 3 ===== */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquette d'un site</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}
