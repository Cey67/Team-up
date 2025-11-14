import DashboardHeader from "../../components/DashboardHeader"
import DashboardCard from "../../components/DashboardCard"
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className="dashboard-wrap">
      <DashboardHeader />

      <div className="dashboard-main">
        <h2>Bienvenue sur ton tableau de bord</h2>
        <div className="cards-grid">
          <DashboardCard title="Équipes" value="3" subtitle="Actives" />
          <DashboardCard title="Matchs" value="5" subtitle="Prévu cette semaine" />
          <DashboardCard title="Messages" value="12" subtitle="Non lus" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
