import { Link } from "react-router-dom"

function Navigation() {
  return (
    <header className="flex bg-white h-16 border-b">
      <div className="flex justify-between items-center w-full md:mx-28 mx-6">
        <Link to="/">
          <h1 className="text-2xl font-medium">AFHS API</h1>
        </Link>
        <ul className="flex gap-4">
          <li>
            <a href="https://docs.afhsapi.com" target="_blank" rel="noreferrer">Docs</a>
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