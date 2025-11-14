import './LoginPage.css'
import playerImg from '../../assets/player.jpg'

function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-image">
          <img src={playerImg} alt="player" />
        </div>
        <div className="auth-form">
          <h2>Se connecter</h2>
          <form>
            <label>E-mail</label>
            <input type="email" placeholder="exemple@mail.com" />
            <label>Mot de passe</label>
            <input type="password" placeholder="••••••••" />
            <button type="submit">Se connecter</button>
            <div className="links">
              <a href="/register">Créer un compte</a>
              <a href="#">Mot de passe oublié ?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
