export function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-h3 text-text-primary">Welcome</h1>
        <p className="text-body-lg text-text-secondary mt-2">
          Continue your learning journey
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: 'Enrolled Courses', value: '0' },
          { label: 'Completed', value: '0' },
          { label: 'Hours Learned', value: '0' },
        ].map(stat => (
          <div
            key={stat.label}
            className="bg-bg-card border border-divider rounded-xl p-5"
          >
            <p className="text-body-sm text-text-secondary">{stat.label}</p>
            <p className="text-h4 text-primary mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
