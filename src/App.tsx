import Layout from "./components/Layout";
import DemoDisplay from "./components/DemoDisplay";

function App() {
  return (
    <Layout>
      <header>
        <h1 className="text-4xl font-bold text-center">React Query Demo</h1>
      </header>
      <DemoDisplay />
    </Layout>
  )
}

export default App
