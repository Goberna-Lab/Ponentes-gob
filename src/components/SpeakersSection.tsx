import { useState } from 'react'
import capitolioPrincipal from '../assets/bg/capitolio-principal.jpg'
import capitolio from '../assets/bg/capitolio.png'
import { ponentes } from '../data/ponentes'
import { SpeakerCard } from './SpeakerCard'

const normalize = (value: string) =>
  value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()

export function SpeakersSection() {
  const [query, setQuery] = useState('')
  const q = normalize(query)
  const results = q
    ? ponentes.filter((p) => normalize(`${p.name} ${p.specialty}`).includes(q))
    : ponentes

  return (
    <main className="speakers">
      <div className="speakers__bg-top" aria-hidden="true">
        <img src={capitolioPrincipal} alt="" />
      </div>
      <img className="speakers__bg-bottom" src={capitolio} alt="" aria-hidden="true" />

      <div className="speakers__inner">
        <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            className="search__input"
            type="search"
            placeholder="Buscar ponente"
            aria-label="Buscar ponente"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search__button" type="submit" aria-label="Buscar">
            {/* Font Awesome 5 Free · solid · search (U+F002) */}
            <svg viewBox="0 0 512 512" width="16" height="16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              />
            </svg>
          </button>
        </form>

        {results.length > 0 ? (
          <div className="speakers__grid">
            {results.map((p) => (
              <SpeakerCard key={p.slug} ponente={p} />
            ))}
          </div>
        ) : (
          <p className="speakers__empty">No se encontraron ponentes para “{query}”.</p>
        )}
      </div>
    </main>
  )
}
