import SkillBar from "../components/SkillBar"
import hero from "/hero.jpg"
import about from "/john-doe-about.jpg"
import { useState } from "react"
import GithubModal from "../components/GithubModal"



export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="d-flex align-items-center text-white"
        style={{
          minHeight: "100vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold">
              Bonjour, je suis John Doe
          </h1>

          <h2 className="display-6 fw-semibold mt-3">
              Développeur web full stack
          </h2>

          <button
            className="btn btn-danger btn-lg mt-3"
            onClick={() => setShowModal(true)}
          >
            En savoir plus
        </button>

        </div>
      </section>

      {/* ================= ABOUT + SKILLS ================= */}
      <section id="about" className="container my-5">
        <div className="row bg-white shadow rounded p-4 align-items-start">



          {/* ---- A PROPOS ---- */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="mb-2">À propos</h3>
            <div className="section-line mb-4"></div>



            <img
              src={about}
              alt="À propos"
              className="img-fluid rounded mb-3"
            />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Optio, necessitatibus consectetur tempore perferendis nostrum,
              ex delectus reiciendis impedit aut iure enim placeat?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Optio, necessitatibus consectetur tempore perferendis nostrum.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* ---- COMPETENCES ---- */}
          <div className="col-md-6 d-flex flex-column">

            <h3 className="mb-2">Mes compétences</h3>
            <div className="section-line mb-4"></div>



            <SkillBar name="HTML5" percent={90} color="danger" />
            <SkillBar name="CSS3" percent={80} color="info" />
            <SkillBar name="JavaScript" percent={70} color="warning" />
            <SkillBar name="PHP" percent={60} color="success" />
            <SkillBar name="React" percent={50} color="primary" />
          </div>

        </div>
      </section>
    
    <GithubModal
      show={showModal}
      onClose={() => setShowModal(false)}
    />

    </>
  )
}
