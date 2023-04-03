import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCharacters } from "./services/characters"
import Layout from "./components/Layout";

function App() {

  const queryClient = useQueryClient()

  const query = useQuery({ queryKey: ["characters"], queryFn: getCharacters })

  return (
    <Layout>
      {query.isLoading && <p>Loading...</p>}
      {query?.data && <p>{JSON.stringify(query?.data)}</p>}
    </Layout>
  )
}

export default App
