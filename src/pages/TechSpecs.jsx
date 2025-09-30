import Header from '../components/Header.jsx'

export default function TechSpecs() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header />
      <div className="pt-24 px-5 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-500 to-red-500">Tech Specs</span>
          </h1>
          <ul className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-neutral-300 text-sm">
            <li className="rounded-lg border border-white/10 bg-white/5 p-4">Flexible optic engine, low-power</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-4">Surface adhesion: glass, wall, metal</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-4">On-device privacy processing</li>
            <li className="rounded-lg border border-white/10 bg-white/5 p-4">Touch-ready projection layer</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


