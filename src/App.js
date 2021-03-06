import React, {Component} from 'react' ;
import Cardlist from './cardlist.js' ;
import Searchbox from './Search.js' ;
import Scroll from './Scroll.js' ;
// import {friends} from './friend.js' ;
import './App.css' ;

class App extends Component {
	constructor()
	{
		super() ;
		this.state = {
			friends : [] ,
			searchText : '' ,
		}
	}

	componentDidMount()
	{
		fetch('http://magic-brain-api.herokuapp.com/avenger')
		.then(response => response.json())
		.then(data => this.setState({friends : data}) ) ;
	}

	onSC = (event) => {
		this.setState({searchText : event.target.value}) ;
		console.log(event.target.value) ;
	}
	render()
	{	const ffriends = this.state.friends.filter(friend => {
			return friend.name.toLowerCase().includes(this.state.searchText.toLowerCase()) ;
		}) ;
		return (
		<div className = "tc" >
			<h1> Avengers </h1>
			<Searchbox searchChange={this.onSC}/>
			<Scroll>
				<Cardlist friends ={ffriends}/>
			</Scroll>
		</div>
		) ;
	}
}

export default App ;