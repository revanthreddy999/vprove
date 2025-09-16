import React from 'react'
import Section from '../components/Section.jsx'

const team = [
  { name: "Revanth Reddy Kurra", role: "CEO" },
  { name: "Bhaskar", role: "Director of Operations" },
  { name: "Raja", role: "Marketing Chief" },
  { name: "Nithin", role: "AI Chief" },
  { name: "Sathish", role: "Android Automation Expert" },
  { name: "Sunny", role: "Auditing Chief" },
  { name: "Jayavardhan", role: "Chief Marketing Officer" },
  { name: "Bharath", role: "Cybersecurity & FedRAMP" },
  { name: "Elysse", role: "CMO" },
]

export default function Team() {
  return (
    <Section title="Team" subtitle="Leaders who ship.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m) => (
          <div key={m.name} className="glass rounded-2xl p-6">
            <div className="h-16 w-16 rounded-full bg-brand/20 flex items-center justify-center font-bold text-brand-dark">{m.name.split(' ').map(w => w[0]).slice(0,2).join('')}</div>
            <div className="mt-3 font-semibold text-brand-dark">{m.name}</div>
            <div className="text-sm text-gray-600">{m.role}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
