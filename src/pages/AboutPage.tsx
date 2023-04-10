function AboutPage() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1 className="text-6xl text-left mt-6">Sobre la Aplicación</h1>
      <p className="text-2xl max-w-xl text-center">
        Este es el cliente que te permite obtener información de los personajes de la famosa serie Peruana: &quot;Al Fondo Hay Sitio&quot;.
      </p>
      <p className="text-2xl max-w-xl text-center">
        Programada por: <a className="underline font-medium hover:text-blue-400" href="https://www.instagram.com/alepeusts99" target="_blank" rel="noreferrer">Alejandro La Rosa</a>
      </p>
    </div>
  )
}

export default AboutPage