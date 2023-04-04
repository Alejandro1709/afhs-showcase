import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCharacter } from "../services/characters";

function DetailPage() {

  const params = useParams();

  const { slug } = params as { slug: string };

  const query = useQuery({ queryKey: ["characters", slug], queryFn: () => getCharacter(slug) });

  return (
    <div>
      <article className="flex flex-col justify-center gap-4 p-4 md:w-[600px] md:mx-auto">
        <header className="flex flex-col bg-white rounded-lg shadow-lg p-4">
          <img src={query.data?.image} alt={query.data?.name} className="rounded-lg w-full bg-cover" draggable="false" />
        </header>
        <section className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">{query.data?.name}</h2>
          <ul className="flex flex-col gap-1">
            <li><strong>Cumpleaños: </strong> {query.data?.birthdate.join(' | ')}</li>
            <li><strong>Trabajo: </strong>{query.data?.work.join(', ')}</li>
            {query.data?.otherWork.length > 0 ? <li><strong>Otros Trabajos: </strong>{query.data?.otherWork.join(', ')}.</li> : null}
            <li><strong>Estado: </strong> {query.data?.status}</li>
            <li><strong>Género: </strong> {query.data?.gender}</li>
            <li><strong>Altura: </strong> {query.data?.height} m</li>
            {query.data?.nicknames.length > 0 ? <li><strong>Apodos: </strong>{query.data?.nicknames.join(', ')}.</li> : null}
            {query.data?.catchphrases.length > 0 ? <li><strong>Frases: </strong>{query.data?.catchphrases.join(', ')}.</li> : null}
            <li><strong>Actor: </strong> {query.data?.actor.join(' | ')}</li>
          </ul>
        </section>
      </article>
    </div>
  )
}

export default DetailPage