const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            naves: [],
            characters: [], 
            planets: [],
            films: [],
            favorites: [],
        },
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                fetch("https://www.swapi.tech/api/starships")
                    .then(response => response.json())
                    .then(data => setStore({ ...getStore(), naves: data.results }));

                fetch("https://www.swapi.tech/api/people")
                    .then(response => response.json())
                    .then(data => setStore({ ...getStore(), characters: data.results })); 

                fetch("https://www.swapi.tech/api/planets")
                    .then(response => response.json())
                    .then(data => setStore({ ...getStore(), planets: data.results })); 

                fetch("https://www.swapi.tech/api/films")
                    .then(response => response.json())
                    .then(data => setStore({ ...getStore(), films: data.results }));
            },
            
            addToFavorites: (item) => {
                const store = getStore();
                // Verifica si el elemento ya está en la lista de favoritos
                if (!store.favorites.includes(item)) {
                    const favorites = [...store.favorites, item]; // Agrega el nuevo elemento a la lista de favoritos
                    setStore({ favorites: favorites });
                } else {
                    console.log(`${item} ya está en la lista de favoritos.`);
                }
            },
            deleteFavorite: (index) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter((_, idx) => idx !== index); 
                setStore({ favorites: updatedFavorites });
            },
            search: (searchTerm) => {
                const store = getStore();
            
                let filteredCharacters = [];
                let filteredNaves = [];
                let filteredPlanets = [];
                let filteredFilms = [];
            
                if (searchTerm) {
                    filteredCharacters = store.characters.filter(character =>
                        character.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );
            
                    filteredNaves = store.naves.filter(nave =>
                        nave.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );
            
                    filteredPlanets = store.planets.filter(planet =>
                        planet.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                    filteredFilms = store.films.filter(film =>
                        film.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                }
            
                setStore({
                    filteredCharacters: filteredCharacters,
                    filteredNaves: filteredNaves,
                    filteredPlanets: filteredPlanets,
                    filteredFilms: filteredFilms
                });
            },
            
			
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;
