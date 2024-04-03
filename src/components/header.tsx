import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header() {
  return (
    <div className='flex items-center gap-5'>
      <img src={nlwUniteIcon} />
      <nav className='flex items-center gap-5'>
        <a href="">Eventos</a>
        <a href="">Participantes</a>
      </nav>
    </div>
  )
}