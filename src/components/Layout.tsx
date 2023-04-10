function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden">
      {children}
    </div>
  )
}

export default Layout