import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters";
import { Naves } from "../component/naves";
import { Planets } from "../component/planets";
import { Species } from "../component/species";

export const Search = () => {
    const { store } = useContext(Context);

    return (
        <div className="search-results">
            {store.filteredCharacters && store.filteredCharacters.length > 0 && (
                <div>
                    <h2>Characters</h2>
                    <div className="d-flex flex-wrap">
                        {store.filteredCharacters.map(character => (
                            <Characters key={character.uid} uid={character.uid} name={character.name} />
                        ))}
                    </div>
                </div>
            )}
            {store.filteredNaves && store.filteredNaves.length > 0 && (
                <div>
                    <h2>Naves</h2>
                    <div className="d-flex flex-wrap">
                        {store.filteredNaves.map(nave => (
                            <Naves key={nave.uid} uid={nave.uid} name={nave.name} />
                        ))}
                    </div>
                </div>
            )}
            {store.filteredPlanets && store.filteredPlanets.length > 0 && (
                <div>
                    <h2>Planets</h2>
                    <div className="d-flex flex-wrap">
                        {store.filteredPlanets.map(planet => (
                            <Planets key={planet.uid} uid={planet.uid} name={planet.name} />
                        ))}
                    </div>
                </div>
            )}
            {store.filteredSpecies && store.filteredSpecies.length > 0 && (
                <div>
                    <h2>Species</h2>
                    <div className="d-flex flex-wrap">
                        {store.filteredSpecies.map(specie => (
                            <Species key={specie.uid} uid={specie.uid} name={specie.name} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
