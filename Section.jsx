import React from 'react'

export default function Section({ title, subtitle, children, className = '' }) {
  return (
    <section className={`mb-14 ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">{title}</h2>
        {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      </div>
      <div className="grid gap-6">
        {children}
      </div>
    </section>
  )
}
