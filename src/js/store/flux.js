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
            species: [],
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

                fetch("https://www.swapi.tech/api/species")
                    .then(response => response.json())
                    .then(data => setStore({ ...getStore(), species: data.results }));
            },
            
            addToFavorites: (item) => {
                const store = getStore();
                // Verifica si el elemento ya está en la lista de favoritos
                if (!store.favorites.some(favorite => favorite.uid === item.uid)) {
                    const favorites = [...store.favorites, item]; // Agrega el nuevo elemento a la lista de favoritos
                    setStore({ favorites: favorites });
                } else {
                    console.log(`${item.name} ya está en la lista de favoritos.`);
                }
            },
            deleteFavorite: (uid) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(favorite => favorite.uid !== uid);
                setStore({ favorites: updatedFavorites });
            },
            
            search: (searchTerm) => {
                const store = getStore();
            
                let filteredCharacters = [];
                let filteredNaves = [];
                let filteredPlanets = [];
                let filteredSpecies = [];
            
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
                    filteredSpecies = store.species.filter(specie =>
                        specie.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                }
            
                setStore({
                    filteredCharacters: filteredCharacters,
                    filteredNaves: filteredNaves,
                    filteredPlanets: filteredPlanets,
                    filteredSpecies: filteredSpecies
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
