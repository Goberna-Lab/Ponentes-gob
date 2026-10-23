import { useRef, useState, type CSSProperties } from 'react'
import type { Ponente } from '../data/ponentes'

export function SpeakerCard({ ponente }: { ponente: Ponente }) {
  const { slug, url, name, specialty, photo, crop } = ponente
  const [copied, setCopied] = useState(false)
  const [active, setActive] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openPreview = () => {
    dialogRef.current?.showModal()
    setActive(true)
  }
  const closePreview = () => dialogRef.current?.close()

  const handleCopy = async () => {
    if (!(await copyText(url))) return
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
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
      {/* El clic abre la foto ampliada; el perfil se abre con el botón. */}
      <div
        className={active ? 'card__figure is-active' : 'card__figure'}
        onClick={openPreview}
        role="button"
        tabIndex={0}
        aria-label={`Ver foto de ${name}`}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            openPreview()
          }
        }}
      >
        <div className="card__crop" style={cropStyle}>
          <div className={crop.flipX ? 'card__crop-inner is-flipped' : 'card__crop-inner'}>
            <img src={photo} alt={name} style={imgStyle} loading="lazy" />
          </div>
        </div>
        <span className="card__figure-overlay" aria-hidden="true" />
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
            <span className="check-icon" aria-hidden="true" />
            <span className="card__copy-tip" role="status">
              {copied ? '¡Link copiado!' : ''}
            </span>
          </button>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="preview"
        aria-label={name}
        onClose={() => setActive(false)}
        // Cualquier clic (en la foto o fuera) la cierra; Esc también.
        onClick={closePreview}
      >
        {/* Mismo recorte que la tarjeta (330×440), ampliado con CSS. */}
        <div className="preview__photo">
          <div className="preview__figure">
            <div className="card__crop" style={cropStyle}>
              <div className={crop.flipX ? 'card__crop-inner is-flipped' : 'card__crop-inner'}>
                <img src={photo} alt={name} style={imgStyle} />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </article>
  )
}

/** Copia al portapapeles; los navegadores internos (WhatsApp, Instagram) a veces no tienen la API. */
async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const ok = document.execCommand('copy')
    textarea.remove()
    return ok
  }
}
