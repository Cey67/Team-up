import './LandingPage.css'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="landing container">
      <section className="hero">
        <div className="hero-content">
          <h1>Créer, rejoins et gagne !</h1>
          <p>
            Team Up t’aide à trouver et organiser ton équipe pour des tournois, projets ou événements.
          </p>
          <Link to="/register" className="cta-btn">Découvrir l’application</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>🎯 Objectif commun</h2>
          <p>Unifie les joueurs et développeurs autour d’une même passion.</p>
        </div>
        <div className="feature">
          <h2>🤝 Collaboration</h2>
          <p>Organise facilement ton équipe, tes rôles et tes disponibilités.</p>
        </div>
        <div className="feature">
          <h2>🔥 Compétition</h2>
          <p>Rejoins des matchs, des compétitions ou des tournois.</p>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
