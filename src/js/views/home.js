import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Naves } from "../component/naves";
import { Characters } from "../component/characters";
import CarouselComponent from "../component/CarouselComponent";
import "../../styles/home.css";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <h1>Home!</h1>
            
            
            <h1>Personajes desde flux</h1>
            {store.characters && store.characters.length > 0 && (
                <CarouselComponent items={store.characters.map((item) => (
                    <Characters key={item.uid} uid={item.uid} name={item.name} />
                ))} />
            )}

            <h1>Naves desde flux</h1>
            {store.naves && store.naves.length > 0 && (
                <CarouselComponent items={store.naves.map((item) => (
                    <Naves key={item.uid} uid={item.uid} title={item.name} />
                ))} />
            )}
            
        </div>
    );
};
