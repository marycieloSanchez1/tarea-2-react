import { useState } from "react";
import { getPersonajesId } from "../actions/Personajes.api";

export const Modal = ({ id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [personaje, setPersonaje] = useState(null);

    const openModal = () => {
        getPersonajesId(id).then((res) => setPersonaje(res));
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            <button class="btn btn-success" onClick={openModal}>Información</button>
            {isOpen && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal-content">
                        <div className="modal-close" onClick={closeModal}></div>
                        {personaje && (
                            <div className="cards-container">
                                <div className="card py-4">
                                    <h2>Información del personaje #{id}</h2>
                                    <img src={personaje.image} alt={personaje.name} />
                                    <p>Nombre: {personaje.name}</p>
                                    <p>Especie: {personaje.species}</p>
                                    <p>Estado: {personaje.status}</p>
                                    <p>Ubicación: {personaje.location.name}</p>
                                    <p>Origen: {personaje.origin.name}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};




