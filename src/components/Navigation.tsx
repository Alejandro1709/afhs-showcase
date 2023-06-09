import { Link } from "react-router-dom"
import Logo from '../assets/AFHSLOGO.png'

function Navigation() {
  return (
    <header className="flex bg-white h-16 border-b">
      <div className="flex justify-between items-center w-full md:mx-28 mx-6">
        <Link className="flex items-center" to="/">
          <img className='mx-auto w-16' src={Logo} alt="AFHS Logo" draggable={false} />
          <h1 className="text-2xl font-medium">AFHS API</h1>
        </Link>
        <ul className="flex gap-4 relative">
          <li>
            <a href="https://docs.afhsapi.com" target="_blank" rel="noreferrer">Docs</a>
            <span className="bg-red-400/60 text-white p-1 -top-[15px] right-15 rounded-full absolute">Dev</span>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="https://github.com/Alejandro1709/afhs-api" target="_blank" rel="noreferrer">GitHub</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navigation