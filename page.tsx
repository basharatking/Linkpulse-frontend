import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: '#FAFAF8', fontFamily: 'system-ui, sans-serif' }}>
      {/* Topbar */}
      <div style={{ background: '#1DAA61', color: 'white', textAlign: 'center', padding: '10px 20px', fontSize: '13px', fontWeight: 500 }}>
        ✦ Introducing the <strong>WhatsApp Seen System</strong> — Track every click, open &amp; reply in real-time
      </div>

      {/* Nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(250,250,248,.94)', backdropFilter: 'blur(20px)', borderBottom: '1px solid #E5E5E3', padding: '0 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 18 }}>
            <div style={{ width: 32, height: 32, background: '#0D0D0D', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/></svg>
            </div>
            LinkPulse
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Link href="/login" style={{ padding: '8px 18px', border: '1px solid #E5E5E3', borderRadius: 8, fontSize: 14, fontWeight: 500, color: '#555', textDecoration: 'none', background: 'white' }}>
              Log in
            </Link>
            <Link href="/register" style={{ padding: '8px 20px', background: '#128C7E', color: 'white', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
              Get started free →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 32px 80px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#DCF8C6', border: '1px solid rgba(37,211,102,.3)', color: '#128C7E', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100, marginBottom: 28 }}>
          <span style={{ width: 6, height: 6, background: '#25D366', borderRadius: '50%', display: 'inline-block' }} />
          WhatsApp-First Creator Platform
        </div>
        <h1 style={{ fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px', color: '#0D0D0D', marginBottom: 26 }}>
          One link. <span style={{ color: '#128C7E' }}>Full business</span><br />in your bio.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.72, color: '#555', maxWidth: 560, margin: '0 auto 40px' }}>
          The only bio link platform built around WhatsApp. Track who opens your chat, sell products, collect leads, and automate your customer flow.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 15, fontWeight: 600, color: 'white', background: '#128C7E', padding: '13px 26px', borderRadius: 12, textDecoration: 'none' }}>
            Create your free link →
          </Link>
          <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 15, fontWeight: 500, color: '#0D0D0D', background: 'white', border: '1.5px solid #DDDDD9', padding: '13px 26px', borderRadius: 12, textDecoration: 'none' }}>
            See live demo ↗
          </Link>
        </div>

        {/* Proof stats */}
        <div style={{ display: 'flex', gap: 40, justifyContent: 'center', marginTop: 52, paddingTop: 40, borderTop: '1px solid #E5E5E3', flexWrap: 'wrap' }}>
          {[['28k+', 'Active creators'], ['1.4M', 'Monthly visitors'], ['112k', 'WA leads captured']].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#0D0D0D', letterSpacing: '-0.5px' }}>{num}</div>
              <div style={{ fontSize: 13, color: '#777' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px 80px' }}>
        <div style={{ background: '#0D0D0D', borderRadius: 28, padding: '80px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: 'white', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 18 }}>
            Your bio link should<br /><span style={{ color: '#25D366' }}>work harder.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.5)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Join 28,000+ creators and businesses who use LinkPulse to turn profile visitors into real WhatsApp customers.
          </p>
          <Link href="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 15, fontWeight: 600, color: 'white', background: '#128C7E', padding: '14px 28px', borderRadius: 12, textDecoration: 'none' }}>
            Create your free link →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: '#0D0D0D', padding: '48px 32px 32px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,.25)' }}>© 2025 LinkPulse · Built for creators worldwide</p>
      </footer>
    </div>
  )
}
