function Navigation() {
  return (
    <header className="flex bg-white h-16 border-b">
      <div className="flex justify-between items-center w-full mx-6">
        <h1 className="text-2xl font-medium">AFHS API</h1>
        <ul className="flex gap-4">
          <li>Docs</li>
          <li>About</li>
          <li>GitHub</li>
        </ul>
      </div>
    </header>
  )
}

export default Navigation