import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-6xl font-bold text-brand-nearBlack mb-4">404</h1>
      <p className="text-xl text-[#7F7F7F] mb-8">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-brand-orange text-brand-nearBlack rounded-md font-medium hover:opacity-90 transition"
      >
        Go back home
      </Link>
    </div>
  )
}
