import { Modal } from "./Modal"

export const CardPersonajes = ({name,id,image}) => {
    return(
    <div className="card" >
       <div className="text-center ">
        <h1>{name} #{id}</h1>
        <img className="img-fluid rounded-pill "src={image}/>
        <Modal id={id}/>
        </div>
    </div>
    )
}