import { useState, type CSSProperties } from 'react'
import type { Ponente } from '../data/ponentes'

export function SpeakerCard({ ponente }: { ponente: Ponente }) {
  const { slug, url, name, specialty, photo, crop } = ponente
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      // Sin permiso de portapapeles: no hay nada más que hacer.
    }
  }

  const cropStyle: CSSProperties = {
    width: crop.width,
    height: crop.height,
    left: `calc(50% + ${crop.offsetX}px)`,
  }
  const [top, left, width, height] = crop.img
  const imgStyle: CSSProperties = {
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}%`,
    height: `${height}%`,
  }

  return (
    <article className="card" id={slug}>
      <div className="card__figure">
        <div className="card__crop" style={cropStyle}>
          <div className={crop.flipX ? 'card__crop-inner is-flipped' : 'card__crop-inner'}>
            <img src={photo} alt={name} style={imgStyle} loading="lazy" />
          </div>
        </div>
      </div>
      <div className="card__info">
        <p className="card__tag">PONENTE · GOBERNA</p>
        <h2 className="card__name">{name}</h2>
        <p className="card__specialty">{specialty}</p>
        <hr className="card__divider" />
        <div className="card__actions">
          <a
            className="card__cta"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver perfil de ${name} (se abre en una pestaña nueva)`}
          >
            <span>Ver perfil</span>
            <span className="card__cta-arrow" aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className={copied ? 'card__copy is-copied' : 'card__copy'}
            onClick={handleCopy}
            aria-label={copied ? 'Enlace copiado' : `Copiar enlace de ${name}`}
            title={copied ? 'Enlace copiado' : 'Copiar enlace'}
          >
            <span className="copy-icon" aria-hidden="true">
              <span className="copy-icon__back" />
              <span className="copy-icon__front" />
            </span>
          </button>
        </div>
      </div>
    </article>
  )
}
