import React from 'react'
import Hero from '../components/Hero.jsx'
import Section from '../components/Section.jsx'
import Card from '../components/Card.jsx'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <Section title="What we do" subtitle="Solutions that move the needle in weeks, not months.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "AI & GenAI", d: "Chatbots, RAG search, content automation, vision, and MLOps pipelines."},
            { t: "Cloud Engineering", d: "AWS, Azure, GCP. Kubernetes, Terraform, CI/CD, observability, security."},
            { t: "Android Services", d: "AOSP builds, app development, automation, Play releases."},
            { t: "Java Full‑stack", d: "Spring Boot, microservices, REST/GraphQL, React SPA, testing."},
            { t: "SEO / SEM", d: "Technical SEO, content strategy, PPC optimization for ROI."},
            { t: "Recruiting", d: "Hands‑on screening for niche roles. Faster time‑to‑hire."},
          ].map(({t, d}) => (
            <Card key={t} title={t} cta={<NavLink to="/services" className="text-brand font-semibold">Learn more →</NavLink>}>
              {d}
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Why Wipu?" subtitle="Senior engineers. Battle‑tested playbooks. Transparent execution.">
        <div className="grid sm:grid-cols-2 gap-6">
          <Card title="Speed & Quality">Small, senior teams that ship production‑ready work quickly.</Card>
          <Card title="Cloud‑native by default">IaC, GitOps, containers, and managed services where it counts.</Card>
          <Card title="Search growth">Organic traffic via technical SEO and content—measurable results.</Card>
          <Card title="Hiring that works">We place engineers we’d hire ourselves.</Card>
        </div>
      </Section>
    </div>
  )
}
