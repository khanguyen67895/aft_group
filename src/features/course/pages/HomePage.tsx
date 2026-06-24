import { Button } from '@/components/ui'

export function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-8">

      {/* Hero */}
      <section className="flex flex-col items-start gap-6 max-w-2xl">
        <h1 className="text-h2 text-text-primary">
          Nâng tầm <span className="text-primary">tri thức</span>,<br />
          kết nối cơ hội
        </h1>
        <p className="text-body-lg text-text-secondary">
          AFT Group — nền tảng học tập và hợp tác dành cho các nhà lãnh đạo tương lai.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="gold" size="lg" icon={true}>Kết nối hợp tác</Button>
          <Button variant="light" size="lg" icon={true}>Tìm hiểu ngay</Button>
        </div>
      </section>

      {/* Button showcase */}
      <section className="flex flex-col gap-6">
        <h2 className="text-h5 text-text-secondary">Button variants</h2>

        <div className="flex flex-col gap-4 items-start">
          <Button variant="gold" size="lg" icon={true}>Kết nối hợp tác</Button>
          <Button variant="gold" size="md" icon={true}>Tìm hiểu ngay</Button>

          <div className="flex flex-wrap gap-4 mt-2">
            <Button variant="outline" size="md">Kết nối hợp tác</Button>
            <Button variant="light"   size="md" icon={true}>Xem chi tiết</Button>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <Button variant="gold"    size="sm" icon={true}>Small gold</Button>
            <Button variant="outline" size="sm">Small outline</Button>
            <Button variant="light"   size="sm" icon={true}>Small light</Button>
            <Button variant="ghost"   size="sm">Ghost</Button>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <Button variant="gold" size="md" isLoading>Loading</Button>
            <Button variant="gold" size="md" disabled>Disabled</Button>
            <Button variant="gold" size="md" shimmer={false}>No shimmer</Button>
          </div>
        </div>
      </section>

    </div>
  )
}
