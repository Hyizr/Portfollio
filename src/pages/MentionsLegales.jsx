import {
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe
} from "react-icons/fa"
import { useEffect } from "react"


export default function MentionsLegales() {
  useEffect(() => {
  const meta = document.createElement("meta")
  meta.name = "robots"
  meta.content = "noindex, nofollow"
  document.head.appendChild(meta)

  return () => {
    document.head.removeChild(meta)
  }
}, [])

  return (
    <>
      {/* ===== TITRE ===== */}
      <section className="container text-center my-5">
        <h2 className="fw-bold">Mentions légales</h2>
        <div className="mentions-line mx-auto mt-4"></div>
      </section>

      {/* ===== ACCORDION ===== */}
      <section className="container mb-5">
        <div className="accordion shadow rounded" id="mentionsAccordion">

          {/* ===== ÉDITEUR ===== */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#editeur"
              >
                Éditeur du site
              </button>
            </h2>

            <div
              id="editeur"
              className="accordion-collapse collapse show"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <p className="fw-bold mb-2">
                  <FaUser className="me-2" />
                  John Doe
                </p>

                <p className="mb-1">
                  <FaMapMarkerAlt className="me-2" />
                  40 rue Laure Diebold
                </p>

                <p className="mb-1">
                  <FaMapMarkerAlt className="me-2" />
                  69009 Lyon, France
                </p>

                <p className="mb-1">
                  <FaPhone className="me-2" />
                  10 20 30 40 50
                </p>

                <p className="mb-0">
                  <FaEnvelope className="me-2" />
                  john.doe@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* ===== HÉBERGEUR ===== */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#hebergeur"
              >
                Hébergeur
              </button>
            </h2>

            <div
              id="hebergeur"
              className="accordion-collapse collapse"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <p className="fw-bold mb-2">alwaysdata</p>

                <p className="mb-1">
                  <FaMapMarkerAlt className="me-2" />
                  91 Rue du Faubourg Saint-Honoré
                </p>

                <p className="mb-2">
                  <FaMapMarkerAlt className="me-2" />
                  75008 Paris
                </p>

                <p className="mb-0">
                  <FaGlobe className="me-2" />
                  <a
                    href="https://www.alwaysdata.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.alwaysdata.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* ===== CRÉDITS ===== */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#credits"
              >
                Crédits
              </button>
            </h2>

            <div
              id="credits"
              className="accordion-collapse collapse"
              data-bs-parent="#mentionsAccordion"
            >
              <div className="accordion-body">
                <h5 className="fw-bold mb-3">Crédits</h5>

                <p>
                  Ce site a été réalisé par John Doe, étudiant au{" "}
                  <a href="#" className="text-primary">
                    Centre Européen de formation
                  </a>.
                </p>

                <p>
                  Les images utilisées sur ce site sont libres de droits et ont
                  été obtenues sur le site{" "}
                  <a
                    href="https://pixabay.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pixabay
                  </a>.
                </p>

                <p className="mb-0">
                  La favicon de ce site a été fournie par{" "}
                  <a href="#">
                    John Doe Icons erstellt von Freepik - Flaticon
                  </a>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
