
import Link from 'next/link'

export default function Header(){
  return (
    <header className="w-full bg-gradient-to-r from-mnxPurple via-mnxPink to-mnxBlue text-white">
      <div className='container flex items-center justify-between py-4'>
        <div className='flex items-center gap-3'>
          <img src='/logo.png' width='40' height='40' alt='logo'/>
          <strong>MnexGenAI</strong>
        </div>
        <nav className='flex gap-4 text-sm'>
          <Link href='/features'>Features</Link>
          <Link href='/pricing'>Pricing</Link>
          <Link href='/case-study'>Case Study</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact' className='btn btn-primary'>Book Call</Link>
        </nav>
      </div>
    </header>
  )
}
