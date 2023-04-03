import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DemoDisplay from "./components/DemoDisplay";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Layout>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<DemoDisplay />} />
          <Route path="/personajes/:slug" element={<h1>Helloo</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>
    </Layout>
  )
}

export default App
