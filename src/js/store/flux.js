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
                const updatedFavorites = store.favorites.filter((_, idx) => idx !== index); // Filtra el elemento con el índice dado
                setStore({ favorites: updatedFavorites });
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
