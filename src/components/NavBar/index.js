import React from 'react';
import AcctCircle from '../AcctCircle'
import { Container } from './NavBarElements';

const NavBar = () => {

	return (

		<Container>
			<div>
				logo
			</div>
			<div>
				searchbar
			</div>
			<div>
				post+
			</div>
			<div style={{marginLeft: "auto", flex: "1"}}>
				<AcctCircle width="50px" height="50px" />
			</div>
		</Container>
		)
}

export default NavBar;