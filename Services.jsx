import React from 'react'
import Section from '../components/Section.jsx'
import Card from '../components/Card.jsx'

const services = [
  { t: "AI & GenAI", points: ["Chatbots & assistants", "RAG search & vector DBs", "Document & image automation", "MLOps & evaluation"] },
  { t: "Cloud Engineering", points: ["Kubernetes (EKS/GKE/OpenShift)", "Terraform & IaC", "Observability (Prometheus/Grafana)", "Security & compliance (PCI, SOC2, HIPAA)"] },
  { t: "Android Services", points: ["AOSP builds", "Automation & testing", "Play Store releases", "Performance & analytics"] },
  { t: "Java Full‑stack", points: ["Spring Boot microservices", "APIs (REST/GraphQL)", "React frontends", "Testing & CI/CD"] },
  { t: "Digital Marketing (SEO/SEM)", points: ["Technical SEO audits", "Content mapping", "Keyword strategy", "PPC optimization"] },
  { t: "Recruiting", points: ["Role scoping", "Sourcing & screening", "Tech interviews", "Offer & onboarding"] },
]

export default function Services() {
  return (
    <div>
      <Section title="Services" subtitle="Pick a lane or bundle. We tailor to outcomes.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <Card key={s.t} title={s.t}>
              <ul className="list-disc list-inside space-y-1">
                {s.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}
