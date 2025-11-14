import './RegisterPage.css'
import playerImg from '../../assets/player.jpg'

function RegisterPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="register-form">
          <h2>S’inscrire</h2>
          <form>
            <label>Nom d'utilisateur</label>
            <input type="text" placeholder="Votre pseudo" />
            <label>E-mail</label>
            <input type="email" placeholder="exemple@mail.com" />
            <label>Mot de passe</label>
            <input type="password" placeholder="••••••••" />
            <button type="submit">S’inscrire</button>
            <div className="links">
              <a href="/login">Vous avez déjà un compte ?</a>
            </div>
          </form>
        </div>

        <div className="register-image">
          <img src={playerImg} alt="player" />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
