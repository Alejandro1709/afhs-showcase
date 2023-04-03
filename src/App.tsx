import Layout from "./components/Layout";
import DemoDisplay from "./components/DemoDisplay";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Layout>
      <Navigation />
      <main>
        <DemoDisplay />
      </main>
    </Layout>
  )
}

export default App
