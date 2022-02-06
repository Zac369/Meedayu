import React from 'react';
import AcctCircle from '../AcctCircle'
import { Container } from './NavBarElements';

const NavBar = () => {

	return (

		<Container>	

			<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="#">
				<img id="login-logo" src="/assets/images/Meedayu_logo.jpg" width="30" height="30" class="d-inline-block align-top" alt=""></img>      
				Meedayu
				</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
				<li class="nav-item active">
					<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">MediaView</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Login</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Profile</a>
				</li>
				</ul>
			</div>
			</nav>
			<div style={{marginLeft: "auto", flex: "1"}}>
				<AcctCircle width="50px" height="50px" />
			</div>
		</Container>
		)
}

export default NavBar;