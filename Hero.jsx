import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-white to-brand-light shadow-soft">
      <div className="grid sm:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-brand-dark">
            Build faster with AI, Cloud, and Modern Engineering
          </h1>
          <p className="mt-4 text-gray-700">
            We’re a hybrid recruiting + services firm. From AI/GenAI and Cloud to Android and Java full‑stack, we design, build, and scale.
            Our SEO/SEM team drives the right users to your product.
          </p>
          <div className="mt-6 flex gap-3">
            <NavLink to="/services" className="px-5 py-3 rounded-xl bg-brand text-white font-semibold hover:opacity-90">
              Explore Services
            </NavLink>
            <NavLink to="/contact" className="px-5 py-3 rounded-xl border border-brand text-brand font-semibold hover:bg-brand/10">
              Get in Touch
            </NavLink>
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <ul className="grid grid-cols-2 gap-3 text-sm">
            <li className="p-3 rounded-xl bg-white/70">AI & GenAI</li>
            <li className="p-3 rounded-xl bg-white/70">Cloud Computing</li>
            <li className="p-3 rounded-xl bg-white/70">Android Services</li>
            <li className="p-3 rounded-xl bg-white/70">Java Full‑stack</li>
            <li className="p-3 rounded-xl bg-white/70">Digital Marketing (SEO/SEM)</li>
            <li className="p-3 rounded-xl bg-white/70">Recruiting</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
