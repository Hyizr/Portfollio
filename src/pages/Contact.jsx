export default function Contact() {
  return (
    <>
      {/* ===== TITRE ===== */}
      <section className="container text-center my-5">
        <h2 className="fw-bold">Contact</h2>
        <p className="text-muted">
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>

        <div className="contact-line mx-auto mt-4"></div>
      </section>

      {/* ===== FORMULAIRE + COORDONNÉES ===== */}
      <section className="container mb-5">
        <div className="row bg-white shadow rounded p-4">

          {/* FORMULAIRE */}
          <div className="col-md-6">
            <h4 className="mb-2">Formulaire de contact</h4>
            <div className="section-line mb-4"></div>

            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre nom"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre adresse email"
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sujet"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>
            </form>
          </div>

          {/* COORDONNÉES */}
          <div className="col-md-6">
            <h4 className="mb-2">Mes coordonnées</h4>
            <div className="section-line mb-4"></div>

            <p className="mb-1 fw-semibold">John Doe</p>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">john.doe@gmail.com</p>

            {/* GOOGLE MAPS */}
            <div className="ratio ratio-4x3">
              <iframe
                src="https://www.google.com/maps?q=40%20rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
