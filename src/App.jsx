import React, { useEffect, useState } from "react";
import { getAllPersonajes } from "./actions/Personajes.api";
import { CardPersonajes } from "./Components/CardPersonajes";


export const App = () => {
    const [Personajes, setPersonajes] = useState([]);


    useEffect(() => {
        getAllPersonajes().then((res) => {
            setPersonajes(res);
        });
    }, []);

    return (
        <div className="bg-dark text-white">
            <main>
                <h1 className="text-center display-1 py-4">Rick and Morty</h1>
                <article className="container">
                    <div className="row">
                        {Personajes.map((per) => (
                            <div className="col-md-4" key={per.id}>
                                <CardPersonajes {...per} />
                            </div>
                        ))}
                    </div>
                </article>
            </main>
        </div>
    );
};
