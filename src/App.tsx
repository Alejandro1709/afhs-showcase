import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import AboutPage from "./pages/AboutPage";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
  const { isModalOpen } = useModal()
  return (
    <Layout>
      {isModalOpen ? <Modal /> : null}
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nuevo-personaje" element={<AddPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/personajes/:slug" element={<DetailPage />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </main>
      <footer className="flex justify-center items-center p-2 md:p-4">
        <p>AFHS API. Todos los datos / imagenes fueron obtenidos de esta <a className="underline font-medium hover:text-blue-400" href='https://alfondohaysitio.fandom.com/es/wiki/AFHS_Wiki' target='_blank' rel="noreferrer">WIKI</a>.</p>
      </footer>
    </Layout>
  )
}

export default App
