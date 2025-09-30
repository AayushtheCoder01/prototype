import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const linkBase =
  "inline-flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-white/100"

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="mt-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 pl-5 py-2">
              <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-red-500" />
                <span className="text-sm sm:text-base font-semibold tracking-tight text-white/90">Flex Display</span>
              </Link>
            </div>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 sm:gap-2 pr-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? 'text-white underline underline-offset-8 decoration-white/60' : 'text-white/70'}`
                }
              >
                Overview
              </NavLink>
              <NavLink
                to="/tech-specs"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? 'text-white underline underline-offset-8 decoration-white/60' : 'text-white/70'}`
                }
              >
                Tech Specs
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? 'text-white underline underline-offset-8 decoration-white/60' : 'text-white/70'}`
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/buy"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? 'text-white' : 'text-white/90'} rounded-full border border-white/20 bg-white/10 hover:bg-white/15 ml-1 px-4 py-2`
                }
              >
                Buy
              </NavLink>
            </div>
            {/* Mobile toggle */}
            <div className="md:hidden pr-2">
              <button
                aria-label="Toggle navigation"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 ${open ? 'hidden' : 'block'}`}>
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeWidth="1.5" stroke="currentColor"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 ${open ? 'block' : 'hidden'}`}>
                  <path d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile panel */}
          <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${open ? 'max-h-96' : 'max-h-0'}`}>
            <div className="px-4 pb-4">
              <div className="mt-2 grid gap-1 rounded-2xl border border-white/10 bg-white/5 p-2">
                <NavLink to="/" end onClick={() => setOpen(false)} className={({ isActive }) => `${linkBase} ${isActive ? 'text-white' : 'text-white/80'}`}>
                  Overview
                </NavLink>
                <NavLink to="/tech-specs" onClick={() => setOpen(false)} className={({ isActive }) => `${linkBase} ${isActive ? 'text-white' : 'text-white/80'}`}>
                  Tech Specs
                </NavLink>
                <NavLink to="/gallery" onClick={() => setOpen(false)} className={({ isActive }) => `${linkBase} ${isActive ? 'text-white' : 'text-white/80'}`}>
                  Gallery
                </NavLink>
                <NavLink to="/buy" onClick={() => setOpen(false)} className={({ isActive }) => `${linkBase} ${isActive ? 'text-white' : 'text-white/90'} rounded-xl border border-white/20 bg-white/10 px-4 py-2`}>
                  Buy
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}


