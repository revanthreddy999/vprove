import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Logo } from './components/Logo.jsx'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl transition hover:bg-brand/10 ${isActive ? 'text-brand-dark' : 'text-gray-700'}`
    }
  >
    {children}
  </NavLink>
)

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-light to-white">
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="leading-tight">
              <div className="font-extrabold text-xl text-brand-dark tracking-tight">Wipu</div>
              <div className="text-xs text-gray-500 -mt-0.5">We Prove Your Vision</div>
            </div>
          </div>
          <nav className="flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/team">Team</NavItem>
            <NavItem to="/careers">Careers</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <Outlet />
      </main>
      <footer className="border-t border-brand/10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Wipu (Vprove Solutions). All rights reserved.</p>
          <div className="text-sm text-gray-600">Built with React + Tailwind</div>
        </div>
      </footer>
    </div>
  )
}
