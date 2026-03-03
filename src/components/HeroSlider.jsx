import { useState, useEffect } from 'react'

const slides = [
  { src: '/images/hero/slide-1.jpeg', alt: 'Proyecto hotelero 1' },
  { src: '/images/hero/slide-2.jpeg', alt: 'Proyecto hotelero 2' },
  { src: '/images/hero/slide-3.jpeg', alt: 'Proyecto hotelero 3' },
  { src: '/images/hero/slide-4.jpeg', alt: 'Proyecto hotelero 4' },
]

const INTERVAL = 6000

export default function HeroSlider({ title, subtitle }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.src})` }}
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}