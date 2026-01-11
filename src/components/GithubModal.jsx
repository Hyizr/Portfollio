import { useEffect, useState } from "react"

export default function GithubModal({ show, onClose }) {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    // Charger les données UNE SEULE FOIS
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error(err))
  }, [])

  if (!show) return null

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Profil GitHub</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body text-center">
              {!profile ? (
                <p>Chargement...</p>
              ) : (
                <>
                  <img
                    src={profile.avatar_url}
                    alt="Avatar GitHub"
                    className="rounded-circle mb-3"
                    width="120"
                  />

                  <h5>{profile.name}</h5>
                  <p className="text-muted">{profile.bio}</p>

                  <p>
                    <strong>Repos publics :</strong>{" "}
                    {profile.public_repos}
                  </p>

                  <p>
                    <strong>Followers :</strong>{" "}
                    {profile.followers}
                  </p>

                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark"
                  >
                    Voir le profil GitHub
                  </a>
                </>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* BACKDROP */}
      <div className="modal-backdrop fade show"></div>
    </>
  )
}
