import Header from '../components/Header.jsx'

export default function Buy() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header />
      <div className="pt-24 px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Buy Flex Display</h1>
          <p className="mt-3 sm:mt-4 text-neutral-400">Pre-order now to reserve your spot in the first production run.</p>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <button className="inline-flex items-center justify-center rounded-full border border-white/20 bg-gradient-to-r from-pink-400 via-fuchsia-500 to-red-500 px-6 py-3 text-sm sm:text-base font-semibold text-black hover:brightness-110 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
              Pre-order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


