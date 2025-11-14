function DashboardCard({ title, value, subtitle }) {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <span>{subtitle}</span>
    </div>
  )
}

export default DashboardCard
