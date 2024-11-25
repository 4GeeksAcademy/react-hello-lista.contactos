import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const AddContact = () => {
    const{actions, store}=useContext(Context)
    const[email, setEmail]=useState("")
    const[nombre, setNombre]=useState("")
    const[telefono, setTelefono]=useState("")
    const[direccion, setDireccion]=useState("")
    const navigate=useNavigate()

    const agregar= async(e)=>{
        e.preventDefault()
        let nuevoContacto={
            "name": nombre,
            "phone": telefono,
            "email": email,
            "address": direccion
          }
          let resp=await actions.createContacto(nuevoContacto)
          if(resp){
            navigate("/")
          }
    }
    return (
        <div className="container">
            <h1>Agregar contacto</h1>

            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Nombre</label>
                    <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Telefono</label>
                    <input type="text" value={telefono} onChange={(e)=> setTelefono(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Direccion</label>
                    <input type="text" value={direccion} onChange={(e)=> setDireccion(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="button" onClick={(e)=> agregar(e)} className="btn btn-primary">Agregar contacto</button>
            </form>
        </div>
    )
}
export default AddContact