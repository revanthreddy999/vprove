import React from 'react'

export function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#1fb774" opacity="0.15"/>
      <path d="M14 40 L26 20 L31 28 L38 16 L50 40" stroke="#1fb774" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="50" cy="40" r="3" fill="#12694b"/>
    </svg>
  )
}
