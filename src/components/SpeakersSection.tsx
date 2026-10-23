import { useState, useRef, useEffect, useCallback } from 'react'
import capitolioPrincipal from '../assets/bg/capitolio-principal.jpg'
import capitolio from '../assets/bg/capitolio.png'
import { ponentes, type Ponente } from '../data/ponentes'
import { SpeakerCard } from './SpeakerCard'

const normalize = (value: string) =>
  value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()

const scoreSuggestion = (p: Ponente, q: string) => {
  const name = normalize(p.name)
  const specialty = normalize(p.specialty)
  const fullName = `${name} ${specialty}`
  const firstName = name.split(' ')[0]

  if (name.startsWith(q)) return 0
  if (firstName.startsWith(q)) return 1
  if (fullName.startsWith(q)) return 2
  if (name.includes(q)) return 3
  if (firstName.includes(q)) return 4
  return 5
}

export function SpeakersSection() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const q = normalize(query)
  const allMatches = q ? ponentes.filter((p) => normalize(`${p.name} ${p.specialty}`).includes(q)) : []
  const suggestions = allMatches
    .map((p) => ({ p, score: scoreSuggestion(p, q) }))
    .sort((a, b) => a.score - b.score || a.p.name.localeCompare(b.p.name))
    .slice(0, 5)
    .map((item) => item.p)
  const results = q
    ? allMatches
        .map((p) => ({ p, score: scoreSuggestion(p, q) }))
        .sort((a, b) => a.score - b.score || a.p.name.localeCompare(b.p.name))
        .map((item) => item.p)
    : ponentes

  useEffect(() => {
    setOpen(suggestions.length > 0 && query.length > 0)
    setHighlighted(-1)
  }, [query, suggestions.length])

  useEffect(() => {
    if (!open || !listRef.current) return
    const item = listRef.current.children[highlighted] as HTMLElement | undefined
    item?.scrollIntoView({ block: 'nearest' })
  }, [highlighted, open])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const selectPonente = useCallback((p: Ponente) => {
    setQuery(p.name)
    setOpen(false)
    inputRef.current?.focus()
    document.getElementById(p.slug)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlighted((prev) => Math.min(prev + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlighted((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && highlighted >= 0) {
      e.preventDefault()
      selectPonente(suggestions[highlighted])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  const highlightMatch = (text: string, q: string) => {
    if (!q) return text
    const idx = normalize(text).indexOf(q)
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <mark className="search__mark">{text.slice(idx, idx + query.length)}</mark>
        {text.slice(idx + query.length)}
      </>
    )
  }

  return (
    <main className="speakers">
      <div className="speakers__bg-top" aria-hidden="true">
        <img src={capitolioPrincipal} alt="" />
      </div>
      <img className="speakers__bg-bottom" src={capitolio} alt="" aria-hidden="true" />

      <div className="speakers__inner">
        <div className="search__wrapper" ref={wrapperRef}>
          <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              ref={inputRef}
              className="search__input"
              type="search"
              placeholder="Buscar ponente"
              aria-label="Buscar ponente"
              aria-expanded={open}
              aria-autocomplete="list"
              aria-controls="search-suggestions"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setOpen(suggestions.length > 0)}
            />
            <button className="search__button" type="submit" aria-label="Buscar">
              <svg viewBox="0 0 512 512" width="16" height="16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                />
              </svg>
            </button>
          </form>
          {open && suggestions.length > 0 && (
            <ul
              id="search-suggestions"
              ref={listRef}
              className="search__suggestions"
              role="listbox"
              aria-label="Sugerencias"
            >
              {suggestions.map((p, i) => (
                <li
                  key={p.slug}
                  className={highlighted === i ? 'search__suggestion is-highlighted' : 'search__suggestion'}
                  role="option"
                  aria-selected={highlighted === i}
                  onMouseEnter={() => setHighlighted(i)}
                  onClick={() => selectPonente(p)}
                >
                  <img className="search__suggestion-photo" src={p.photo} alt="" />
                  <div className="search__suggestion-info">
                    <span className="search__suggestion-name">{highlightMatch(p.name, q)}</span>
                    <span className="search__suggestion-specialty">{highlightMatch(p.specialty, q)}</span>
                  </div>
                  <span className="search__suggestion-arrow" aria-hidden="true">→</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {results.length > 0 ? (
          <div className="speakers__grid">
            {results.map((p) => (
              <SpeakerCard key={p.slug} ponente={p} />
            ))}
          </div>
        ) : (
          <p className="speakers__empty">No se encontraron ponentes para "{query}".</p>
        )}
      </div>
    </main>
  )
}
