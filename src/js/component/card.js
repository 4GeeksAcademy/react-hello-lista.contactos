import React,{useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";

const Card = ({ id, name, phone, email, address, editar }) => {
    const{actions}=useContext(Context)

    return (
        <div className="d-flex justify-content-center">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4 p-3">
                        <img src={rigoImage} className="img-fluid rounded-start" alt={name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">{name}</h5>
                                <div>
                                    <button type="button" className="btn btn-outline-success mx-2" onClick={()=> editar()}
                                     data-bs-toggle="modal" data-bs-target="#editModal"
                                    >
                                        <i className="fa fa-pen"></i>
                                    </button>
                                    <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                            <p className="card-text text-start"> <i className="fa fa-phone" style={{ paddingRight: "10px" }}></i> {phone}</p>
                            <p className="card-text text-start"> <i className="fa fa-envelope" style={{ paddingRight: "10px" }}></i> {email}</p>
                            <p className="card-text text-start"> <i className="fa fa-map-pin" style={{ paddingRight: "10px" }}></i> {address}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Borrar contacto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Desea borrar a {name}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-danger" onClick={()=> actions.deleteContact(id)} data-bs-dismiss="modal">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card