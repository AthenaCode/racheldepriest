import React, { Component } from 'react';

export default class NavBar extends Component{
	render(){
	return(
		<ul class="nav nav-tabs">
		  <li role="presentation" class="active"><a href="#">Home</a></li>
		  <li role="presentation"><a href="#">Profile</a></li>
		  <li role="presentation"><a href="#">Messages</a></li>
		</ul>	
		)
	}	
}