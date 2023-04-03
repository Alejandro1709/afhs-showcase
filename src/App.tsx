import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Layout>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personajes/:slug" element={<DetailPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>
    </Layout>
  )
}

export default App
