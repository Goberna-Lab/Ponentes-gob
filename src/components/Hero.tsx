import heroBg from '../assets/hero/hero-bg.png'
import capitolioHero from '../assets/hero/capitolio-hero.png'
import logoGoberna from '../assets/hero/logo-goberna.png'

export function Hero() {
  return (
    <header className="hero">
      <img className="hero__bg" src={heroBg} alt="" />
      <img className="hero__capitolio" src={capitolioHero} alt="" />
      <div className="hero__content">
        <img className="hero__logo" src={logoGoberna} width={184} height={47} alt="Goberna" />
        <h1 className="hero__title">
          El conocimiento detrás
          <br />
          de las <span className="hero__title-accent">GRANDES DECISIONES</span>
        </h1>
      </div>
    </header>
  )
}
