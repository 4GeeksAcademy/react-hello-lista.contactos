import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import Card from "../component/card";

export const Home = () => {
	const { actions, store } = useContext(Context)

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
				/>
			))}
		</div>
	)
};
