import React from 'react'
import Section from '../components/Section.jsx'
import Card from '../components/Card.jsx'

export default function Careers() {
  return (
    <Section title="Careers" subtitle="We hire builders who own outcomes.">
      <div className="grid sm:grid-cols-2 gap-6">
        <Card title="SRE / Cloud Engineer">
          <ul className="list-disc list-inside space-y-1">
            <li>Kubernetes, Terraform, CI/CD, observability</li>
            <li>Public cloud (AWS/Azure/GCP)</li>
          </ul>
        </Card>
        <Card title="AI/GenAI Engineer">
          <ul className="list-disc list-inside space-y-1">
            <li>LLMs, vector DBs, RAG, evaluation</li>
            <li>MLOps, data pipelines</li>
          </ul>
        </Card>
      </div>
    </Section>
  )
}
