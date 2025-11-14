import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <aside className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="logo">
        <img src={logo} alt="TeamUp logo" className="logo-img" />
      </div>

      <nav className="nav-links">
        <Link to="/dashboard">Accueil</Link>
        <Link to="/team">Effectif</Link>
        <Link to="/stats">Statistiques</Link>
        <Link to="/attendance">Présences</Link>
        <Link to="/messages">Messagerie</Link>
        <Link to="/settings">Paramètre</Link>
        <Link to="/profile">Profil</Link>
      </nav>

      <div className="auth-buttons">
        <Link to="/login" className="login-btn">
          Connexion
        </Link>
        <Link to="/register" className="register-btn">
          Inscription
        </Link>
      </div>
    </aside>
  );
}

export default Navbar;
