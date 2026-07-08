import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '@/components/ui'
import { ROUTES } from '@/constants'
import { useAdminAuthStore } from '@/stores/adminAuth.store'

export function AdminLoginPage() {
  const navigate = useNavigate()
  const login = useAdminAuthStore(state => state.login)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await login(email, password)
      navigate(ROUTES.HOME)
    } catch {
      setError('Email hoặc mật khẩu không đúng.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-bg">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-divider bg-bg-card p-8 flex flex-col gap-5"
      >
        <h1 className="text-2xl font-bold text-text-primary font-[Playfair_Display]">Đăng nhập quản trị</h1>

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
          autoFocus
          required
        />
        <Input
          label="Mật khẩu"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        {error && <p className="text-caption text-red-400">{error}</p>}

        <Button type="submit" variant="gold" size="md" isLoading={loading} fullWidth>
          Đăng nhập
        </Button>
      </form>
    </div>
  )
}
