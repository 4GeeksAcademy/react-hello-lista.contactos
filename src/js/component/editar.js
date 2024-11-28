import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const Editar = ({ id }) => {
    const { actions, store } = useContext(Context)
    const [email, setEmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")

    const editar = async (e) => {
        e.preventDefault()
        let nuevoContacto = {
            "name": nombre,
            "phone": telefono,
            "email": email,
            "address": direccion
        }

        await actions.editContact(id,nuevoContacto)
    }

    return (
        <div>
            <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Contacto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Nombre</label>
                                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Telefono</label>
                                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Direccion</label>
                                    <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} className="form-control" id="exampleInputPassword1" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={(e) => editar(e)} data-bs-dismiss="modal">Editar Contacto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Editar