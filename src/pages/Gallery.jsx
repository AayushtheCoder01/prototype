import Header from '../components/Header.jsx'

export default function Gallery() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header />
      <div className="pt-24 px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-500 to-red-500">Gallery</span>
          </h1>
          <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="aspect-video rounded-xl border border-white/10 bg-white/5" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


