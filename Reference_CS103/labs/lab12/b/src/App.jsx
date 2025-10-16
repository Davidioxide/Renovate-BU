import useSWR from "swr";


function App() {

    const {data, error} = useSWR("https://rickandmortyapi.com/api/character",
        (url) => fetch(url).then(res => res.json())
    );

    if(error) return <p>{error.message}</p>;
    if(!data) return <p>Loading........</p>;
    return (
        <>
            {
                data.results.map((character) => (
                    <div key={character.id}>
                        <img src={character.image} alt={character.name}/>
                        <h1>{character.name}</h1>
                        <h2>{character.status}</h2>
                        <h2>{character.species}</h2>
                        <h2>{character.type}</h2>
                    </div>
                ))
            }
        </>
    )
}

export default App
