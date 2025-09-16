import React, { useState } from 'react'
import Section from '../components/Section.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    alert('Thanks! This demo form just logs in console. Replace with your backend / form tool.')
    console.log(form)
  }

  return (
    <Section title="Contact" subtitle="Let’s scope your project.">
      <form onSubmit={onSubmit} className="glass rounded-2xl p-6 grid gap-4 max-w-xl">
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={onChange}
          className="px-4 py-3 rounded-xl border border-brand/20 focus:outline-none focus:ring-2 focus:ring-brand/30"
          required
        />
        <input
          name="email"
          placeholder="you@example.com"
          type="email"
          value={form.email}
          onChange={onChange}
          className="px-4 py-3 rounded-xl border border-brand/20 focus:outline-none focus:ring-2 focus:ring-brand/30"
          required
        />
        <textarea
          name="message"
          placeholder="Tell us a bit about your goals…"
          value={form.message}
          onChange={onChange}
          rows={5}
          className="px-4 py-3 rounded-xl border border-brand/20 focus:outline-none focus:ring-2 focus:ring-brand/30"
          required
        />
        <button className="px-5 py-3 rounded-xl bg-brand text-white font-semibold hover:opacity-90" type="submit">
          Send message
        </button>
      </form>
    </Section>
  )
}
