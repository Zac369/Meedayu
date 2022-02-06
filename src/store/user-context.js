import React, {useState, useEffect} from 'react';




const UserContext = React.createContext({
	isLoggedIn: false,
	
});


export const UserContextProvider = (props) => {
	const [account, setAccount] = useState();
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {




	}, []);

	const loginHandler = (props) => {
		setAccount(props);
		setLoggedIn(true);
	};



	return (
		<UserContext.Provider
			value={{
				account: account



			}}
		>
			{props.children}
		</UserContext.Provider>


		)

}

export default UserContext;