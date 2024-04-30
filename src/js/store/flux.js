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
            heartIconColor: "white" // Agregar estado para el color del corazón
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
                if (!store.favorites.some(favorite => favorite.uid === item.uid && favorite.type === item.type)) {
                    const favorites = [...store.favorites, item]; // Agrega el nuevo elemento a la lista de favoritos
                    setStore({ favorites: favorites });
                } else {
                    console.log(`${item.name} ya está en la lista de favoritos.`);
                }
            },
deleteFavorite: (uid, type) => {
    const store = getStore();
    const updatedFavorites = store.favorites.filter(favorite => !(favorite.uid === uid && favorite.type === type));
    setStore({ favorites: updatedFavorites });
},
            updateHeartIconColor: (color) => { // Método para actualizar el color del corazón
                setStore({ heartIconColor: color });
            },
            search: (searchTerm) => {
                const store = getStore();
                // Resto del código de búsqueda
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
