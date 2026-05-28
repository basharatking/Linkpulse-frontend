'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuthStore } from '@/lib/store'
import { MessageCircle, Eye, EyeOff, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

const schema = z.object({
  email:    z.string().email('Invalid email'),
  password: z.string().min(1, 'Password required'),
})
type Form = z.infer<typeof schema>

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false)
  const { login, isLoading } = useAuthStore()
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm<Form>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: Form) => {
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (err: any) {
      toast.error(err?.response?.data?.error || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-xl tracking-tight">
            <div className="w-10 h-10 bg-[#0D0D0D] rounded-[11px] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            LinkPulse
          </Link>
          <p className="text-sm text-muted-foreground mt-2">Welcome back</p>
        </div>

        {/* Card */}
        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
          <h1 className="text-xl font-bold mb-6">Log in to your account</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input
                {...register('email')}
                type="email"
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-[#128C7E]/30 transition-all"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPass ? 'text' : 'password'}
                  placeholder="Your password"
                  className="w-full px-3.5 py-2.5 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-[#128C7E]/30 pr-10 transition-all"
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
              className="w-full py-2.5 bg-[#128C7E] text-white font-semibold rounded-xl hover:bg-[#075E54] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLoading ? 'Logging in...' : 'Log in'}
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-5">
            Don't have an account?{' '}
            <Link href="/register" className="text-[#128C7E] font-semibold hover:underline">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
