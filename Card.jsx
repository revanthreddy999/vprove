import React from 'react'

export default function Card({ title, children, cta }) {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="font-semibold text-lg text-brand-dark">{title}</h3>
      <div className="mt-3 text-gray-700">{children}</div>
      {cta && <div className="mt-4">{cta}</div>}
    </div>
  )
}
