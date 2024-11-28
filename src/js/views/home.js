import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import Card from "../component/card";
import Editar from "../component/editar";

export const Home = () => {
	const { actions, store } = useContext(Context)
	const [edit, setEdit] = useState ({
		showModal:false,
		id:undefined
	})
	useEffect(() => {
		actions.getContact()
	}, [])
	return (


		<div className="container text-center mt-5">
			<h1>Contactos</h1>
			{store.contacts.map((item) => (
				<Card
					key={item.id}
					id={item.id}
					name={item.name}
					phone={item.phone}
					address={item.address}
					email={item.email}
					editar={()=> setEdit({showModal:true, id:item.id})}
				/>
			))}
			<Editar
			id={edit.id}
			showModal={edit.showModal}
			onClose={()=>setEdit({showModal:false})}
			/>
		</div>
	)
};
