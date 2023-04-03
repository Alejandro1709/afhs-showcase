import { useEffect, useState } from "react"
import { getCharacters } from "./services/characters"
import Layout from "./components/Layout";

function App() {
  const [data, setData] = useState([])
  const [state, setState] = useState("idle");
  const [error, setError] = useState(null)

  useEffect(() => {
    setState("pending")
    getCharacters().then((res) => {
      setData(res)
      setState("resolved")
    }).catch((err) => {
      setError(err)
      setState("rejected")
    })
  }, [])

  return (
    <Layout>
      {state === "pending" && <p>Loading...</p>}
      {state === 'rejected' && <p>{error}</p>}
      {state === 'resolved' && <p>Resolved</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </Layout>
  )
}

export default App
