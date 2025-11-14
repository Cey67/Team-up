import "./DashboardHeader.css";

function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <input className="dash-search" type="text" placeholder="Rechercher..." />
      <div className="user-info">
        <img src="/profil.jpg" alt="Profil" className="user-avatar" />
        <span className="user-name">Cey</span>
      </div>
    </header>
  )
}

export default DashboardHeader;
