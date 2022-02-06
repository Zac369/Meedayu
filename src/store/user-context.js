import React, {useState, useEffect, useMemo} from 'react';




const UserContext = React.createContext({
	isLoggedIn: false,
	account: '',
	setAccount: () => {},
	
});


export const UserContextProvider = (props) => {
	const [account, setAccount] = useState('temp addy');
	const [loggedIn, setLoggedIn] = useState(false);

	const value = useMemo(
		() => ({ account, setAccount }),
		[account]
	);

	useEffect(() => {



	}, []);




	return (
		<UserContext.Provider
			value={value}
		>
			{props.children}
		</UserContext.Provider>


		)

}

export default UserContext;