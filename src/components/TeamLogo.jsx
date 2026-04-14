import React from 'react'

export default function TeamLogo({ src, alt, size = '32px' }) {
  return <img src={src} alt={alt} style={{ width: size, height: 'auto' }} />
}
