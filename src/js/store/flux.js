const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			createUser: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Beli", {
						method: "POST",
						headers: { "Content-Type": "application/json" }
					})
					if (response.status == 201) {
						getActions().getContact()
						return true
					}
				} catch (error) {
					console.log(error)
					return false
				}

			},

			getContact: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Beli/contacts", {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					})
					if (response.status == 200) {
						const data = await response.json()
						setStore({ contacts: data.contacts })
						console.log(data.contacts)
						return true
					}
					if (response.status == 404) {
						getActions().createUser()
						return
					}
				} catch (error) {
					console.log(error)
					return false
				}

			},
			createContacto: async (nuevoContacto) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Beli/contacts", {
						method: "POST",
						headers: { "Content-Type": "application/json" }, 
						body: JSON.stringify(nuevoContacto)
					})
					if (response.status == 201) {
						getActions().getContact()
						return true
					}
				} catch (error) {
					console.log(error)
					return false
				}

			},

			deleteContact: async (id) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Beli/contacts/"+id, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" }
					})
					console.log(response.status)
					if (response.status == 204) {
						getActions().getContact()
						return true
					}
					
				} catch (error) {
					console.log(error)
					return false
				}

			},

		}
	};
};

export default getState;
