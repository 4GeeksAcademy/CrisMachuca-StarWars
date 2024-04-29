import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Naves } from "../component/naves";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Species } from "../component/species";
import { Search } from "../component/search";
import CarouselComponent from "../component/CarouselComponent";
import BackToTopButton from "../component/indexButon";
import "../../styles/index.css";

export const Home = () => {
    const { store } = useContext(Context);
    

    return (
        <div className="text-center mt-5">
            <Search/>
            <div id="characters">
                <h1 className="carousel-title">Characters</h1>
                {store.characters && store.characters.length > 0 && (
                    <CarouselComponent items={store.characters.map((item) => (
                        <Characters key={item.uid} uid={item.uid} name={item.name} />
                    ))} />
                )}
            </div>

            <div id="species">
                <h1 className="carousel-title">Species</h1>
                {store.species && store.species.length > 0 && (
                    <CarouselComponent items={store.species.map((item) => (
                        <Species key={item.uid} uid={item.uid} name={item.name} />
                    ))} />
                )}
            </div>

            <div id="planets">
                <h1 className="carousel-title">Planets</h1>
                {store.planets && store.planets.length > 0 && (
                    <CarouselComponent items={store.planets.map((item) => (
                        <Planets key={item.uid} uid={item.uid} name={item.name} />
                    ))} />
                )}
            </div>

            <div id="starships">
                <h1 className="carousel-title">Starships</h1>
                {store.naves && store.naves.length > 0 && (
                    <CarouselComponent items={store.naves.map((item) => (
                        <Naves key={item.uid} uid={item.uid} name={item.name} />
                    ))} />
                )}
            </div>
            
         <BackToTopButton/>   
            
        </div>
    );
};
