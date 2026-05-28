'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuthStore } from '@/lib/store'
import { MessageCircle, Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'
import { apiGet } from '@/lib/api'
import { useDebounce } from '@/hooks/useDebounce'

const schema = z.object({
  name:     z.string().min(2, 'Name must be at least 2 characters'),
  username: z.string().min(3, 'Min 3 chars').max(30).regex(/^[a-z0-9_-]+$/, 'Lowercase letters, numbers, - and _ only'),
  email:    z.string().email('Invalid email'),
  password: z.string().min(8, 'Minimum 8 characters'),
})
type Form = z.infer<typeof schema>

export default function RegisterPage() {
  const [showPass, setShowPass]       = useState(false)
  const [usernameOk, setUsernameOk]   = useState<boolean | null>(null)
  const { register: registerUser, isLoading } = useAuthStore()
  const router = useRouter()

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Form>({
    resolver: zodResolver(schema),
  })

  const username = watch('username')

  // Debounced username check
  useDebounce(async () => {
    if (!username || username.length < 3) return setUsernameOk(null)
    try {
      const res = await apiGet<{ data: { available: boolean } }>(`/auth/check/${username}`)
      setUsernameOk(res.data.available)
    } catch { setUsernameOk(null) }
  }, 600, [username])

  const onSubmit = async (data: Form) => {
    if (usernameOk === false) return toast.error('Username already taken')
    try {
      await registerUser(data.name, data.email, data.password, data.username)
      router.push('/dashboard')
    } catch (err: any) {
      toast.error(err?.response?.data?.error || 'Registration failed')
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 bg-[#0D0D0D] rounded-[11px] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            LinkPulse
          </Link>
          <p className="text-sm text-muted-foreground mt-2">Create your free account</p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
          <h1 className="text-xl font-bold mb-6">Get started for free</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name</label>
              <input
                {...register('name')}
                placeholder="Sara Khan"
                className="w-full px-3.5 py-2.5 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-[#128C7E]/30"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Username</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  linkpulse.io/
                </span>
                <input
                  {...register('username')}
                  placeholder="sara"
                  className="w-full pl-[106px] pr-9 py-2.5 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-[#128C7E]/30"
                />
                {usernameOk !== null && (
                  <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold ${usernameOk ? 'text-green-600' : 'text-red-500'}`}>
                    {usernameOk ? <CheckCircle className="w-4 h-4" /> : '✗'}
                  </span>
                )}
              </div>
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
              {usernameOk === false && <p className="text-red-500 text-xs mt-1">Username taken</p>}
              {usernameOk === true  && <p className="text-green-600 text-xs mt-1">Username available!</p>}
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input
                {...register('email')}
                type="email"
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-[#128C7E]/30"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPass ? 'text' : 'password'}
                  placeholder="Min 8 characters"
                  className="w-full px-3.5 py-2.5 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-[#128C7E]/30 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-[#128C7E] text-white font-semibold rounded-xl hover:bg-[#075E54] transition-colors disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLoading ? 'Creating account...' : 'Create free account'}
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-5">
            Already have an account?{' '}
            <Link href="/login" className="text-[#128C7E] font-semibold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
